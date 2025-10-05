# 9 Change Control

**Purpose**  
Ensure changes are assessed, approved, implemented, and verified effectively.

**Scope**  
- Impact analysis, risk re-check, approvals  
- Effectiveness check and documentation

**Process (short)**  
1) Log change with context and linked REQ/RSK  
2) Assess impact, define validation touchpoints  
3) Implement, verify, and record effectiveness

## Change triage (Mermaid)

```mermaid
flowchart LR
  C[Classify] --> MIN[Minor] 
  C --> MAJ[Major]
  MIN --> P
  MAJ --> P[Plan] --> V[Validate] -->  E[Execute] 
```
Below chart show the Incident-to-control with hardware and software branches
```mermaid
flowchart TD
  IN[Incident / Complaint / Deviation] --> TRI[Triage & impact assessment]
  TRI --> DEC{Affects hardware, software, or both?}

  subgraph Hardware
    HCR[Change request HW] --> HRSK[Risk assessment IEC 60601-1/-2-37]
    HRSK --> HDR[Design review mechanical/electrical]
    HDR --> HIMP[Implement HW change / procedure]
    HIMP --> HVER[Verification bench/env tests]
    HVER --> HVAL[Validation workflow/usability IEC 62366-1]
    HVAL --> HREL{Release approved?}
  end

  subgraph Software
    SCR[Change request SW] --> SRSK[Risk assessment ISO 14971]
    SRSK --> SDR[Design review IEC 62304]
    SDR --> SIMP[Implement SW change]
    SIMP --> SVER[Verification unit/integration]
    SVER --> SVAL[Validation UAT, performance]
    SVAL --> SREL{Release approved?}
  end

  DEC --> Hardware
  DEC --> Software

  HREL -- Yes --> DEP[Deploy / Implement]
  SREL -- Yes --> DEP
  HREL -- No --> CAPA[CAPA loop]
  SREL -- No --> CAPA

  DEP --> TRACE[Update traceability HAZ/RSK/RCM/REQ/TEST]
  TRACE --> PMS[Post-market monitoring]
```
#### Explanation:
- Hardware branch: Electrical/acoustic safety and environmental verification, plus usability validation.
- Software branch: IEC 62304 design controls with formal verification and UAT.
- Unified release gate: Both branches converge on deployment, traceability updates, and PMS tracking.
---

**Artifacts/Links**  
- Collaboration decisions (ADRs): `medibridge-collaboration-hub/docs/decision-log.md`  
- Validation touchpoints: `medibridge-ultrasound-suite/validation/`


## Showcase thread #1 — One-click Save (feedback → release)
**Story in one line:** Clinicians want a **one-click** way to save and export results.

- **Feedback** → `medibridge-collaboration-hub/feedback-log/2025-01-15-save-case-one-click.md`
- **User story** → `medibridge-collaboration-hub/user-stories/US-001-export-results.md`
- **Requirement** → `medibridge-ultrasound-suite/docs/requirements.md` (REQ-001)
- **Risk/ITRA** → `risk-assessment-templates/examples/ultrasound-suite-itra.md` (RSK-005)
- **Validation** → `medibridge-ultrasound-suite/validation/test-plans/VPL-001-system-test-plan.md`
- **Traceability** → `medibridge-ultrasound-suite/validation/traceability-matrix.md`
- **Release note** → (placeholder)

> This thread shows how a clinical request becomes a validated feature with traceability and risk rationale.

> **Related repositories:**  
> • Product & validation: medibridge-ultrasound-suite  
> • Governance & feedback: medibridge-collaboration-hub  
> • Templates & examples: risk-assessment-templates
