# SafeAI-Global Compliance Suite 🛡️

> **5 AI-Powered Compliance Skills for Product Managers — covering 35+ jurisdictions**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Security Audit](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/safeai-global-agent)
[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](CHANGELOG.md)

---

## 🎯 What is This?

A suite of **5 specialized compliance skills** that transform any AI assistant (Gemini, Claude, ChatGPT, Copilot, Cursor...) into a **compliance-aware Product Manager** — instantly generating PRDs with security checks, regulatory mapping, and actionable checklists.

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

```
┌──────────────────────────────────────────────────┐
│         SafeAI-Global PRD Agent (Main)           │
│    35+ jurisdictions · Cross-border · AI Gov     │
│                                                  │
│    Start here → auto-detects your region(s)      │
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

```
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

## 💬 Usage Examples

| Your Prompt | Skill Used | Auto-Applied |
|---|---|---|
| "Viết PRD cho app thanh toán tại Việt Nam" | Global + ASEAN | PDPD, Decree 53, Cybersecurity Law |
| "Write a PRD for user tracking in France" | Global + GDPR | GDPR, EU AI Act, ePrivacy |
| "Create a PRD for a telehealth app in California" | Global + HIPAA | CCPA, HIPAA, FDA SaMD, NIST |
| "Build a payment gateway for Singapore" | Global + FinTech + ASEAN | PDPA, MAS TRM, PCI-DSS |

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

*Built with ❤️ by the SafeAI-Global Team · v2.1.0 · March 2026*
