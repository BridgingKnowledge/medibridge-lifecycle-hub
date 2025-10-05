# 2 Regulatory & Stakeholders

## 🎯 Purpose
To map all applicable regulations and standards into concrete system requirements and ensure stakeholder needs are captured and traceable.

## 📜 Regulatory applicability
- **EU (Denmark/EU)**:
  - MDR 2017/745 (medical devices) or IVDR 2017/746 (IVDs).
  - DKMA as competent authority; CE marking via notified body.
  - GDPR: DPIA, lawful basis, audit trail, data subject rights.
  - Standards: ISO 13485 (QMS), ISO 14971 (risk), IEC 62304 (software lifecycle), IEC 62366‑1 (usability), ISO/IEC 27001 (infosec).
- **US (FDA)**:
  - 21 CFR Part 820 (QSR/design controls).
  - 21 CFR Part 11 (electronic records/signatures).
  - HIPAA for PHI.
  - FDA Human Factors guidance; IEC 62304 accepted.
- **GxP environments**:
  - GAMP 5 category assessment.
  - Supplier audits, configuration vs customization controls.

## 👥 Stakeholder map
- **Clinicians**: Usability, workflow fit, UAT.
- **Patients**: Data protection, safety, informed consent.
- **QA/RA**: QMS, risk files, validation evidence.
- **Developers**: SDLC, secure coding, traceability.
- **Security/Privacy**: IAM, SoD, DPIA, breach response.
- **Operations**: Monitoring, incident response, DRP.
- **Suppliers**: SLAs, compliance attestations, change notifications.
- **Regulators/Notified body**: Compliance evidence, PMS, vigilance.

## 🔄 Process
1. **Regulatory scoping**: EU vs US vs both; classify device/software.
2. **Requirement derivation**: Translate each clause into REQ‑IDs.
3. **Traceability**: REQ ↔ RSK ↔ TEST.
4. **Stakeholder engagement**: RACI, feedback loops, training needs.
5. **Compliance plan**: SOPs, validation strategy, audit calendar, PMS.

## 🧠 Professional language
> “Applicable MDR/FDA requirements and ISO standards are decomposed into explicit, testable system specifications with bidirectional traceability to risk controls and validation artefacts.”

## 💬 Translation to reality
> “We make a list of the rules, turn them into clear requirements, trace each to risks and tests, and make sure the right people are involved and trained.”

## 📁 Outputs
- Regulatory applicability matrix (EU/US).
- Derived requirements with clause references.
- Stakeholder RACI and training matrix.
- Risk file (ISO 14971).
- Validation stack (VPL, VP, TR, deviations).


**Artifacts/Links**  
- Collaboration hub (feedback, ADRs, explanations): `medibridge-collaboration-hub`  

> **Related repositories:**  
> • Product & validation: medibridge-ultrasound-suite  
> • Governance & feedback: medibridge-collaboration-hub  
> • Templates & examples: risk-assessment-templates

# Collaboration Hub (link page)

This page points to the live governance and communication materials:
- Feedback log  
- User stories  
- Decision log (ADRs)  
- Explanations back to clinicians

**Go to:** `medibridge-collaboration-hub`
