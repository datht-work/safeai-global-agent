# SafeAI-Global Compliance Suite 🛡️

> 🌍 [English](README.md) | 🇻🇳 [Tiếng Việt](README-vi.md)

> **8 AI-Powered Compliance Skills for Product Managers — covering 35+ jurisdictions, ISO standards, and flexible compliance depth**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Security Audit](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/safeai-global-agent)
[![Version](https://img.shields.io/badge/version-2.4.0-blue.svg)](CHANGELOG.md)

---

## 🎯 What is This?

A suite of **8 specialized compliance skills** that transform any AI assistant (Gemini, Claude, ChatGPT, Copilot, Cursor...) into a **Compliance-Aware Product Manager**. It generates PRDs with built-in security checks, regulatory mapping, and actionable engineering checklists.

### 🎛️ Step 0: The Compliance Depth Selector

**Not every PRD needs full compliance.** To prevent over-engineering simple features, the agent asks you to choose your depth at the start of every chat:

| Level | Mode Name | Best For | What Happens |
|:---:|---|---|---|
| 🟢 | 📝 **Standard PRD** | MVPs, internal tools, fast iteration | Generates a clean, standard PRD — **no compliance scanning**. |
| 🟡 | 🛡️ **Smart Compliance** *(Default)* | Products going to production | Auto-detects region and applies **only** the relevant local laws. |
| 🔴 | 🔒 **Full Compliance Audit** | Enterprise, strictly regulated industries | Full audit: **All jurisdictions + ISO 27001/42001 + SOC 2 + WCAG**. |

> *Tip: You don't have to wait for the bot to ask. Just say "Standard PRD" or "Full compliance for EU" in your very first prompt to skip Step 0.*

---

## 📦 Available Skills

| # | Skill | Focus | For Who |
|---|---|---|---|
| 🌐 | **[SafeAI-Global PRD Agent](SKILL.md)** | 35+ jurisdictions, cross-border transfers, AI governance | All Product Managers |
| 🇪🇺 | **[SafeAI GDPR Expert](safeai-gdpr-expert/SKILL.md)** | GDPR Art-by-Art, EU AI Act risk classification, DPIA | EU market PMs |
| 🏥 | **[SafeAI HIPAA Expert](safeai-hipaa-expert/SKILL.md)** | HIPAA safeguards, FDA SaMD, PHI handling | HealthTech PMs |
| 💳 | **[SafeAI FinTech Compliance](safeai-fintech-compliance/SKILL.md)** | PCI-DSS v4.0, PSD2/SCA, AML/KYC, Open Banking | FinTech PMs |
| 🌏 | **[SafeAI ASEAN Data Protection](safeai-asean-data-protection/SKILL.md)** | VN, SG, TH, MY, ID, PH country deep-dives | ASEAN startups |
| 🇺🇸 | **[SafeAI US State Privacy Expert](safeai-us-privacy-expert/SKILL.md)** | CCPA, CPA, VCDPA, GPC, Opt-in consent | US market PMs |
| 👶 | **[SafeAI EdTech & Child Privacy Expert](safeai-edtech-compliance/SKILL.md)** | COPPA, FERPA, AADC, Age Gating | EdTech PMs |
| 🤖 | **[SafeAI Ethics & Risk Expert](safeai-ai-ethics-expert/SKILL.md)** | NIST AI RMF, Bias Testing, Human-in-the-Loop | AI/ML PMs |

### 🔗 How They Connect

The SafeAI-Global suite uses a **Hub-and-Spoke** architecture to ensure your AI agent doesn't suffer from "context dilution".

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

Copy the raw SKILL.md content and paste it into your AI assistant's system prompt:

| AI Tool | Setup |
|---|---|
| **Google Gemini** | *Gems* → Create Gem → Paste SKILL.md into Instructions |
| **Claude** (Anthropic) | *Projects* → Create Project → Paste into *Project Instructions* |
| **ChatGPT** (OpenAI) | *Explore GPTs* → Create → Paste into *Instructions* |
| **GitHub Copilot** | Save as `.github/copilot-instructions.md` in your repo |
| **Cursor** | Place SKILL.md in `.cursor/rules/` directory |
| **Windsurf** | Place SKILL.md in `.windsurfrules` directory |

#### Quick Copy Links (Raw SKILL.md)

| Skill | Raw URL |
|---|---|
| Global PRD Agent | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/SKILL.md) |
| GDPR Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/safeai-gdpr-expert/SKILL.md) |
| HIPAA Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/safeai-hipaa-expert/SKILL.md) |
| FinTech Compliance | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/safeai-fintech-compliance/SKILL.md) |
| ASEAN Data Protection | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/safeai-asean-data-protection/SKILL.md) |
| US State Privacy Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/safeai-us-privacy-expert/SKILL.md) |
| EdTech & Child Privacy Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/safeai-edtech-compliance/SKILL.md) |
| Ethics & Risk Expert | [Copy](https://raw.githubusercontent.com/datht-work/safeai-global-agent/main/safeai-ai-ethics-expert/SKILL.md) |

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

🇺🇸 US (Federal + CA, CO, TX, VA, NY) · 🇨🇦 Canada · 🇧🇷 Brazil · 🇲🇽 Mexico · 🇦🇷 Argentina · 🇨🇴 Colombia · 🇵🇪 Peru

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

*Built with ❤️ by [SafeAI-Global Team](https://www.linkedin.com/in/dat-huynh-vn/) · v2.4.0 · March 2026*
