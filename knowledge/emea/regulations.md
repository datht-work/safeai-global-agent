<!-- Europe, Middle East & Africa (EMEA) Privacy & Cybersecurity Regulations -->
# Europe, Middle East & Africa (EMEA) Compliance Frameworks

<law_definition id="EU-GDPR">
  <name>EU General Data Protection Regulation (GDPR)</name>
  <effective_date>2018-05-25</effective_date>
  <source_url><https://gdpr-info.eu/></source_url>

  <applicability>
    - Entities processing personal data of individuals in the EU, regardless of where the entity is based.
  </applicability>

  <rule category="data_residency">
    <description>
      No strict data residency in-EU, but cross-border transfer requirements are strict.
    </description>
  </rule>

  <rule category="cross_border_transfer">
    <description>
      Transferring data outside the EEA requires an adequacy decision, Standard Contractual Clauses (SCCs), or Binding Corporate Rules (BCRs).
    </description>
  </rule>

  <rule category="consent_mechanism">
    <description>
      Explicit consent is required for special categories of data (Art. 9) and automated decision-making. Consent must be freely given, specific, and informed.
    </description>
  </rule>

  <rule category="ai_governance">
    <description>
      Articles 13(2)(f), 14(2)(g), 15(1)(h), and 22 provide rights regarding automated decision-making and explainability.
    </description>
  </rule>
</law_definition>

<law_definition id="EU-AI-ACT">
  <name>EU Artificial Intelligence Act</name>
  <effective_date>2024-08-01</effective_date>

  <rule category="ai_governance">
    <description>
      Risk-based approach: Unacceptable, High, Limited, Minimal. Requires conformity assessment for high-risk systems.
    </description>
  </rule>

  <rule category="transparency">
    <description>
      Mandates clear labeling for AI-generated content (deepfakes) and transparency for interaction with AI.
    </description>
  </rule>
</law_definition>

<law_definition id="EU-DORA">
  <name>Digital Operational Resilience Act (DORA)</name>
  <effective_date>2025-01-17</effective_date>
  <rule category="cybersecurity_resilience">
    <description>
      Focuses on ICT risk management, incident reporting, operational resilience testing, and third-party risk management for the financial sector.
    </description>
  </rule>
</law_definition>

<law_definition id="SA-PDPL">
  <name>Saudi Arabia Personal Data Protection Law (PDPL)</name>
  <effective_date>2024-09-14</effective_date>
  <rule category="data_residency">
    <description>
      Requires local data storage for sensitive personal data or if the transfer affects national security.
    </description>
  </rule>
  <rule category="consent_mechanism">
    <description>
      Explicit consent is the primary legal basis. Legitimate interest is restricted for sensitive data.
    </description>
  </rule>
</law_definition>

<law_definition id="ZA-POPIA">
  <name>South Africa Protection of Personal Information Act (POPIA)</name>
  <effective_date>2021-07-01</effective_date>
  <rule category="cross_border_transfer">
    <description>
      Requires adequate protection in the recipient country, BCRs, or data subject consent.
    </description>
  </rule>
</law_definition>
