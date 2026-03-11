# Global Standards & Accessibility Regulations

This document outlines the core international standards, security frameworks, and accessibility guidelines used by SafeAI-Global.

## ISO/IEC 27001:2022 — Information Security Controls (Annex A)

Key control groups to verify for every product:

- **A.5 Organizational Controls**: Security policies, roles & responsibilities, threat intelligence
- **A.6 People Controls**: Screening, awareness training, disciplinary process, remote working
- **A.7 Physical Controls**: Physical entry, equipment security, secure disposal, clear desk
- **A.8 Technological Controls**: Endpoint devices, privileged access, MFA, encryption, secure development, vulnerability management, logging & monitoring

## Application Security & Supply Chain (2026 Mandates)

With the enforcement of the Cyber Resilience Act (EU) and US National Cybersecurity Strategy:

- **Software Bill of Materials (SBOM)**: Must maintain and deliver a machine-readable SBOM for all software components to track dependencies and vulnerabilities.
- **Secure by Design**: Products must be designed with default security settings (no default passwords, secure auto-updates).
- **Vulnerability Handling**: Must have a coordinated vulnerability disclosure (CVD) process and provide security patches for the expected product lifetime (minimum 5 years under CRA).
- **Zero Trust Architecture (ZTA)**: Never trust, always verify. Apply micro-segmentation, identity-based access, and continuous monitoring (NIST SP 800-207).

## ISO/IEC 27701:2019 — Privacy Information Management (Extension to 27001)

When the product processes PII, apply these privacy extensions:

### PII Controller (7.2–7.5)

- **Focus**: Purpose limitation, consent, privacy by design, DPIA, sharing
- **Key Requirements**: Document lawful basis; implement consent management; conduct privacy impact assessments

### PII Processor (8.2–8.5)

- **Focus**: Processing instructions, subcontracting, transfers, breach
- **Key Requirements**: Process only per controller instructions; maintain processing records; notify controller of breaches

### Compliance Implementation Checklist

- Establish PII inventory (what data, where stored, who accesses, retention)
- Implement Privacy by Design (Art. 25 GDPR / ISO 27701 Clause 7.4)
- Document lawful basis for each processing purpose
- Create Data Subject Access Request (DSAR) workflow
- Set up breach notification chain (Processor → Controller → Authority → Individuals)

## ISO/IEC 42001:2023 — AI Management System

When the product contains AI/ML components:

- Define AI policy & objectives aligned with organizational values
- Conduct AI risk assessment (bias, fairness, transparency, safety)
- Establish data quality requirements for training/validation datasets
- Implement AI model lifecycle management (develop → validate → deploy → monitor → retire)
- Set up human oversight mechanisms for high-impact AI decisions
- Create AI incident response and rollback procedures
- Document AI system transparency (inputs, logic, outputs, limitations)
- Establish bias evaluation metrics and regular testing cadence
- Maintain AI audit trail (model versions, training data snapshots, decision logs)

## SOC 2 — Trust Service Criteria

For products handling customer data (especially SaaS/B2B), map features to SOC 2 criteria:

- **Security (CC6-CC8)**: Protection of system resources (Access controls, encryption, network security, vulnerability management)
- **Availability (A1)**: System uptime commitments (SLA definitions, failover/DR, capacity planning, incident monitoring)
- **Processing Integrity (PI1)**: Accurate & complete processing (Input validation, error handling, reconciliation, QA processes)
- **Confidentiality (C1)**: Protection of confidential info (Data classification, encryption at rest/transit, access restrictions, NDA)
- **Privacy (P1-P8)**: Personal information management (Notice, consent, collection limitation, use/retention/disposal, access, quality)

## Accessibility & Inclusion Compliance

Apply when the product has a user interface (web, mobile, desktop).

### Applicable Accessibility Regulations

- **European Accessibility Act (EAA)**: EU (June 2025) - All digital products/services sold in EU
- **ADA (Americans with Disabilities Act)**: US - Websites of public entities and businesses
- **Section 508**: US Federal - Federal government ICT
- **AODA**: Canada (Ontario) - Organizations with 50+ employees
- **EN 301 549**: EU - ICT accessibility standard (references WCAG)

### WCAG 2.2 Level AA Checklist

- **Perceivable**: Text alternatives for images, captions for video, sufficient color contrast (4.5:1), responsive design
- **Operable**: Full keyboard navigation, skip links, no seizure-inducing content, clear focus indicators
- **Understandable**: Consistent navigation, clear error messages, input labels, language declaration
- **Robust**: Valid HTML/ARIA, compatible with screen readers (VoiceOver, NVDA, JAWS)
