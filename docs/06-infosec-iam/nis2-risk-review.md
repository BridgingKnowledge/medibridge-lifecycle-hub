# NIS2 Risk & Cybersecurity Impact Review

**Document Version:** 1.0  
**Applies to:** Medibridge Ultrasound AI Suite  
**Related Standards:** NIS2 Directive (EU) 2022/2555, ISO/IEC 27001, ISO/IEC 81001‑5‑1, IEC 62304, MDR Annex I (17.2)

---

## 1. Introduction

The **NIS2 Directive** extends cybersecurity obligations to manufacturers and operators of essential and important entities, including those in the **medical and digital health sectors**.  
The Medibridge Ultrasound AI Suite falls under the **"important entity"** category due to its role in processing patient health data and its integration into healthcare information systems.

This assessment defines the cybersecurity governance framework, risks, and mitigations aligned with **ISO/IEC 27001**, **MDR Annex I**, and **ISO/IEC 81001‑5‑1**.

---

## 2. Scope

| Element | Description |
|----------|--------------|
| **System Name** | Medibridge Ultrasound AI Suite |
| **Scope** | Edge ultrasound device + AI processing + cloud data services |
| **Data Type** | Patient imaging, clinical metadata |
| **Interfaces** | DICOM, HL7 FHIR, HTTPS API |
| **Users** | Radiologists, clinicians, IT administrators |

---

## 3. NIS2 Core Obligations & Implementation Status

| NIS2 Article | Requirement | Implementation | Supporting Documents |
|---------------|--------------|----------------|----------------------|
| Art. 20 | Establish cybersecurity risk-management measures | ✔️ Implemented via ISMS (ISO/IEC 27001) | ISMS Policy Doc |
| Art. 21 | Supply chain security and vulnerability management | ⚠️ Partial — vendor security evaluation ongoing | Supplier Management Procedure |
| Art. 22 | Incident handling and response capability | ✔️ Mock CSIRT process defined | Incident Response Plan |
| Art. 23 | Business continuity and disaster recovery | ✔️ Mock DRP and backup verification process | BCP-DRP Plan |
| Art. 24 | Reporting of significant incidents within 24 hours | ✔️ Simulated workflow documented | Incident Report Template |
| Art. 25 | Governance accountability | ✔️ Assigned CISO role in governance | Roles & Responsibilities |
| Art. 26 | Cybersecurity training | ✔️ Awareness program defined | Competence & Training Records |

---

## 4. Risk Assessment Summary (Aligned with ISO 27005)

| Threat | Impact | Likelihood | Risk Level | Mitigation |
|---------|---------|-------------|-------------|-------------|
| Unauthorized access to cloud API | High | Medium | **High** | Enforce OIDC authentication, encryption-in-transit |
| Data leakage via misconfigured cloud storage | High | Low | **Medium** | Implement encryption-at-rest, restricted access policies |
| AI model poisoning during update | Critical | Low | **Medium** | Model versioning, checksum validation, change control |
| Malware/ransomware on ultrasound device | High | Medium | **High** | Hardened OS, signed firmware updates |
| Insider misuse of admin privileges | Medium | Medium | **Medium** | IAM with least privilege, activity logging |
| Unpatched vulnerabilities in dependencies | High | High | **High** | Monthly patch cycle, automated vulnerability scanning |
| Downtime due to DDoS or network outage | Medium | Medium | **Medium** | Cloud redundancy, CDN failover |

---

## 5. Technical Controls Overview

| Control Category | Framework Reference | Implementation |
|------------------|--------------------|----------------|
| Access Control | ISO/IEC 27001 A.9 | Role-based IAM + MFA |
| Encryption | ISO/IEC 27001 A.10 | AES-256 encryption at rest, TLS 1.3 in transit |
| Vulnerability Management | NIS2 Art. 21 | Patch management workflow |
| Logging & Monitoring | ISO/IEC 27002 A.12 | Centralized logging (mock SIEM) |
| Secure Development | ISO/IEC 81001‑5‑1 | Threat modeling and secure coding checklists |
| Incident Response | NIS2 Art. 22 | CSIRT integration and response templates |
| Backup & Recovery | ISO/IEC 27001 A.17 | Daily encrypted backups verified weekly |

---

## 6. Governance and Reporting

- **CISO (Chief Information Security Officer)**: Responsible for NIS2 compliance and reporting to authorities.
- **Incident Notification Timeline**:
  - **24 hours** – Early warning to authority
  - **72 hours** – Detailed incident report
  - **1 month** – Final remediation summary
- **Auditing**: Internal audit planned annually against ISO/IEC 27001 control set.

---

## 7. Continuous Improvement

- NIS2 readiness is reviewed quarterly during **Management Review Meetings**.
- Cyber maturity levels are tracked against **ENISA NIS2 compliance framework**.
- Lessons learned from mock incidents are incorporated into the **QMS CAPA process**.

---

## 8. References

- [Directive (EU) 2022/2555 – NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555)
- [ISO/IEC 27001:2022 – Information Security Management Systems](https://www.iso.org/standard/82875.html)
- [ISO/IEC 81001-5-1:2021 – Health Software Cybersecurity](https://www.iso.org/standard/76155.html)
- [ENISA NIS2 Guidelines for Healthcare](https://www.enisa.europa.eu/topics/nis-directive)

---

**Prepared by:** Medibridge Cybersecurity & Compliance Team  
**Last Updated:** October 2025
