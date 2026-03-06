# Changelog

All notable changes to the SafeAI-Global skill suite are documented in this file.

Format: [Semantic Versioning](https://semver.org/) — `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes to skill behavior or prompts
- **MINOR**: New features, new regulations, expanded coverage
- **PATCH**: Fixes, typo corrections, citation updates

---

## [v2.1.0] — 2026-03-06

### All Skills

- Added **Related Skills** cross-linking between all 5 skills
- Added **Usage Without Installation** guide (Gemini, Claude, ChatGPT, Copilot, Cursor, Windsurf)
- Added **Version & Changelog** tracking to each SKILL.md

### New Skills

- **safeai-gdpr-expert** `v1.0.0` — GDPR Art-by-Art compliance, EU AI Act risk classification, DPIA, Data Subject Rights
- **safeai-hipaa-expert** `v1.0.0` — HIPAA Privacy/Security Rule, FDA SaMD, 18 PHI identifiers, breach protocol
- **safeai-fintech-compliance** `v1.0.0` — PCI-DSS v4.0.1, PSD2/SCA, AML/KYC CDD tiers, Open Banking FAPI
- **safeai-asean-data-protection** `v1.0.0` — VN, SG, TH, MY, ID, PH country deep-dives, ASEAN MCCs, CBPR

### Infrastructure

- Created `CHANGELOG.md`
- Updated `README.md` with multi-skill documentation
- Updated `package.json` to v2.1.0

---

## [v2.0.0] — 2026-03-05

### safeai-global-prd-agent

- Expanded coverage from 4 to **35+ jurisdictions** (APAC, EMEA, Americas)
- Added **Cross-Border Data Transfer Matrix** (EU, CN, IN, VN, US, BR, ASEAN)
- Added **AI-Specific Governance Rules** (EU AI Act, NIST AI RMF, SG AI Verify, CN AI, CA AIDA, BR AI, KR AI)
- Expanded PII detection to include Biometric, Health, and Geolocation data
- Enhanced 14-item Actionable Compliance Checklist
- Added conflict resolution behavioral rule

### Infrastructure

- Created `SECURITY.md` — vulnerability reporting policy
- Created `LICENSE` (MIT)
- Created `.github/workflows/security-audit.yml` — npm audit + content security check CI
- Bumped `package.json` to v2.0.0

---

## [v1.0.0] — 2026-03-05

### safeai-global-prd-agent

- Initial release
- Coverage: Vietnam, EU, US, China + Global standards
- PII auto-redaction with consent workflow
- Compliance badge system (AAA / AA / A)
- Actionable compliance checklist
- Published to [skills.sh](https://skills.sh/datht-work/safeai-global-agent)
