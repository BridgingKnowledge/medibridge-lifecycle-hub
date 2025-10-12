# Considerations regarding EU Regulatory and Stakeholder Landscape

This document outlines the regulatory framework, IT compliance requirements, and cybersecurity responsibilities applicable to the Medibridge AI-enabled ultrasound system. The system consists of hardware and AI-based software that performs automated image triaging and decision support, and is intended for use by healthcare professionals.

---

## 1. European Union Regulatory Framework

### 1.1 EU MDR 2017/745 – Medical Device Regulation

The device qualifies as a **Medical Device** under EU MDR, based on the definition in Article 2(1), due to its intended use for diagnostic purposes via image analysis and triaging.

- **Intended Use**: AI-assisted image triage tool to support clinical decision-making.
- **Risk Class**: Likely **Class IIa or IIb** under Rule 10 or Rule 11 of Annex VIII (based on the diagnostic function and AI decision-support).
- **Conformity Assessment Route**: Involves Notified Body review for Class IIa+.

### 1.2 General Safety and Performance Requirements (GSPR)

A GSPR checklist is maintained in alignment with **Annex I** of the MDR. Key relevant clauses include:

- **Chapter I**: General requirements (safety, performance, benefit-risk)
- **Chapter II**: Design and manufacturing
- **Chapter III**: Labelling, UDI, and instructions for use

### 1.3 Relevant Harmonized Standards

| Standard              | Scope                                      |
|-----------------------|--------------------------------------------|
| ISO 13485             | QMS requirements for medical devices       |
| ISO 14971             | Risk management                            |
| IEC 62304             | Software lifecycle processes               |
| IEC 62366-1           | Usability engineering                      |
| ISO 10993             | Biocompatibility (for patient contact)     |
| ISO 15223-1           | Labelling symbols                          |
| ISO/TR 20416          | Post-market surveillance planning          |
| ISO 14155             | Clinical investigation of medical devices  |
| MDCG 2019-11          | Qualification and classification of software |
| MDCG 2020-1            | Clinical evaluation of MDSW                |

---

## 2. IT Compliance & Software Validation

### 2.1 GAMP 5 – Software Validation for Computerized Systems

GAMP 5 principles are applied to define the software category, establish lifecycle documentation, and validate the system according to risk:

- **System Type**: Category 4 or 5 (complex/configurable/custom software)
- **Validation Deliverables**:
  - URS (User Requirements Specification)
  - FS (Functional Specification)
  - Design Specifications
  - IQ/OQ/PQ Protocols
  - Traceability Matrix

### 2.2 IEC 82304-1 – Health Software Safety

This standard supports safety and security for stand-alone health software:

- Emphasizes **product-level safety** over lifecycle
- Integrates quality, safety, and usability assurance
- Used in conjunction with **IEC 62304** and **ISO 14971**

### 2.3 ISO/IEC 27001 & 27701 – Information Security & Privacy

These standards guide the implementation of an **Information Security Management System (ISMS)** and **Privacy Information Management System (PIMS)**:

- **ISO/IEC 27001**: Asset management, access control, incident response
- **ISO/IEC 27701**: Privacy protection aligned with GDPR
- Supports risk-based approach to information assets used in development, deployment, and hosting of the AI system

---

## 3. Cybersecurity & NIS2 Compliance

### 3.1 EU MDR Annex I – Cybersecurity Requirements

Cybersecurity is embedded as a **general safety requirement** in MDR:

- **Annex I, Section 17.2**: Devices must be designed to prevent unauthorized access and ensure secure data exchange
- Requirements include:
  - Authentication mechanisms
  - Data integrity and confidentiality
  - Protection against malware and unauthorized access

### 3.2 ISO/IEC 81001-5-1 – Cybersecurity in Health Software

This standard outlines lifecycle-based **secure development practices** for health software and health IT systems:

- Threat modeling and risk assessment
- Secure coding and hardening
- Logging, auditability, and post-market monitoring

### 3.3 EU NIS2 Directive – Critical Infrastructure Protection

The system and its operator may fall under **NIS2 obligations** if:

- The company qualifies as an "important" or "critical" entity
- The system handles sensitive health data and connects to networks

#### NIS2 Key Requirements:
- Implement cybersecurity risk management measures
- Conduct regular vulnerability assessments
- Report security incidents within **24 hours**
- Governance and accountability at **management level**

---

## 4. Stakeholder Engagement

| Stakeholder Type     | Role & Responsibility                                  |
|----------------------|--------------------------------------------------------|
| Clinical End Users   | Define usability, clinical validation, feedback loop   |
| QARA Teams           | Compliance ownership, PMS, vigilance, audit readiness  |
| IT Security          | NIS2 compliance, ISMS implementation                   |
| Software Engineers   | IEC 62304, 81001, GAMP 5 adherence                     |
| Data Protection Officer | GDPR and ISO 27701 implementation                  |
| Notified Body        | MDR conformity assessment                              |

---

## 📌 Linked Documents

- [GSPR Checklist](../docs/02-regulatory-and-stakeholders/gspr-checklist.md)
- [MDR Classification Justification](../docs/02-regulatory-and-stakeholders/mdr-classification.md)
- [NIS2 Threat & Risk Assessment](../docs/06-infosec-iam/nis2-risk-review.md)
- [GAMP5 Validation Plan](../docs/05-validation/software-validation-plan.md)

---

## ✅ Summary

This section frames the Medibridge ultrasound AI system within a compliant EU regulatory and IT governance context. It ensures that design, development, validation, and operational activities meet the requirements of MDR, applicable cybersecurity regulations, and standards for safe, effective, and secure health software.

