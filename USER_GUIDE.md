# SafeAI-Global PRD Agent: Actionable Task Guide

This guide provides focused, step-by-step examples of the core tasks you can accomplish with the SafeAI-Global Agent. Whether you are building a quick MVP or complex enterprise software, this guide will help you trigger the right behavior.

---

## 🚀 Task 1: Generate a Fast MVP PRD (No legal overhead)

**Use Case:** You are building an internal tool, a hackathon project, or an early MVP where speed is the priority—you don't need a heavy compliance audit yet.

**How to Trigger:**
Include **"Standard PRD"** or **"skip compliance"** in your prompt.

> **Example Prompt:**
> *"Write a Standard PRD for an internal time-tracking web app for our Dev team. Skip all compliance scanning."*

**What Happens:**  
The agent bypasses the legal/security engine and focuses purely on User Stories, MVP Features, UX/UI requirements, and Technical Architecture.

---

## 🛡️ Task 2: Auto-Detect Market Compliance (Smart Mode)

**Use Case:** You are launching a product targeted at a specific country (e.g., Vietnam, EU, USA) and need to ensure basic local laws are met without over-engineering.

**How to Trigger:**
Just mention the **target country/region** naturally in your prompt. This is the default behavior.

> **Example Prompt:**
> *"Write a PRD for a ride-hailing mobile app. Target market is **Vietnam**."*

**What Happens:**  
The agent automatically detects the region, retrieves the appropriate local laws (e.g., Vietnam PDPD Decree 13, Cybersecurity Law), and embeds targeted security constraints into the PRD.

---

## ⚡ Task 3: Use Pre-built Industry Templates

**Use Case:** You are starting from scratch in a highly regulated industry (FinTech, HealthTech, EdTech) and want a compliant skeleton instantly.

**How to Trigger:**
Type `/template [industry] [region]`.

> **Example Prompts:**
>
> - `/template fintech eu` (For payment gateways in Europe)
> - `/template healthcare us` (For medical apps in the US)
> - `/template social vn` (For social apps in Vietnam)
> - `/template ai global` (For AI/ML products globally)

**What Happens:**  
The agent ignores normal conversation and immediately spits out a full PRD skeleton tailored to that industry, pre-filled with the necessary ISO standards, data flow placeholders, and legal guardrails.

---

## 🔒 Task 4: Run a Deep-Dive Enterprise Audit (Full Audit)

**Use Case:** You are preparing for enterprise software deployment, dealing with highly sensitive data (PHI/PII), or actively pushing for ISO 27001/SOC 2 certifications.

**How to Trigger:**
Explicitly ask for a **"Full Compliance Audit"** or mention **"ISO/SOC2"**.

> **Example Prompt:**
> *"I need a **Full Compliance Audit** PRD for a B2B SaaS payroll platform in Singapore. Include ISO 27001 mapping and accessibility standards."*

**What Happens:**  
The agent activates *all* available compliance frameworks. It cross-references local laws (SG PDPA) with global standards (ISO/IEC 27001, SOC 2, WCAG 2.2) and generates a highly detailed, strict engineering checklist.

---

## 💯 Task 5: Interpret Your "SafeAI-Global Score"

**Use Case:** You have generated a PRD and need to present the risk level to your engineering or legal stakeholders.

**How to Trigger:**
This happens automatically in every compliant PRD under **Section 4.2**.

**How to Interpret:**

- Look at the 0–100 score in the generated document.
- **If Score < 80:** The agent will list the top 2 reasons points were deducted (e.g., *"No explicit end-to-end encryption defined"* or *"Missing age-gating for users under 16"*).
- **Your Action:** Add the missing features to your spec until the agent upgrades your score to 🟢 (Ready for Development).

---

## 🔍 Task 6: Ask Specific Legal/Security Questions

**Use Case:** You already have a PRD and just want to ask the agent a specific question about data residency or a new law.

**How to Trigger:**
Just ask directly as if talking to a Legal/Security engineer.

> **Example Prompts:**
>
> - *"Does the EU AI Act apply to a chatbot that just summarizes user documents?"*
> - *"If I use AWS ap-southeast-1 (Singapore) to store Vietnamese user data, am I violating Decree 53?"*

**What Happens:**  
The agent acts as a knowledge-base Q&A, directly answering your question with citations from its Core Knowledge Engine without generating an entire PRD.

---

## 📄 Task 7: Review an Existing PRD or Document

**Use Case:** You already have a drafted PRD, architecture document, or confluence page and need a compliance expert to review it before approval.

**How to Trigger:**
Paste your existing document into the prompt or upload the file, and ask for a compliance review.

> **Example Prompt:**
>
> *"Here is the PRD for our new messaging feature: [paste context]. Please run a Smart Compliance review for the EU market, highlight missing continuous-requirements, and give me a SafeAI-Global Score."*

**What Happens:**  
The agent will not write a new PRD from scratch. Instead, it will analyze your existing text, score it against Privacy, Security, and Transparency pillars, and list the exact gaps you need to fix.

---

## 📁 Task 8: Scan an Entire Project or Documentation (CI/CD)

**Use Case:** Your engineering team wants to automatically check if their markdown documentation or codebase meets compliance standards during the CI/CD pipeline.

**How to Trigger:**
Use the included CLI linter `safeai-lint` on your project repository.

> **Example Command:**
>
> ```bash
> node cli/safeai-lint.js docs/**/*.md
> ```

**What Happens:**  
The CLI tool scans your project documentation locally. It checks for mandatory compliance sections (Security, Encryption, Data Flow diagrams, and Audit logging) and fails the CI build if critical safety requirements are missing.

> 🤖 **Agent Integration (Cursor, Claude, Antigravity):**
> If you are using an Agentic IDE or CLI-enabled AI, you can simply ask the agent to run the scan for you:
> *"Run the `cli/safeai-lint.js` script on this project and fix any compliance errors it finds."*

---

## 👤 Task 9: Inject Personal/Custom Rules (v3.2.0)

**Use Case:** Your team has specific internal standards (e.g., *"All APIs must use OAuth2"*) or you have unique project constraints that aren't part of global laws.

**How to Trigger:**
Use the command `/inject-policy [Rule Name]: [Content]`.

> **Example Prompt:**
> *"/inject-policy AuthStandard: Every user-facing API must implement OAuth 2.0 with PKCE."*

**What Happens:**  
The agent stores this rule in `knowledge/custom/`. From now on, every PRD generated will treat this rule as **highest priority**. If a global law (like GDPR) and your Custom Rule both apply, the agent merges them. If they conflict, your rule wins (marked as a `⚠️ CUSTOM OVERRIDE`).
