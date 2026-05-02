# SafeAI-Global Compliance Suite 🛡️

> 🌍 [English](README.md) | 🇻🇳 [Tiếng Việt](README-vi.md)
> 📖 [Actionable User Guide](USER_GUIDE.md) | 🇻🇳 [Hướng dẫn Sử dụng](USER_GUIDE-vi.md)
>
> **9 AI-Powered Compliance Skills for Product Managers — covering 35+ jurisdictions, ISO standards, and flexible compliance depth**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Security Audit](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/safeai-global-agent)
[![Version](https://img.shields.io/badge/version-5.0.0-blue.svg)](CHANGELOG.md)

---

## 🎯 The Business Value (Biz View)

Building globally compliant software is traditionally slow, expensive, and legally risky. The **SafeAI-Global Compliance Suite** acts as your embedded Legal & Security co-pilot, shifting compliance entirely to the left—straight into the hands of Product Managers and Engineers.

**For Product Leadership (CPO/PM):**

- **⚡ Accelerate Time-to-Market (TTM)**: Generate engineering-ready, legally compliant PRDs in minutes. Never wait weeks for external legal reviews that delay sprint cycles.
- **🛡️ De-Risk Product Launches**: Automatically identify and mitigate regulatory risks (GDPR, CCPA, SEC, DORA) before a single line of code is written. Prevents expensive post-launch fines.
- **💯 Immediate Quality Control**: Instantly gauge your PRD's compliance readiness with the SafeAI-Global Score (Privacy, Security, and Transparency pillars).
- **📉 Prevent "Compliance Overkill"**: Ensure you only apply the regulations necessary for your specific target market and product tier, avoiding unnecessary development bloat.

**For Engineering Leadership (CTO/DevSecOps):**

- **🔄 Zero-Friction Handover**: Use `/safeai export jira` to instantly transform PRDs into Epics and Gherkin BDD Acceptance Criteria. Legal constraints become code constraints.
- **🏗️ DevSecOps Ready**: Generate Terraform/OPA policies direct from PRDs. Validate implementation automatically in CI/CD using locally run `safeai-lint`.
- **🔍 Secure Vibe Coding**: Audit AI-generated code (`/safeai scan`) for secrets, hallucinated dependencies, and compliance gaps instantly within your IDE.

### 🎛️ Step 0: The Compliance Depth Selector

**Not every PRD needs full compliance.** To prevent over-engineering simple features, the agent asks you to choose your depth at the start of every chat:

| Level | Mode Name | Best For | What Happens |
|:---:|---|---|---|
| 🟢 | 📝 **Standard PRD** | MVPs, internal tools, fast iteration | Generates a clean, standard PRD — **no compliance scanning**. |
| 🟡 | 🛡️ **Smart Compliance** *(Default)* | Products going to production | Auto-detects region and applies **only** the relevant local laws. |
| 🔴 | 🔒 **Full Compliance Audit** | Enterprise, strictly regulated industries | Full audit: **All jurisdictions + ISO 27001/42001 + SOC 2 + WCAG**. |

> *Tip: You don't have to wait for the bot to ask. Just say "Standard PRD" or "Full compliance for EU" in your very first prompt to skip Step 0.*

### 🚀 Instant Starts: The `/template` Command

Type `/template [industry] [region]` to instantly grab a tailored PRD skeleton for your specific market:

| Command | Industry | Region | Applied Regulations |
|---|---|---|---|
| `/template fintech eu` | FinTech | 🇪🇺 EU | PSD2, GDPR, DORA |
| `/template healthcare us` | HealthTech | 🇺🇸 USA | HIPAA, FDA SaMD |
| `/template social vn` | Social Media | 🇻🇳 Vietnam | PDPL (2026), Decree 356, Decree 53 |
| `/template ai eu` | AI/ML | 🇪🇺 EU | EU AI Act, GDPR Art. 22 |

> *See the full list of templates in [SKILL.md](SKILL.md).*

---

## 📦 Available Skills

| # | Skill | Focus | For Who |
|---|---|---|---|
| 🌐 | **[SafeAI-Global PRD Agent](SKILL.md)** | 35+ jurisdictions, cross-border transfers, AI governance | All Product Managers |
| 🇪🇺 | **[SafeAI GDPR Expert](skills/safeai-gdpr-expert/SKILL.md)** | GDPR Art-by-Art, EU AI Act risk classification, DPIA | EU market PMs |
| 🏥 | **[SafeAI HIPAA Expert](skills/safeai-hipaa-expert/SKILL.md)** | HIPAA safeguards, FDA SaMD, PHI handling | HealthTech PMs |
| 💳 | **[SafeAI FinTech Compliance](skills/safeai-fintech-compliance/SKILL.md)** | PCI-DSS v4.0, PSD2/SCA, AML/KYC, Open Banking | FinTech PMs |
| 🌏 | **[SafeAI ASEAN Data Protection](skills/safeai-asean-data-protection/SKILL.md)** | VN, SG, TH, MY, ID, PH country deep-dives | ASEAN startups |
| 🇺🇸 | **[SafeAI US State Privacy Expert](skills/safeai-us-privacy-expert/SKILL.md)** | CCPA, CPA, VCDPA, GPC, Opt-in consent | US market PMs |
| 👶 | **[SafeAI EdTech & Child Privacy Expert](skills/safeai-edtech-compliance/SKILL.md)** | COPPA, FERPA, AADC, Age Gating | EdTech PMs |
| 🤖 | **[SafeAI Ethics & Risk Expert](skills/safeai-ai-ethics-expert/SKILL.md)** | NIST AI RMF, Bias Testing, Human-in-the-Loop | AI/ML PMs |
| 🛡️ | **[SafeAI Code Scanner](skills/safeai-code-scanner/SKILL.md)** | Code audit — Vibe Coding risk, secrets detection | DevSecOps / Engineers |

### 🔗 Modular Architecture for Global Scale

The SafeAI-Global suite uses a **Hub-and-Spoke** architecture. You always start with the Global Hub, and pivot to deep-dive Spoke experts only when you hit heavily regulated verticals.

```text
               ┌─────────────────────────────────────────┐
               │    🌐 SafeAI-Global PRD Agent (Hub)     │
               │   ───────────────────────────────       │
               │   • Covers 35+ Jurisdictions            │
               │   • Cross-border Data Transfers         │
               │   • Defines AI Governance               │
               └───────────────────┬─────────────────────┘
                                   │
              [ Step 0: Auto-Detects Region & Depth ]
                                   │
       ┌───────────────┬───────────┴───┬───────────────┬───────────────┐
       ▼               ▼               ▼               ▼               ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ 🇪🇺 GDPR     │ │ 🏥 HIPAA    │ │ 💳 FinTech  │ │ 🌏 ASEAN    │ │ 📝 Standard │
│   Expert    │ │   Expert    │ │ Compliance  │ │  Data Prot. │ │    PRD      │
├─────────────┤ ├─────────────┤ ├─────────────┤ ├─────────────┤ ├─────────────┤
│ • Art-by-Art│ │ • FDA SaMD  │ │ • PCI-DSS   │ │ • VN, SG, TH│ │ • No Legal  │
│ • EU AI Act │ │ • PHI Safegu│ │ • PSD2/SCA  │ │ • MY, ID, PH│ │ • Fast MVP  │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
*(Plus specialized nodes for US Privacy, EdTech, and AI Ethics)*

> **The Hub Workflow:** Start your chat with the **Global PRD Agent**. If it detects a highly regulated domain (like Healthcare in the US or FinTech in Europe), it will automatically recommend you switch to the specialized **Spoke** skill for a deeper audit.

---

## 🚀 How to Use

### Method 1: Install via CLI (Recommended)

```bash
npx skills add datht-work/safeai-global-agent
```

This will show all 9 skills — select the ones you need.

### Method 2: Use in Any AI Chat Tool (No Install)

This project uses a **Modular Knowledge Engine** architecture. To use it in a web interface, you need to provide both the Agent Instructions (`SKILL.md`) and the Knowledge Base (`knowledge/` folder).

| AI Tool | Setup Instructions |
|---|---|
| **Google Gemini** | 1. Create a new *Gem*<br>2. Paste `SKILL.md` into Instructions<br>3. Upload all files from the `knowledge/` folder |
| **Claude** (Anthropic) | 1. Create a new *Project*<br>2. Paste `SKILL.md` into *Project Instructions*<br>3. Upload the `knowledge/` folder to *Project Knowledge* |
| **ChatGPT** (OpenAI) | 1. Go to *Explore GPTs* → Create<br>2. Paste `SKILL.md` into *Instructions*<br>3. Upload the `knowledge/` folder to *Knowledge* |
| **GitHub Copilot** | Save `SKILL.md` as `.github/copilot-instructions.md` in your repo |
| **Cursor** | Place `SKILL.md` in `.cursor/rules/` and ensure the `knowledge/` folder is in your workspace |
| **Windsurf** | Place `SKILL.md` in `.windsurfrules` and ensure the `knowledge/` folder is in your workspace |

---

## 🌍 Supported Jurisdictions (35+)

### 🌏 Asia-Pacific

🇻🇳 Vietnam · 🇨🇳 China · 🇯🇵 Japan · 🇰🇷 South Korea · 🇮🇳 India · 🇸🇬 Singapore · 🇦🇺 Australia · 🇹🇭 Thailand · 🇲🇾 Malaysia · 🇮🇩 Indonesia · 🇵🇭 Philippines

### 🌍 Europe, Middle East & Africa

🇪🇺 EU · 🇬🇧 UK · 🇨🇭 Switzerland · 🇹🇷 Turkey · 🇦🇪 UAE · 🇸🇦 Saudi Arabia · 🇮🇱 Israel · 🇳🇬 Nigeria · 🇿🇦 South Africa · 🇰🇪 Kenya · 🇪🇬 Egypt

### 🌎 Americas

🇺🇸 US (Federal + CA, CO, TX, VA, NY) · 🇨🇦 Canada · 🇧🇷 Brazil (LGPD, Digital ECA) · 🇲🇽 Mexico · 🇦🇷 Argentina · 🇨🇴 Colombia · 🇵🇪 Peru

---

## 📐 International Standards & Certifications

The agent is trained to map product features to strict international frameworks (applied automatically in **Smart** and **Full Audit** modes):

| Category | Standard | What the AI Does / Maps to in PRD |
|---|---|---|
| 🔒 **Security** | **ISO/IEC 27001** | Enforces Annex A controls (RBAC, cryptography, MFA, logging). |
| 🛡️ **Privacy** | **ISO/IEC 27701** | Adds PII controller/processor obligations and data minimization. |
| 🤖 **AI Risk** | **ISO/IEC 42001** | Defines an AI Impact Assessment, human oversight, and bias testing. |
| 🏢 **Enterprise**| **SOC 2 Type II** | Maps Trust Service Criteria (Security, Availability, Privacy). |
| ♿ **Access** | **WCAG 2.2 AA** | Adds perceivable/operable ACs for frontend features. |
| 🏛️ **Legal** | **EAA / ADA** | Checks European Accessibility Act & Americans with Disabilities Act. |

> 💡 *Want to see it in action? Look at [examples/sample-prd-output.md](examples/sample-prd-output.md) for a complete compliance PRD output.*

---

## 💬 Usage Examples

| Your Prompt | Mode Detected | What Happens |
|---|---|---|
| "Write a quick PRD for login feature" | 📝 Standard | Clean PRD, no compliance scanning |
| "Viết PRD cho app thanh toán tại Việt Nam" | 🛡️ Smart | Auto-detect VN → PDPD, Decree 53 |
| "Write a PRD for user tracking in France" | 🛡️ Smart | Auto-detect EU → GDPR, ePrivacy |
| "Full compliance PRD for a telehealth app in California" | 🔒 Full Audit | CCPA, HIPAA, FDA SaMD, ISO, WCAG |
| "Build a payment gateway for Singapore — full audit" | 🔒 Full Audit | PDPA, MAS TRM, PCI-DSS, ISO 27001 |

---

## 🔒 Security

- ✅ **Zero executable code** — Markdown-only skills
- ✅ **Zero runtime dependencies** — No supply-chain risk
- ✅ **No network calls** — No external connections
- ✅ **No data collection** — Stateless operations
- ✅ **CI/CD audited** — GitHub Actions security pipeline
- ✅ **LLM Evaluated** — Automated `promptfoo` testing with Golden Datasets

See [SECURITY.md](SECURITY.md) for full policy and [CONTRIBUTING.md](CONTRIBUTING.md) for knowledge standards.

---

## 📋 Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

| Version | Date | Highlights |
|---|---|---|
| **v4.3.0** | 2026-03-26 | **AI Engineering Roadmap**: Integrated `promptfoo` testing, Knowledge Schema standards, and automated quarterly law audits. |
| **v4.2.0** | 2026-03-18 | **New Skill**: SafeAI Code Scanner for Vibe Coding security auditing. |
| **v4.1.0** | 2026-03-14 | DevSecOps Infrastructure: Added `/safeai export opa` and `/safeai export terraform`. Fixed Snyk Runtime Fetch vulnerability. |
| **v4.0.0** | 2026-03-14 | Agile Engine & Multilingual: Added `/safeai export jira` and `/safeai export confluence` output formats. Full multilingual prompt detection and `/safeai lang` manual override. |
| **v3.2.0** | 2026-03-13 | Custom Policy Injection — Introduced `/safeai inject` command and Hybrid Compliance mode |
| **v3.1.0** | 2026-03-12 | Scoring Ecosystem — Introduced the SafeAI-Global Score (0-100) evaluating Privacy, Security, and Transparency |
| **v3.0.0** | 2026-03-11 | Core Modular Knowledge Engine: Extracted all static regulations into a searchable `knowledge/` Document Store |
| **v2.5.0** | 2026-03-10 | Added Brazil Digital ECA (Age Signals API, Loot Box ban) |
| **v2.4.0** | 2026-03-09 | `/template` command, Compliance Visualizer, CLI Linter, Vietnamese README |
| **v2.3.0** | 2026-03-08 | Added 3 new Spoke skills: US State Privacy, EdTech/Child Privacy, and AI Ethics & Risk |
| **v2.2.0** | 2026-03-06 | Compliance Depth selector (Standard/Smart/Full), ISO 27001/27701/42001, SOC 2, Accessibility, Disclaimer |
| **v2.1.0** | 2026-03-06 | Multi-skill architecture, cross-linking, AI tool usage guides |
| **v2.0.0** | 2026-03-05 | 35+ jurisdictions, security audit infrastructure |
| **v1.0.0** | 2026-03-05 | Initial release (VN, EU, US, CN) |

---

## 🤝 Contributing

We welcome contributions! Especially:

- 🌍 New country regulations
- 🔄 Regulation updates
- 🐛 Citation corrections
- 📝 PRD template improvements

See [SECURITY.md](SECURITY.md) for security-related contribution guidelines.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🔔 Quarterly Legal Audit Required
The SafeAI-Global Knowledge Base heavily relies on up-to-date legal facts. Please audit the following major frameworks to ensure our `knowledge/` directory is accurate:

### 🌍 Checkpoints (Q2-2026):
- [ ] **EU AI Act**: Monitor AI Office guidelines ahead of the **August 2, 2026** enforcement milestone.
- [ ] **Vietnam PDPL**: Ensure all facts align with **Law No. 91/2025/QH15** and **Decree 356/2025/ND-CP**.
- [ ] **US State Privacy**: Validate enforcement for Maryland (MODPA), Indiana, Kentucky, and Rhode Island.
- [ ] **ISO Standards**: Review EN ISO/IEC 42001:2026 regional adoptions and ISO 27001:2022 amendments.

**Action**:
1. Validate the facts in `knowledge/` against official sources (e.g., Official Journals, NIST, ISO).
2. If changes exist, open a PR with updated Markdown tags.
3. Run `npm run eval` to ensure the PRD generator still behaves correctly via `promptfoo`.

---

> ⚠️ **Disclaimer:** This suite provides compliance guidance, not legal advice. Always consult qualified legal counsel for final compliance decisions.

*Built with ❤️ by [SafeAI-Global Team](https://www.linkedin.com/in/dat-huynh-vn/) · v5.0.0 · March 2026*

---
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/datht)
