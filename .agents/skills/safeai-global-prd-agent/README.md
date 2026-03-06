# SafeAI-Global Compliance Suite 🛡️

> **5 AI-Powered Compliance Skills for Product Managers — covering 35+ jurisdictions, ISO standards, and flexible compliance depth**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Security Audit](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/safeai-global-agent)
[![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)](CHANGELOG.md)

---

## 🎯 What is This?

A suite of **5 specialized compliance skills** that transform any AI assistant (Gemini, Claude, ChatGPT, Copilot, Cursor...) into a **compliance-aware Product Manager** — generating PRDs with security checks, regulatory mapping, and actionable checklists.

**Not every PRD needs full compliance.** That's why the skill asks you to choose your depth:

| Mode | When to Use | What Happens |
|---|---|---|
| 📝 **Standard PRD** | MVPs, internal features, quick iteration | Clean PRD — no compliance scanning |
| 🛡️ **Smart Compliance** *(default)* | Products going to production | Auto-detect region, apply relevant regulations only |
| 🔒 **Full Compliance Audit** | Enterprise, regulated industries, global launches | All jurisdictions + ISO + SOC 2 + WCAG |

> The AI asks which mode you want. Or just say *"Standard PRD"* / *"Full compliance for EU"* — it detects intent automatically.

---

## 📦 Available Skills

| # | Skill | Focus | For Who |
|---|---|---|---|
| 🌐 | **[SafeAI-Global PRD Agent](SKILL.md)** | 35+ jurisdictions, cross-border transfers, AI governance | All Product Managers |
| 🇪🇺 | **[SafeAI GDPR Expert](safeai-gdpr-expert/SKILL.md)** | GDPR Art-by-Art, EU AI Act risk classification, DPIA | EU market PMs |
| 🏥 | **[SafeAI HIPAA Expert](safeai-hipaa-expert/SKILL.md)** | HIPAA safeguards, FDA SaMD, PHI handling | HealthTech PMs |
| 💳 | **[SafeAI FinTech Compliance](safeai-fintech-compliance/SKILL.md)** | PCI-DSS v4.0, PSD2/SCA, AML/KYC, Open Banking | FinTech PMs |
| 🌏 | **[SafeAI ASEAN Data Protection](safeai-asean-data-protection/SKILL.md)** | VN, SG, TH, MY, ID, PH country deep-dives | ASEAN startups |

### How They Connect

```text
┌──────────────────────────────────────────────────┐
│         SafeAI-Global PRD Agent (Main)           │
│    35+ jurisdictions · Cross-border · AI Gov     │
│                                                  │
│    Step 0: Choose depth (Standard/Smart/Full)    │
│    → auto-detects region(s) if compliance on     │
│    → recommends specialist skills below ↓        │
└──────────┬──────────┬──────────┬─────────────────┘
           │          │          │
     ┌─────▼──┐ ┌─────▼──┐ ┌────▼───┐ ┌───────────┐
     │  GDPR  │ │ HIPAA  │ │FinTech │ │   ASEAN   │
     │Expert  │ │Expert  │ │Compli- │ │   Data    │
     │        │ │        │ │ance    │ │Protection │
     │EU+UK   │ │US      │ │Global  │ │SEA 6 ctry │
     │AI Act  │ │FDA SaMD│ │PCI-DSS │ │VN SG TH   │
     └────────┘ └────────┘ │PSD2    │ │MY ID PH   │
                           └────────┘ └───────────┘
```

> **Workflow:** Start with the **Global PRD Agent** for initial assessment → it will recommend the specialist skill for your domain.

---

## 🚀 How to Use

### Method 1: Install via CLI (Recommended)

```bash
npx skills add datht-work/safeai-global-agent
```

This will show all 5 skills — select the ones you need.

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

## 📐 International Standards

Applied in **Smart** and **Full Audit** modes (see Step 0 above):

| Standard | What It Adds |
|---|---|
| **ISO/IEC 27001** | Annex A security controls (organizational, people, physical, technical) |
| **ISO/IEC 27701** | Privacy extension — PII controller/processor obligations |
| **ISO/IEC 42001** | AI management system — risk assessment, bias testing, lifecycle |
| **SOC 2** | Trust Service Criteria (Security, Availability, Integrity, Confidentiality, Privacy) |
| **WCAG 2.2 AA** | Accessibility — perceivable, operable, understandable, robust |
| **EAA / ADA** | European Accessibility Act (June 2025) + Americans with Disabilities Act |

> See [examples/sample-prd-output.md](examples/sample-prd-output.md) for a complete example of the compliance PRD output.

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

*Built with ❤️ by the SafeAI-Global Team · v2.2.0 · March 2026*
