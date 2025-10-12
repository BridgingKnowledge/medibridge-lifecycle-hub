# GovernanceLite API (static docs)

This folder contains a static snapshot of the GovernanceLite API OpenAPI (Swagger) specification and a small ReDoc viewer so the API can be browsed from the hub site.

Files
- `openapi.json` — generated OpenAPI JSON (should be updated from the running API)
- `index.html` — ReDoc viewer that renders `openapi.json`

Regenerate locally
1. Start the GovernanceLite app locally (Development + port 5006):
   ```powershell
   $env:ASPNETCORE_ENVIRONMENT='Development'
   $env:ASPNETCORE_URLS='http://localhost:5006'
   dotnet run --project ..\..\medibridge-governance-lite\src\GovernanceLite.Web\GovernanceLite.Web.csproj
   ```
2. Download the swagger JSON to this folder:
   ```powershell
   curl http://localhost:5006/swagger/v1/swagger.json -o openapi.json
   ```
3. Commit & push the `openapi.json` file into this repo.

Automated update (GitHub Action)
- A workflow is included that, when triggered, builds and runs the governance project in the runner, fetches `swagger/v1/swagger.json` and commits it into this folder.
- The workflow requires permissions to push to this repo; it's recommended to run it from the governance repo as a cross-repo updater or to run it manually in the hub repo.
