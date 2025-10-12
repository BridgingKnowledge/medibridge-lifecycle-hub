# GAMP 5 Alignment and Software Validation Framework

**Document Version:** 1.0  
**Applies to:** Medibridge Ultrasound AI Suite  
**Based on:** ISPE GAMP 5, IEC 62304, ISO 13485, ISO 14971

---

## 1. Purpose

This document outlines how GAMP 5 principles are applied to the validation of the Medibridge ultrasound AI system. The framework ensures a **risk-based, documented, and traceable** approach to the development and maintenance of computerized systems used in a regulated environment.

---

## 2. System Overview

| Attribute | Description |
|------------|-------------|
| **System Type** | AI-enabled ultrasound triage software + hardware |
| **Intended Use** | Diagnostic image triage and workflow optimization |
| **Lifecycle Model** | V-model lifecycle (aligned with GAMP 5 & IEC 62304) |
| **Software Category (GAMP 5)** | **Category 5** – Custom application with AI component |

---

## 3. Validation Lifecycle (V-Model)

```text
User Requirements (URS)
        ↓
Functional Specification (FS)
        ↓
Design Specification (DS)
        ↓
Implementation / Coding
        ↓
Installation Qualification (IQ)
        ↓
Operational Qualification (OQ)
        ↓
Performance Qualification (PQ)
```
Each phase is accompanied by defined deliverables, reviews, and traceability per GAMP 5.

## 4. Key Deliverables and Responsibilities

| Document | Description | Owner |
|----------|-------------|-------|
| URS | Functional, performance, and regulatory requirements | QA / Clinical Team |
| FS | System-level design, workflows, interfaces | System Architect |
| DS | Technical architecture, AI model logic, algorithms | Software Engineering |
| IQ | Verification of system installation | IT Infrastructure |
| OQ | Functional testing and security verification | QA / Software Validation |
| PQ | Performance validation under simulated clinical use | Clinical Evaluation Team |
| RTM | Requirement traceability matrix linking URS–FS–DS–Test Cases | QA |

---

## 5. Risk-Based Approach

Validation effort is scaled according to **risk to patient safety, product quality, and data integrity**, consistent with **ISO 14971** and **GAMP 5 Appendix M4**.

| Risk Level | Criteria | Validation Effort |
|------------|----------|-------------------|
| High | AI misclassification affecting diagnosis | Full verification and PQ test |
| Medium | Data integrity or loss | Functional and integration test |
| Low | Logging or administrative UI issues | Simplified testing |

---

## 6. Software Change Control

All modifications are controlled per **QMS SOP-QA-CHANGE-001**:

- Change request logged in issue tracker  
- Impact assessment (risk + validation)  
- Approval by QA and System Owner  
- Regression and revalidation testing  
- Update of RTM and test summary reports  

---

## 7. Integration with IEC 62304 & MDR

| Lifecycle Area | GAMP 5 | IEC 62304 | MDR Annex |
|----------------|--------|------------|------------|
| Development Planning | D2 | Clause 5.1 | Annex IX Sec. 2 |
| Risk Management | M4 | Clause 7 | Annex I |
| Verification & Validation | D4 | Clause 5.7 | Annex II |
| M
