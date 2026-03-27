# Contributing to SafeAI-Global Knowledge Base

Welcome to the SafeAI-Global project! To make sure our AI Agent understands legal regulations without hallucinating, we must standardize how knowledge is formatted.

## 📖 The "Knowledge Schema" Standard

When contributing a new country's regulation or an industry standard to the `knowledge/` folder, please use the following Markdown Schema. This heavily optimized structure helps the RAG (Retrieval-Augmented Generation) engine parse laws reliably.

### File Format Requirement: Markdown XML-like tags

Each rule should be wrapped in clear `<rule>` tags to create boundaries for the AI context window.

```markdown
<!-- Name the region or domain at the top -->
# [Country/Region] Compliance Framework

<law_definition id="[LAW-SHORTNAME]">
  <name>Full Legal Name of the Act/Decree</name>
  <effective_date>YYYY-MM-DD</effective_date>
  <source_url>https://official-government-link.gov</source_url>

  <applicability>
    - Defines who this law applies to (e.g., Any entity processing data of citizens residing in X)
  </applicability>

  <rule category="data_residency">
    <description>
      Explain the data localization requirements. Are servers required in-country?
    </description>
  </rule>

  <rule category="cross_border_transfer">
    <description>
      What is needed to send data abroad? (e.g., Standard Contractual Clauses, Consent)
    </description>
  </rule>

  <rule category="consent_mechanism">
    <description>
      Is opt-in required? Do users need to actively check a box?
    </description>
  </rule>

  <rule category="penalties">
    <description>
      What happens if the rule is violated? (e.g., Fines up to 4% of global revenue)
    </description>
  </rule>
</law_definition>
```

### Why this format?
By wrapping rules in `<rule category="...">`, the prompt engineering logic in `SKILL.md` can extract specifically what it needs to build a PRD's Compliance Checklist without hallucinating extraneous data.

## 💬 Suggesting New Compliance Frameworks (Spokes)

If you believe a new domain requires a full "Spoke" expert (e.g., FedRAMP, SOC 2 Type II deep dive), please open a **Feature Request in our [GitHub Discussions](https://github.com/datht-work/safeai-global-agent/discussions)**. Do not just open an Issue, as we need community votes to prioritize large legal domains.

## 🧪 Testing Your Contributions

If you modify `SKILL.md` or any file in `knowledge/`, please ensure you run our LLM evaluation suite locally:

```bash
cd tests
promptfoo eval -c promptfooconfig.yaml
```

This ensures your new law didn't break the existing Prompt's logic!
