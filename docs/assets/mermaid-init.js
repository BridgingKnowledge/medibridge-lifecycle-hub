/*
 Robust Mermaid loader/init for MkDocs (works on GitHub Pages + local preview).
  - If Mermaid isn't present, dynamically load it from CDN
  - Initialize diagrams on initial load and on SPA navigation (material theme document$)
  - Safe no-op if Mermaid never becomes available
*/
(function () {
  const MERMAID_CDN = 'https://unpkg.com/mermaid@10/dist/mermaid.min.js';

  function initMermaidOnce() {
    // Convert fenced/code blocks to <div class="mermaid"> elements so Mermaid can render them
    try {
      transformMermaidCodeBlocks();
    } catch (e) {
      console.error('[mermaid-init] transform error', e);
    }

    if (!window.mermaid) {
      console.warn('[mermaid-init] mermaid not present yet');
      return;
    }

    try {
      window.mermaid.initialize({ startOnLoad: false });
      // Initialize any .mermaid blocks
      window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
      console.log('[mermaid-init] mermaid.init called');
    } catch (e) {
      // don't let mermaid errors break the page
      console.error('[mermaid-init] mermaid init error', e);
    }
  }

  function ensureMermaidLoaded(cb) {
    if (window.mermaid) {
      cb();
      return;
    }
    // If a script tag for mermaid already exists, wait for it
    const existing = Array.from(document.getElementsByTagName('script')).find(s => s.src && s.src.indexOf('mermaid') !== -1);
    if (existing) {
      console.log('[mermaid-init] found existing mermaid script tag, attaching load handler');
      existing.addEventListener('load', cb);
      existing.addEventListener('error', () => { console.warn('[mermaid-init] existing mermaid script failed to load'); });
      return;
    }
    const s = document.createElement('script');
    // Cache-bust to avoid stale CDN cache during quick iterations
    s.src = MERMAID_CDN + '?_=' + Date.now();
    s.async = false;
    s.onload = () => {
      cb();
    };
    s.onerror = () => { console.warn('[mermaid-init] Failed to load Mermaid from CDN'); };
    document.head.appendChild(s);
  }

  function run() {
    try {
      ensureMermaidLoaded(initMermaidOnce);
    } catch (e) {
      console.error('[mermaid-init] run error', e);
    }
  }

  // Helper: find code blocks with language-mermaid and replace them with div.mermaid
  function transformMermaidCodeBlocks() {
    // Primary: Select code elements commonly used for fenced mermaid code
    const codes = Array.from(document.querySelectorAll('code.language-mermaid'));
    codes.forEach((code) => convertCodeToMermaid(code));

    // Secondary: Some renderers (or GitHub Pages pipelines) emit plain <pre><code> without a language class.
    // Detect plain code blocks whose text begins with mermaid grammar keywords and convert them too.
    const possible = Array.from(document.querySelectorAll('pre > code'));
    const mermaidStarters = /^(?:graph|flowchart|sequenceDiagram|classDiagram|gantt|stateDiagram|journey|gitGraph)\b/i;
    possible.forEach((code) => {
      // Skip if already handled via language-mermaid or marked
      if (code.classList && code.classList.length) return;
      if (code.dataset && code.dataset.mermaidProcessed) return;
      const text = (code.textContent || '').trim();
      if (!text) return;
      if (mermaidStarters.test(text.split('\n', 1)[0])) {
        console.log('[mermaid-init] detected unlabeled mermaid code block, converting');
        convertCodeToMermaid(code);
      }
    });

    function convertCodeToMermaid(code) {
      try {
        // Avoid re-processing
        const parent = code.parentElement;
        const already = parent && (parent.classList && parent.classList.contains('mermaid')) || code.dataset.mermaidProcessed;
        if (already) return;

        // Extract the raw diagram text. Use textContent to avoid HTML-escaped entities.
        let text = code.textContent || '';
        // Strip fence markers if present and normalize whitespace
        text = text.replace(/^```\w*\n?|\n?```$/g, '').trim();

        // Create a container div.mermaid and put the diagram text as textContent (not innerHTML)
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = text;

        // If the code is wrapped in a <pre>, replace the pre; otherwise replace the code node
        if (parent && parent.tagName && parent.tagName.toLowerCase() === 'pre') {
          parent.parentNode.replaceChild(div, parent);
        } else if (code.parentNode) {
          code.parentNode.replaceChild(div, code);
        }

        // Mark as processed in case dynamic nav re-inserts similar nodes
        div.dataset.mermaidProcessed = '1';
      } catch (err) {
        console.error('[mermaid-init] convertCodeToMermaid error', err);
      }
    }
  }

  if (window.document$ && typeof document$.subscribe === 'function') {
    // Material theme SPA navigation
    console.log('[mermaid-init] subscribing to document$ events (Material SPA)');
    document$.subscribe(() => run());
    // Also run once in case we missed the initial nav event
    run();
  } else {
    // Fallback for non-SPA pages
    console.log('[mermaid-init] attaching DOMContentLoaded fallback');
    document.addEventListener('DOMContentLoaded', run);
  }
})();
