# EU MDR Classification Justification

This document outlines the rationale for classifying the Medibridge AI-enabled ultrasound triage system under the EU MDR 2017/745.

---

## 1. Device Description

- **Name**: Medibridge Ultrasound AI Suite
- **Components**:
  - Portable ultrasound scanner hardware
  - AI software module that:
    - Automatically processes ultrasound images
    - Archives "no findings"
    - Flags "suspicious" images for physician review
- **Intended User**: Healthcare professionals (radiologists, clinicians)
- **Intended Use**: To support triaging of ultrasound scans in a diagnostic pathway

---

## 2. Classification per MDR Annex VIII

### Applicable Rule: **Rule 11**

> **Software intended to provide information which is used to take decisions with diagnosis or therapeutic purposes is classified as Class IIa, or higher if such decisions may cause serious deterioration in health.**

### Interpretation:

| Criteria                                      | Justification |
|----------------------------------------------|---------------|
| Software influences diagnostic decision      | Yes – flags images needing human review |
| Potential harm if AI misclassifies image     | Moderate risk – clinical review acts as mitigation |
| AI adapts over time (ML component)           | No – model is locked at release |
| Risk of false negatives                      | Acceptable – risk managed with human verification |

### Final Classification: **Class IIa**

- Justification:
  - AI does **not act autonomously** in diagnosis
  - Clinical validation shows high sensitivity/specificity
  - Human-in-the-loop model ensures control over final decision

---

## 3. Conformity Route (Article 52)

As a **Class IIa device**, conformity assessment must involve a Notified Body under:

- **Annex IX** (Full QMS and Technical Documentation review)
- or **Annex XI** (Product conformity verification)

Mock implementation assumes Annex IX route with QMS aligned to ISO 13485.

---

## 4. Software Qualification

### Per MDCG 2019-11:

- **Software as a Medical Device (SaMD)** – yes
- **Not accessory** – operates independently
- **Primary intended purpose**: diagnostic triage

### Per MDCG 2020-1:

- Clinical evidence required based on:
  - Clinical association
  - Analytical validation
  - Clinical validation

---

## Conclusion

The Medibridge AI system qualifies as a **Class IIa medical device** under Rule 11 of EU MDR. The classification is supported by intended use, clinical risk analysis, and mitigation strategies involving human review.

Technical documentation and QMS artifacts are maintained to support Notified Body review under Annex IX.

