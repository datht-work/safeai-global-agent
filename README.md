# SafeAI-Global PRD Agent 🛡️

> **Universal Compliance Engine for Global Product Management**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Security Audit](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml)
[![skills.sh](https://img.shields.io/badge/skills.sh-Listed-blueviolet.svg)](https://skills.sh/datht-work/safeai-global-agent)
[![ISO 27001](https://img.shields.io/badge/ISO-27001-blue.svg)](#)
[![ISO 42001](https://img.shields.io/badge/ISO-42001-blue.svg)](#)
[![OWASP](https://img.shields.io/badge/OWASP-Top%2010-red.svg)](#)

---

## Overview

**SafeAI-Global PRD Agent v2.0** is an AI-powered compliance engine that helps Product Managers create **security-first Product Requirement Documents (PRDs)** that automatically comply with regional regulations across **35+ jurisdictions worldwide**.

### Key Capabilities

| Feature | Description |
|---|---|
| 🌐 **Multi-Region Detection** | Auto-detects applicable laws across 35+ jurisdictions based on context keywords |
| 🔒 **PII Auto-Redaction** | Detects & masks sensitive data (emails, phone, IDs, biometrics, health, geolocation) |
| 🔄 **Cross-Border Transfer** | Evaluates data transfer mechanisms (SCCs, BCRs, CBPR) per jurisdiction |
| 🤖 **AI Governance** | Maps to EU AI Act, NIST AI RMF, Singapore AI Verify, and 4+ frameworks |
| 📋 **Compliance Badge** | Rates PRD safety level: 🟢 AAA / 🟡 AA / 🔴 A |
| ✅ **Actionable Checklist** | Generates 14-item task list for Dev, Legal & Compliance teams |

---

## Supported Regulations (35+ Jurisdictions)

### 🌏 Asia-Pacific (APAC)

🇻🇳 Vietnam · 🇨🇳 China · 🇯🇵 Japan · 🇰🇷 South Korea · 🇮🇳 India · 🇸🇬 Singapore · 🇦🇺 Australia · 🇹🇭 Thailand · 🇲🇾 Malaysia · 🇮🇩 Indonesia · 🇵🇭 Philippines

### 🌍 Europe, Middle East & Africa (EMEA)

🇪🇺 European Union · 🇬🇧 United Kingdom · 🇨🇭 Switzerland · 🇹🇷 Turkey · 🇦🇪 UAE · 🇸🇦 Saudi Arabia · 🇮🇱 Israel · 🇳🇬 Nigeria · 🇿🇦 South Africa · 🇰🇪 Kenya · 🇪🇬 Egypt

### 🌎 Americas

🇺🇸 US Federal · 🇺🇸 California · 🇺🇸 Colorado · 🇺🇸 Texas · 🇺🇸 Virginia · 🇺🇸 New York · 🇨🇦 Canada · 🇧🇷 Brazil · 🇲🇽 Mexico · 🇦🇷 Argentina · 🇨🇴 Colombia · 🇵🇪 Peru

---

## Quick Start

### Install the Skill

```bash
npx skills add datht-work/safeai-global-agent
```

### Usage Examples

| Prompt | Auto-Applied Regulations |
|---|---|
| *"Viết PRD cho App thanh toán tại Việt Nam"* | PDPD, Decree 53/2022, Cybersecurity Law 2018 |
| *"Write a PRD for user tracking in France"* | GDPR, EU AI Act, ePrivacy Directive |
| *"Create a PRD for telehealth in California"* | CCPA/CPRA, HIPAA, NIST AI RMF, CA AI Transparency Act |
| *"Build a fintech app for Singapore and India"* | SG PDPA, MAS TRM, IN DPDP, RBI Data Localization |

---

## PRD Output Structure

Every generated PRD follows the **SafeAI Consulting Framework**:

```
1. SafeAI Compliance Badge        (🟢 AAA / 🟡 AA / 🔴 A rating)
2. Executive Compliance Summary   (Multi-region risk assessment)
3. Security-Enhanced Features     (Specs + security + consent + AI risk + data flow)
4. Actionable Compliance Checklist (14-item task list for Dev/Legal/Compliance)
```

---

## Security Audits

This skill undergoes automated security audits through:

| Auditor | Scope | Status |
|---|---|---|
| **Gen Agent Trust Hub** | AI-driven risk classification & threat analysis | [![Audited](https://img.shields.io/badge/Gen_Trust_Hub-Audited-green.svg)](https://skills.sh/datht-work/safeai-global-agent) |
| **Socket** | Supply-chain security & dependency analysis | [![Scanned](https://img.shields.io/badge/Socket-Scanned-green.svg)](https://skills.sh/audits) |
| **Snyk** | Vulnerability scanning & monitoring | [![Monitored](https://img.shields.io/badge/Snyk-Monitored-green.svg)](https://github.com/datht-work/safeai-global-agent/actions) |
| **GitHub Actions** | CI/CD skill content & structure verification | [![CI](https://github.com/datht-work/safeai-global-agent/actions/workflows/security-audit.yml/badge.svg)](https://github.com/datht-work/safeai-global-agent/actions) |

### Security Highlights

- ✅ **Zero executable code** — Markdown-only skill, no scripts or binaries
- ✅ **Zero runtime dependencies** — No supply-chain attack surface
- ✅ **No network calls** — No HTTP requests or external connections
- ✅ **No data collection** — Stateless, ephemeral sessions only
- ✅ **PII Redaction** — Built-in consent-based data masking workflow

See [SECURITY.md](SECURITY.md) for full security policy and vulnerability reporting.

---

## Contributing

We welcome contributions! Please read our security policy before submitting a pull request.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ by the SafeAI-Global Team · v2.0.0 · March 2026*
