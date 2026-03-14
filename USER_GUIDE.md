# SafeAI-Global PRD Agent: Actionable User Guide

This guide provides a focused, step-by-step reference for the SafeAI-Global Agent. Whether you are building a quick MVP or complex enterprise software, these commands will help you trigger the right behavior instantly.

---

## ⚡ Quick Command Cheat Sheet

| Command | Action / Behavior |
|---|---|
| *(Natural text)* | **Auto-Detect Market Compliance**: Mention a country (e.g. "Vietnam") and the agent automatically applies targeted local laws. |
| **"Standard PRD"** | **Fast MVP**: Skips legal compliance scanning for fast-paced MVP generation. |
| **"Full Audit"** | **Enterprise Audit**: Runs an aggressive, fine-tooth-comb compliance check for highly sensitive data (ISO 27001/SOC 2). |
| `/template [industry] [region]` | **Industry Skeleton**: Spits out a pre-built compliant skeleton (e.g. `/template fintech eu`). |
| `/safeai lang [Language]` | **Multilingual**: Translates PRD but keeps English legal terms in parentheses (e.g. `/safeai lang japanese`). |
| `/safeai export jira` | **Agile Export**: Slices PRD into Epics/User Stories + Gherkin BDD Acceptance Criteria. |
| `/safeai export confluence`| **Wiki Export**: Formats the PRD into Wiki-friendly tables and layout. |
| `/safeai inject [Rule]: [Text]`| **Custom Policy**: Forces the agent to prioritize your internal company rules natively across PRDs. |

---

## 🟢 1. Core Capabilities (Natural Prompts)

These features work automatically based on conversational context.

### Auto-Detect Market Compliance (Smart Mode)

**Use Case:** Launching a product targeted at a specific country (e.g., Vietnam, EU, USA).
**How to Trigger:** Just mention the target country/region naturally.
> *"Write a PRD for a ride-hailing mobile app. Target market is **Vietnam**."*

**What Happens:** The agent automatically embeds local laws (e.g., Vietnam PDPD Decree 13) into the PRD constraints.

### Fast MVP Generation (No legal overhead)

**Use Case:** Internal tools, hackathons, or early MVPs where speed is the priority.
**How to Trigger:** Include **"Standard PRD"** or **"skip compliance"** in your prompt.
**What Happens:** Bypasses the legal safety engine and focuses purely on User Stories and Technical Architecture.

### Deep-Dive Enterprise Audit (Full Audit)

**Use Case:** Preparing for enterprise software deployment handling sensitive data (PHI/PII).
**How to Trigger:** Include the keyword **"Full Audit"** in your prompt.
> *"Write a full audit PRD for an AI medical triaging app."*

**What Happens:** Runs aggressive multi-jurisdiction checks (GDPR + HIPAA + ISO 42001) mapping all edge-cases.

---

## 🟡 2. Advanced Slash Commands (`/safeai`)

Use these explicit commands for precision control over the agent's output.

### Pre-built Industry Templates

**Use Case:** Starting from scratch in a highly regulated industry.
**How to Trigger:** `/template [industry] [region]`
> `/template fintech eu` or `/template healthcare us`

**What Happens:** Immediately outputs a full PRD skeleton pre-filled with the necessary ISO standards and legal guardrails.

### Export to Agile Tickets

**Use Case:** Handing over a generated PRD to engineering without manual copy-pasting.
**How to Trigger:** `/safeai export jira` or `/safeai export confluence`
**What Happens:** Strips conversational fluff and outputs pure, structured blocks tailored for Agile software. Security constraints are embedded deep inside the ticket Acceptance Criteria.

### Multilingual PRDs

**Use Case:** Working with offshore teams that require PRDs in specific languages.
**How to Trigger:** `/safeai lang [Language]`
> `/safeai lang japanese: Generate a PRD for a telehealth app.`

**What Happens:** Translates the PRD while preserving the strict legal meaning intact by keeping English legal phrases in parentheses.

### Inject Personal/Custom Rules

**Use Case:** Enforcing specific internal team standards inside PRDs.
**How to Trigger:** `/safeai inject [Rule Name]: [Content]`
> `/safeai inject AuthStandard: Every user-facing API must implement OAuth 2.0 with PKCE.`

**What Happens:** Stores the rule in memory, treating it as highest priority moving forward (`⚠️ CUSTOM OVERRIDE`).

---

## 🔴 3. Engineering & CI/CD Integration

### Run the CLI Linter

**Use Case:** You are a developer who wants to plug SafeAI-Global's compliance brain directly into your CI/CD pipeline (GitHub Actions, GitLab CI).
**How to Trigger:**

```bash
npx safeai-lint .
```

**What Happens:** The CLI tool scans your project documentation locally. It fails the CI build if critical safety requirements (Security, Encryption, Data Flow) are missing.

> 🤖 **Agentic IDE Integration (Cursor, Claude, Antigravity):**
> You can ask your IDE agent: *"Run the `cli/safeai-lint.js` script on this project and fix any compliance errors it finds."*

---
<small>Powered by SafeAI-Global Team · Version 4.0.0 · March 2026</small>
