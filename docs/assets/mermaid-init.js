/*
 Robust Mermaid loader/init for MkDocs (works on GitHub Pages + local preview).
  - If Mermaid isn't present, dynamically load it from CDN
  - Initialize diagrams on initial load and on SPA navigation (material theme document$)
  - Safe no-op if Mermaid never becomes available
*/
(function () {
  const MERMAID_CDN = 'https://unpkg.com/mermaid@10/dist/mermaid.min.js';

  function initMermaidOnce() {
    console.log('[mermaid-init] initMermaidOnce called - mermaid present?', !!window.mermaid);
    if (!window.mermaid) return;
    try {
      window.mermaid.initialize({ startOnLoad: false });
      window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid, .mermaid'));
      console.log('[mermaid-init] mermaid.init called');
    } catch (e) {
      // swallow errors - don't break page
      console.error('[mermaid-init] mermaid init error', e);
    }
  }

  function ensureMermaidLoaded(cb) {
    console.log('[mermaid-init] ensureMermaidLoaded - mermaid present?', !!window.mermaid);
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
    // load synchronously (no defer) to improve chance that mermaid is available when we run
    s.async = false;
    s.onload = () => {
      console.log('[mermaid-init] mermaid script loaded');
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
