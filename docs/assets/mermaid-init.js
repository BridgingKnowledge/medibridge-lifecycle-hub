/*
 Robust Mermaid loader/init for MkDocs (works on GitHub Pages + local preview).
  - If Mermaid isn't present, dynamically load it from CDN
  - Initialize diagrams on initial load and on SPA navigation (material theme document$)
  - Safe no-op if Mermaid never becomes available
*/
(function () {
  const MERMAID_CDN = 'https://unpkg.com/mermaid@10/dist/mermaid.min.js';

  function initMermaidOnce() {
    if (!window.mermaid) return;
    try {
      window.mermaid.initialize({ startOnLoad: false });
      window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid, .mermaid'));
    } catch (e) {
      // swallow errors - don't break page
      console.error('mermaid init error', e);
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
      existing.addEventListener('load', cb);
      existing.addEventListener('error', () => { /* ignore */ });
      return;
    }
    const s = document.createElement('script');
    s.src = MERMAID_CDN;
    s.defer = true;
    s.onload = cb;
    s.onerror = () => { console.warn('Failed to load Mermaid from CDN'); };
    document.head.appendChild(s);
  }

  function run() {
    ensureMermaidLoaded(initMermaidOnce);
  }

  if (window.document$ && typeof document$.subscribe === 'function') {
    // Material theme SPA navigation
    document$.subscribe(() => run());
  } else {
    // Fallback for non-SPA pages
    document.addEventListener('DOMContentLoaded', run);
  }
})();
