# 2 Regulatory & Stakeholders

## 🎯 Purpose
To map all applicable regulations and standards into concrete system requirements and ensure stakeholder needs are captured and traceable.

## 📜 Regulatory applicability
This section outlines the regulatory strategy and requirements for the AI-enabled ultrasound device, assuming commercialization in both the European Union (under MDR) and the United States (under FDA regulations).

## EU Compliance

- Device regulated under **EU MDR (Regulation (EU) 2017/745)**
- Likely classification: **Class IIa/IIb**
- Software component is regulated as **Software as a Medical Device (SaMD)**
- Documentation includes:
  - MDR classification rationale
  - GSPR checklist (Annex I)
  - References to harmonized standards: ISO 13485, ISO 14971, IEC 62304, etc.

## US Compliance

- Device regulated by the **FDA under 21 CFR**
- Likely **Class II**, requiring a **510(k)** submission
- Software reviewed under **FDA SaMD and CDS guidance**
- Includes discussion of:
  - Classification rationale and predicate device (if applicable)
  - Software documentation (per FDA guidance)
  - QSR compliance (21 CFR Part 820)

## Bridging and Harmonization

- Common standards across regions
- Alignment with IMDRF principles for SaMD and risk categorization
- Cybersecurity and clinical evaluation harmonization

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
