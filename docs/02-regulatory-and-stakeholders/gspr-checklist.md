# EU MDR Annex I – GSPR Checklist

This document provides a mapped checklist of the General Safety and Performance Requirements (GSPRs) outlined in Annex I of the EU MDR 2017/745, tailored to the Medibridge AI ultrasound system.

---

## ✅ Legend

| Status     | Meaning                     |
|------------|-----------------------------|
| ✔️ Compliant | Fully addressed            |
| ⚠️ Partial  | Partially implemented       |
| ❌ Gap      | Not addressed or applicable |

---

## 1. General Requirements (Chapter I)

| GSPR | Description                                             | Status | Notes |
|------|---------------------------------------------------------|--------|-------|
| 1    | Devices shall achieve intended performance and safety   | ✔️     | Risk analysis and clinical evaluation documented |
| 2    | Risk management throughout the product lifecycle        | ✔️     | Based on ISO 14971 |
| 3    | Risk reduction as far as possible (ALARP)               | ✔️     | Residual risk accepted based on benefit-risk analysis |
| 4    | Risk management must consider usability                 | ✔️     | Usability testing completed (IEC 62366-1) |
| 5    | Devices must be designed for safe use                   | ✔️     | Labelling and IFU drafts developed |
| 6    | Design to reduce use errors                             | ✔️     | Human factors input integrated |
| 7    | Protection against mechanical/electrical risks          | ✔️     | Device meets IEC 60601 for electrical safety |
| 8    | Eliminate risks related to manufacturing defects        | ⚠️     | Manufacturing controls outlined in QMS |
| 9    | Information provided must reduce residual risks         | ✔️     | IFU and training content under review |
| 10   | Devices must be suitable for their intended environment | ✔️     | Deployment scenarios defined (hospital, clinic) |

---

## 2. Design and Manufacture (Chapter II)

| GSPR | Description                                             | Status | Notes |
|------|---------------------------------------------------------|--------|-------|
| 11   | Chemical, physical, biological safety                   | ✔️     | No patient-contacting components beyond ultrasound probe |
| 12   | Infection and microbial contamination                   | ✔️     | Probe is disinfected; compliant with ISO 17664 |
| 13   | Manufacturing procedures to ensure safety               | ✔️     | Mock DMR in place in QMS |
| 14   | Devices with measuring function                         | ❌     | N/A – No direct measurement claimed |
| 15   | Radiation exposure                                      | ❌     | N/A – Ultrasound is non-ionizing |
| 16   | Safety of devices connected to others                   | ✔️     | Interoperability defined via DICOM/HL7 profiles |
| 17   | IT security, unauthorized access                        | ✔️     | See Cybersecurity section, ISO/IEC 81001-5-1 |
| 18   | Devices with software                                   | ✔️     | Documented per IEC 62304 |
| 19   | Devices incorporating AI or adaptive algorithms         | ⚠️     | Model lock explained; change control pending |

---

## 3. Information Supplied (Chapter III)

| GSPR | Description                                             | Status | Notes |
|------|---------------------------------------------------------|--------|-------|
| 20   | General information (label, IFU)                        | ✔️     | Mock UDI + symbols per ISO 15223-1 |
| 21   | Labels and symbols                                      | ✔️     | Compliant with ISO 15223-1 |
| 22   | Instructions for Use                                    | ✔️     | Draft IFU created |
| 23   | Safety information in case of reuse                     | ❌     | N/A – Single-use not applicable |
| 24   | Requirements for sterile devices                        | ❌     | Not sterile – probe reprocessed per instructions |

---

## Summary of Actions

- ⚠️ Finalize AI change control plan
- ⚠️ Complete full validation trace matrix
- ✔️ GSPR checklist will be version-controlled as part of the technical documentation

