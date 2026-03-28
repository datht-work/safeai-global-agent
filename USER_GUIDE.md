# SafeAI-Global PRD Agent: Actionable User Guide

This guide provides a focused, step-by-step reference for the SafeAI-Global Agent. Whether you are accelerating a quick MVP to market (Time-to-Market) or architecting complex enterprise software that requires rigorous compliance, these commands will help you trigger the right behavior instantly.

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
| `/safeai export opa` | **Rego Policy**: Translates PRD rules into Open Policy Agent (OPA) code to block pipelines. |
| `/safeai export terraform`| **HCL Config**: Generates Terraform snippet for compliant cloud infrastructure. |
| `/safeai inject [Rule]: [Text]`| **Custom Policy**: Forces the agent to prioritize your internal company rules natively across PRDs. |
| `/safeai scan [Language]` | **Vibe Scan**: Audits AI-generated code for secrets, hallucinations, and insecure defaults. |
| `/safeai verify-prd` | **Compliance Check**: Verifies if the implementation code matches the SafeAI PRD requirements. |

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

**Use Case (Zero-Friction Handover):** Handing over a generated PRD to engineering without manual copy-pasting. Bridges the gap between Product Management and Engineering seamlessly.
**How to Trigger:** `/safeai export jira` or `/safeai export confluence`
**What Happens:** Strips conversational fluff and outputs pure, structured blocks tailored for Agile software. Security constraints are embedded deep inside the ticket Acceptance Criteria.

### Multilingual PRDs

**Use Case:** Working with offshore teams that require PRDs in specific languages.
**How to Trigger:** `/safeai lang [Language]`
> `/safeai lang japanese: Generate a PRD for a telehealth app.`

**What Happens:** Translates the PRD while preserving the strict legal meaning intact by keeping English legal phrases in parentheses.

### Policy-as-Code Export (DevSecOps)

**Use Case (DevSecOps Ready):** Automating compliance enforcement in the CI/CD pipeline or Cloud deployments directly based on PRD constraints. Eliminates "compliance drift" between architecture and reality.
**How to Trigger:** `/safeai export opa` or `/safeai export terraform`
**What Happens:** Outputs raw `.rego` scripts for Open Policy Agent to test CI/CD configurations, or `main.tf` logic in HCL to stand up secure infrastructure resources (e.g., encryption toggles, data localized VPCs).

### Inject Personal/Custom Rules

**Use Case:** Enforcing specific internal team standards inside PRDs.
**How to Trigger:** `/safeai inject [Rule Name]: [Content]`
> `/safeai inject AuthStandard: Every user-facing API must implement OAuth 2.0 with PKCE.`

**What Happens**: Stores the rule in memory, treating it as highest priority moving forward (`⚠️ CUSTOM OVERRIDE`).

### Scanning AI-Generated Code (Vibe Coding)

**Use Case (Secure Vibe Coding):** You've used an AI to generate code, or you want to audit an entire codebase/pull request before deployment to ensure it doesn't contain "hallucinated" libraries or leaked secrets. Essential for teams leveraging AI engineering tools.
**How to Trigger**: `/safeai scan [Target]`
You can scan a specific snippet, a folder, or even a git diff using your IDE's context features (like `@Folder` in Cursor/Windsurf).
> **Examples:**
>
> - `/safeai scan @src/` ➔ Scans the entire `src` directory.
> - `/safeai scan @PR` ➔ Scans a Pull Request or Git Diff.
> - `/safeai scan python: [Paste code]` ➔ Scans a fast pasted snippet.

**What Happens**: The agent performs a high-intensity audit for:

- **Ghost Dependencies**: Non-existent or malicious packages.
- **Hardcoded Secrets**: Placeholder API keys or mock credentials.
- **Compliance Traceability**: Use `/safeai verify-prd` to ensure the code actually implements the security controls defined in your SafeAI PRD.

---

## 🔴 3. Engineering & CI/CD Integration

### Run the CLI Linter

**Use Case:** You are a developer who wants to plug SafeAI-Global's compliance brain directly into your CI/CD pipeline (GitHub Actions, GitLab CI).
**How to Trigger:**

```bash
npx safeai-lint .
```

***OR*** natively in your GitHub Actions workflow:

```yaml
steps:
  - uses: actions/checkout@v4
  - name: Run SafeAI Security Scanner
    uses: datht-work/safeai-global-agent@v4.2.0
```

**What Happens:** The CLI tool scans your project documentation locally. It fails the CI build if critical safety requirements (Security, Encryption, Data Flow) are missing.

> 🤖 **Agentic IDE Integration (Cursor, Claude, Antigravity):**
> You can ask your IDE agent: *"Run the `cli/safeai-lint.js` script on this project and fix any compliance errors it finds."*

### 🧪 AI Quality Assurance (Prompt Evaluation)

**Use Case:** You've modified `SKILL.md` or added a new law to `knowledge/` and want to ensure the agent still generates accurate PRDs.
**How to Trigger:**

```bash
cd tests
npx promptfoo eval
```

**What Happens:** Runs your prompts against "Golden Datasets" to verify legal accuracy and routing logic.

---
<small>Powered by SafeAI-Global Team · Version 4.3.0 · March 2026</small>
