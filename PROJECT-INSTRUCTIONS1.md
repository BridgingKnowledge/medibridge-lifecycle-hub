# 🚀 Lifecycle Hub — Operating Instructions (v2)

> **Language policy:** All user-facing content in this repository must be written in **English (US)**.  
> Do **not** translate IDs (REQ/RSK/US/VPL/VP/TR), repository names, file/folder names, URLs, or code blocks.

> **Mental model:**  
> GitHub **Organization = the bookshelf**,  
> each **Repository = a binder**,  
> each **Folder = a tab**,  
> each **File = a page**.  
> This repo is the **front page** and **table of contents** for the MediBridge bookshelf.

---

## 🎯 Purpose
This repository demonstrates **end-to-end lifecycle governance** for clinical/IT systems and serves as the **master hub** for the entire MediBridge portfolio.  
It shows capabilities **beyond QA**: structuring, documenting, and steering complex initiatives from **idea to decommissioning**, in a way that clinicians, engineers, and leadership can all follow.

**This hub:**
- Hosts **chapter docs** for the full lifecycle.
- **Links out** to the product demo, training tracks, templates, and collaboration flow (each in its **own** repository).
- Highlights **traceability** (Requirements ↔ Risk ↔ Validation ↔ Operations/Changes).

---

## 🧩 Scope (covered lifecycle areas)
1) Idea & business case  
2) Regulatory requirements & stakeholder analysis  
3) Requirements & design  
4) Risk assessment & QMS  
5) Validation (system/IT/UAT)  
6) Information security (IAM, SoD, POLP, GDPR)  
7) ITRA (IT risk assessment)  
8) Operations & monitoring  
9) Incidents & deviations  
10) Change control  
11) Roles & responsibilities  
12) Supplier management  
13) Training & competence  
14) Audit & compliance  
15) BCP/DRP  
16) Post-market surveillance & complaints  
17) Continuous improvement  
18) Decommissioning

> 📌 Note: **Templates** and **product artifacts** live in **their own** repositories and are linked from here.

---

## 📦 What **belongs** in this repository (and what does **not**)

### ✅ This hub **contains**
**`docs/` — chapter structure (one folder per area):**

docs/
  00-intro/
    welcome.md
  01-business-case/
    index.md
  02-regulatory-and-stakeholders/
    index.md
  03-requirements-design/
    index.md
  04-risk-qms/
    index.md
  05-validation/
    index.md
  06-infosec-iam/
    index.md
  07-operations-monitoring/
    index.md
  08-incidents-deviations/
    index.md
  09-change-control/
    index.md
  10-roles-responsibilities/
    index.md
  11-supplier-management/
    index.md
  12-training-competence/
    index.md
  13-audit-compliance/
    index.md
  14-bcp-drp/
    index.md
  15-pms-complaints/
    index.md
  16-continuous-improvement/
    index.md
  17-decommissioning/
    index.md


**`flows/` — overview diagrams (Mermaid/ASCII):**
- `flows/lifecycle.mmd` — end-to-end lifecycle
- `flows/change-triage.mmd` — incident → change → validation

**Root files:**
- `README.md` — “Start here” page with navigation
- `mkdocs.yml` — optional, for GitHub Pages documentation site

### ❌ This hub **does not contain** local copies of:
`/collaboration-hub`, `/training`, `/risk`, `/product-demo`, `/portfolio`  
These are **separate repositories** and are linked from this hub.  
Templates themselves live in `risk-assessment-templates` (linked here).

---

## 🔗 Related repositories (binders on the shelf)
- **Product & validation:** `medibridge-ultrasound-suite`  
  → Requirements traceability, validation plans, API contract.
- **Collaboration & governance:** `medibridge-collaboration-hub`  
  → Feedback log, user stories, ADRs/decision log, explanations back to clinicians.
- **Risk & templates:** `risk-assessment-templates`  
  → ITRA/DPIA/FMEA templates + worked examples.
- **Training (overview):** `medibridge-training`  
  → Learning paths & assessment model.
  - Clinicians: `medibridge-training-clinicians`  
  - Application specialists: `medibridge-training-application-specialists`  
  - Developers: `medibridge-training-developers`
- **Walkthroughs:** `medibridge-application-walkthrough`  
  → Step-by-step scenarios with screenshots/GIFs.
- **Profile:** `BridgingKnowledge`  
  → About me, highlights, shortcuts.

> Add a **“🔙 Back to MediBridge Lifecycle Hub”** link at the top of each related repo’s README.

---

## 🧭 Navigation pattern
On the **README.md** front page, provide three clear entry links:
- **See product & traceability** → `medibridge-ultrasound-suite`  
- **See governance & collaboration flow** → `medibridge-collaboration-hub`  
- **See risk templates & examples** → `risk-assessment-templates`

At the **bottom of every** `docs/*/index.md`, add this block **once**:
```md
> **Related repositories:**  
> • Product & validation: medibridge-ultrasound-suite  
> • Governance & feedback: medibridge-collaboration-hub  
> • Templates & examples: risk-assessment-templates
