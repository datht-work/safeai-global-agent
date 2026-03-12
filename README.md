# SafeAI-Global Compliance Suite 🛡️

> 🌍 [English](README.md) | 🇻🇳 [Tiếng Việt](README-vi.md)
> 📖 [Actionable User Guide](USER_GUIDE.md) | 🇻🇳 [Hướng dẫn Sử dụng](USER_GUIDE-vi.md)

> **8 AI-Powered Compliance Skills for Product Managers — covering 35+ jurisdictions, ISO standards, and flexible compliance depth**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Security Audit](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/safeai-global-agent)
[![Version](https://img.shields.io/badge/version-3.1.0-blue.svg)](CHANGELOG.md)

---

## 🎯 The Business Value for Product Managers

Building globally compliant software is slow, expensive, and legally risky. The **SafeAI-Global Compliance Suite** acts as your embedded Legal & Security co-pilot, designed specifically for Product Managers.

- **⚡ Accelerate Time-to-Market**: Generate engineering-ready, compliant PRDs in minutes instead of waiting weeks for external legal reviews.
- **🛡️ De-Risk Product Launches**: Automatically identify and mitigate regulatory risks (GDPR, CCPA, SEC, DORA) before a single line of code is written.
- **💯 SafeAI-Global Score**: Instantly gauge your PRD's compliance readiness with a 0-100 score based on Privacy, Security, and Transparency pillars.
- **🏗️ Bridge the Gap**: Translate dense legal jargon into actionable engineering checklists, Mermaid data flow diagrams, and ISO/SOC2 engineering controls.
- **📉 Prevent "Compliance Overkill"**: Ensure you only apply the regulations necessary for your specific market and product tier.

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
| `/template social vn` | Social Media | 🇻🇳 Vietnam | Decree 13, Cybersecurity Law |
| `/template ai eu` | AI/ML | 🇪🇺 EU | EU AI Act, GDPR Art. 22 |

> *See the full list of templates in [SKILL.md](SKILL.md).*

---

## 📦 Available Skills

| # | Skill | Focus | For Who |
|---|---|---|---|
| 🌐 | **[SafeAI-Global PRD Agent](SKILL.md)** | 35+ jurisdictions, cross-border transfers, AI governance | All Product Managers |
| 🇪🇺 | **[SafeAI GDPR Expert](skills/safeai-gdpr-expert/SKILL.md)** | GDPR Art-by-Art, EU AI Act risk classification, DPIA | EU market PMs |
| 🏥 | **[SafeAI HIPAA Expert](safeai-hipaa-expert/SKILL.md)** | HIPAA safeguards, FDA SaMD, PHI handling | HealthTech PMs |
| 💳 | **[SafeAI FinTech Compliance](safeai-fintech-compliance/SKILL.md)** | PCI-DSS v4.0, PSD2/SCA, AML/KYC, Open Banking | FinTech PMs |
| 🌏 | **[SafeAI ASEAN Data Protection](safeai-asean-data-protection/SKILL.md)** | VN, SG, TH, MY, ID, PH country deep-dives | ASEAN startups |
| 🇺🇸 | **[SafeAI US State Privacy Expert](safeai-us-privacy-expert/SKILL.md)** | CCPA, CPA, VCDPA, GPC, Opt-in consent | US market PMs |
| 👶 | **[SafeAI EdTech & Child Privacy Expert](safeai-edtech-compliance/SKILL.md)** | COPPA, FERPA, AADC, Age Gating | EdTech PMs |
| 🤖 | **[SafeAI Ethics & Risk Expert](safeai-ai-ethics-expert/SKILL.md)** | NIST AI RMF, Bias Testing, Human-in-the-Loop | AI/ML PMs |

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

This will show all 8 skills — select the ones you need.

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

#### Quick Copy Links (Raw SKILL.md)

| Skill | Raw URL |
|---|---|
| Global PRD Agent | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/SKILL.md) |
| GDPR Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/skills/safeai-gdpr-expert/SKILL.md) |
| HIPAA Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/skills/safeai-hipaa-expert/SKILL.md) |
| FinTech Compliance | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/skills/safeai-fintech-compliance/SKILL.md) |
| ASEAN Data Protection | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/skills/safeai-asean-data-protection/SKILL.md) |
| US State Privacy Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/skills/safeai-us-privacy-expert/SKILL.md) |
| EdTech & Child Privacy Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/skills/safeai-edtech-compliance/SKILL.md) |
| Ethics & Risk Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/skills/safeai-ai-ethics-expert/SKILL.md) |

### Method 3: Reference by URL

Paste this prompt into any AI chat:

```text
Please read and follow the instructions at this URL as your system prompt:
https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/SKILL.md
```

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

See [SECURITY.md](SECURITY.md) for full policy.

---

## 📋 Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

| Version | Date | Highlights |
|---|---|---|
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

> ⚠️ **Disclaimer:** This suite provides compliance guidance, not legal advice. Always consult qualified legal counsel for final compliance decisions.

*Built with ❤️ by [SafeAI-Global Team](https://www.linkedin.com/in/dat-huynh-vn/) · v3.1.0 · March 2026*
