/* Re-run Mermaid when navigating between pages (Material SPA) */
document$.subscribe(() => {
  if (window.mermaid) {
    mermaid.initialize({ startOnLoad: false });
    mermaid.init(undefined, document.querySelectorAll('.language-mermaid, .mermaid'));
  }
});
