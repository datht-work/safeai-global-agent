# Changelog

All notable changes to the SafeAI-Global skill suite are documented in this file.

Format: [Semantic Versioning](https://semver.org/) — `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes to skill behavior or prompts
- **MINOR**: New features, new regulations, expanded coverage
- **PATCH**: Fixes, typo corrections, citation updates

## [Unreleased]

## [4.0.0] - 2026-03-14

### Added

- **Agile Engine**: Added `/safeai export jira` and `/safeai export confluence` output formats with Gherkin BDD Acceptance Criteria.
- **Multilingual Support**: Auto-detects prompt language and allows manual override via `/safeai lang [Language]`. Legal terms are preserved in English parentheses.
- **Full Ecosystem Sync**: Synchronized the Advanced Engine Delivery capabilities (Agile, Multilingual, Custom Policy) across all 7 Spoke Skills (`safeai-gdpr-expert`, `safeai-fintech-compliance`, etc.). All Spoke Skills bumped to v4.0.0.
- Synchronized version tags across `README.md`, `README-vi.md`, and `USER_GUIDE` (En/Vi).

---

## [v3.2.0] — 2026-03-13

### safeai-global-prd-agent `v3.2.0` (Personalized Compliance)

- **Custom Policy Injection**: Added the `/safeai inject` command, allowing users to define their own project-specific or team-specific rules.
- **Hybrid Compliance Engine**: The agent now automatically merges global regulations with personal/custom rules, giving priority to user-defined overrides.
- **Knowledge Base Expansion**: Added support for the `knowledge/custom/` directory for persistent custom rules.

---

## [v3.1.0] — 2026-03-12

### safeai-global-prd-agent `v3.1.0` (Scoring Ecosystem)

- **SafeAI-Global Score**: Introduced a new scoring system (0-100) that evaluates PRDs based on Privacy (40%), Security (40%), and Transparency (20%).
- Provides a clear readout of the score alongside the SafeAI Compliance Badge.
- Automatically flags the top reasons for point deductions to guide PMs on immediate remediation steps.

---

## [v3.0.0] — 2026-03-11

### safeai-global-prd-agent `v3.0.0`

- **Core Modular Knowledge Engine**: Migrated from static rule arrays in `SKILL.md` to a dynamic Document Store in the `knowledge/` folder.
- **Extended Cybersecurity Knowledge Base to 2026**:
  - **EU**: Added Cyber Resilience Act (CRA), NIS2 Directive, and Digital Operational Resilience Act (DORA).
  - **US**: Added SEC Cybersecurity Disclosure Rules.
  - **Global**: Added Application Security & Supply Chain mandates (SBOM, Secure by Design, Zero Trust Architecture).
- **Improved Context Efficiency**: Agent now searches and retrieves rules as needed.
- Added `/cli/safeai-knowledge-build.js` compiler script.

---

## [v2.5.0] — 2026-03-10

### safeai-global-prd-agent `v2.5.0`

- Added **Brazil Digital ECA** compliance tracking for the Americas region.
- Added strict checklist enforcement for the **Play Age Signals API** (v0.0.3+) to ingest age ranges in Brazil.
- Added prohibition on **loot boxes** in electronic games aimed at children.
- Bumped version in `package.json` and READMEs.

### safeai-edtech-compliance `v2.5.0`

- Integrated **Brazil Digital ECA** into the core regulatory framework alongside COPPA, FERPA, AADC, and GDPR-K.
- Added explicit checklist requirements for the **Play Age Signals API** and loot box bans for EdTech/Gaming apps.

---

## [v2.4.0] — 2026-03-09

### safeai-global-prd-agent `v2.4.0`

- **`/template` Command** — Type `/template [industry] [region]` to instantly receive a pre-built PRD skeleton tailored to a specific industry and jurisdiction. 12 built-in templates (FinTech, Healthcare, Social, EdTech, E-Commerce, AI/ML × EU, US, VN, SG, Global).
- **Compliance Visualizer** — New behavioral rule: AI must generate annotated Mermaid.js data flow diagrams in every PRD. Annotations cite specific legal articles explaining WHY data flows that way.

### New Tools

- **`cli/safeai-lint.js`** — Node.js CLI tool to scan PRD Markdown files for missing compliance sections (Security, Encryption, Consent, Data Flow, Audit logging, Checklist). 6 rules.
- **`.github/workflows/safeai-compliance-check.yml`** — GitHub Actions blueprint to run safeai-lint on Pull Requests that modify Markdown files.

### Infrastructure

- Created `README-vi.md` — Full Vietnamese translation of the README
- Added language switcher badges (🌍 English | 🇻🇳 Tiếng Việt) to both READMEs
- Bumped `package.json` to v2.4.0 with `bin` entry for `safeai-lint`

---

## [v2.3.0] — 2026-03-08

### New Skills

- **safeai-us-privacy-expert** `v1.0.0` — Deep-dive US state-level privacy (CCPA/CPRA, VCDPA, CPA, TDPSA) compliance engine.
- **safeai-edtech-compliance** `v1.0.0` — Deep-dive compliance engine for products targeting or affecting children (COPPA, FERPA, AADC).
- **safeai-ai-ethics-expert** `v1.0.0` — Deep-dive AI Safety, NIST AI RMF, and algorithmic bias compliance engine.

### safeai-global-prd-agent `v2.3.0`

- Refactored hub routing to support 3 new specialized compliance domains (US Privacy, EdTech, AI Ethics).

---

## [v2.2.0] — 2026-03-06

### safeai-global-prd-agent `v2.2.0`

- **Step 0: Compliance Depth Selector** — Users choose Standard PRD (no compliance), Smart Compliance (auto-detect region), or Full Audit (all frameworks). Default: Smart. Prevents overkill for simple PRDs.
- **Operationalized ISO Standards** — ISO/IEC 27001 Annex A controls, ISO/IEC 27701 PII management, ISO/IEC 42001 AI lifecycle management
- **SOC 2 Trust Service Criteria** mapping (Security, Availability, Processing Integrity, Confidentiality, Privacy)
- **Accessibility Compliance** — WCAG 2.2 Level AA, European Accessibility Act (EAA), ADA, Section 508, AODA, EN 301 549
- **Disclaimer** added — "Not legal advice" limitation of liability

### All Specialist Skills `v1.1.0`

- Added **Disclaimer** section to safeai-gdpr-expert, safeai-hipaa-expert, safeai-fintech-compliance, safeai-asean-data-protection

### Infrastructure

- Created `examples/sample-prd-output.md` — Sample PRD showing compliance output format
- Added `package-lock.json` — Fixes Snyk FAIL on skills.sh
- Updated `README.md` with Compliance Depth modes, ISO standards section, and example PRD reference
- Bumped `package.json` to v2.2.0

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
