---
title: Governance API
---

## Governance API

Explore the public Governance API documentation and tools for Governance Lite. The canonical viewer is hosted in the `medibridge-governance-lite` repository.

<div class="gov-api-cta">
	<p class="lead">View the API documentation and try endpoints in the Redoc viewer.</p>
	<p><a class="button" href="https://bridgingknowledge.github.io/medibridge-governance-lite/gov-api/redoc.html" target="_blank" rel="noopener">Open Governance API viewer (Redoc)</a></p>
</div>

<div class="gov-api-preview">
	<p class="muted">Preview (desktop only):</p>
	<iframe src="https://bridgingknowledge.github.io/medibridge-governance-lite/gov-api/redoc.html" style="width:100%;height:60vh;border:1px solid #ddd;display:block;" title="Governance API preview"></iframe>
</div>

---

Notes

- The Governance API viewer is maintained in the `medibridge-governance-lite` repository and published via GitHub Pages.
- If you prefer the viewer embedded permanently in this hub, I can copy the viewer assets here and add automation to keep them synced.

Quick start
-----------

- Download the OpenAPI JSON: [openapi.json](https://bridgingknowledge.github.io/medibridge-governance-lite/gov-api/openapi.json){:target="_blank"}
- Try the API with curl (example):

```bash
curl -sS https://bridgingknowledge.github.io/medibridge-governance-lite/gov-api/openapi.json | jq . | less
```

