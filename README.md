# SafeAI-Global PRD Agent 🛡️

> **Universal Compliance Engine for Global Product Management**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![ISO 27001](https://img.shields.io/badge/ISO-27001-blue.svg)](#)
[![ISO 42001](https://img.shields.io/badge/ISO-42001-blue.svg)](#)
[![OWASP](https://img.shields.io/badge/OWASP-Top%2010-red.svg)](#)

---

## Overview

**SafeAI-Global PRD Agent** is an AI-powered compliance engine that helps Product Managers create **security-first Product Requirement Documents (PRDs)** that automatically comply with regional regulations worldwide.

### Key Capabilities

| Feature | Description |
|---|---|
| 🌐 **Multi-Region Detection** | Auto-detects applicable laws (GDPR, CCPA, Vietnam PDPD, China PIPL) based on context |
| 🔒 **PII Auto-Redaction** | Masks sensitive data (emails, phone numbers, IDs) before analysis |
| 📋 **Compliance Badge** | Rates PRD safety level: AAA (full), AA (partial), A (action needed) |
| ✅ **Actionable Checklist** | Generates step-by-step tasks for Dev & Legal teams |

---

## Supported Regulations

### 🇻🇳 Vietnam

- Nghị định 13/2023 (Personal Data Protection)
- Nghị định 53/2022 (Local Storage)
- Nghị định 356 (E-Commerce)
- Luật AI 2026

### 🇪🇺 European Union

- GDPR (Right to Access / Erasure)
- EU AI Act (Risk Classification)

### 🇺🇸 United States

- CCPA / CPRA (California Privacy)
- NIST AI Risk Management Framework
- HIPAA (Healthcare)

### 🇨🇳 China

- PIPL (Personal Information Protection Law)
- CSL (Cybersecurity Law)
- AI Governance Rules

### 🌐 Global Standards

- ISO/IEC 27001 (Information Security)
- ISO/IEC 42001 (AI Management System)
- OWASP Top 10

---

## Quick Start

### Installation

```bash
npm install -g @vercel/skills
```

### Authentication

```bash
skills login
```

### Publishing

```bash
skills publish https://github.com/safeai-global/prd-expert
```

---

## Usage Examples

### Example 1: Vietnam Payment App

**Prompt:**
> "Viết PRD cho App thanh toán tại Việt Nam."

**Expected:** The agent will automatically apply Nghị định 13 (PDPD), local data residency requirements (NĐ 53), and e-commerce regulations (NĐ 356).

### Example 2: EU User Tracking

**Prompt:**
> "Write a PRD for a user tracking feature in France."

**Expected:** The agent will apply GDPR consent requirements, Right to Erasure, and EU AI Act risk classification.

### Example 3: US Healthcare Platform

**Prompt:**
> "Create a PRD for a telehealth platform in California."

**Expected:** The agent will apply CCPA/CPRA, HIPAA, and NIST guidelines.

---

## PRD Output Structure

Every generated PRD follows the **SafeAI Consulting Framework**:

```
1. SafeAI Compliance Badge      (AAA / AA / A rating)
2. Executive Compliance Summary  (Regional risk assessment)
3. Security-Enhanced Features    (Specs + security constraints)
4. Actionable Checklist          (Tasks for Dev & Legal teams)
```

---

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ by the SafeAI-Global Team · March 2026*
