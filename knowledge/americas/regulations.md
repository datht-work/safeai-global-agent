<!-- Americas Privacy & Cybersecurity Regulations -->
# Americas Compliance Frameworks

<law_definition id="US-HIPAA">
  <name>US Health Insurance Portability and Accountability Act (HIPAA)</name>
  <effective_date>1996-08-21</effective_date>
  <source_url><https://www.hhs.gov/hipaa/></source_url>

  <rule category="data_residency">
    <description>
      Strict safeguards required for Protected Health Information (PHI). Data residency not federally mandated but often contractually required for public sector entities.
    </description>
  </rule>

  <rule category="security_controls">
    <description>
      Requires Administrative, Physical, and Technical safeguards to ensure the confidentiality, integrity, and availability of PHI.
    </description>
  </rule>
</law_definition>

<law_definition id="US-CA-CCPA">
  <name>California Consumer Privacy Act (CCPA/CPRA)</name>
  <effective_date>2020-01-01</effective_date>

  <rule category="consent_mechanism">
    <description>
      Requires an "opt-out" mechanism for the sale or sharing of personal information. Explicit "opt-in" is required for minors.
    </description>
  </rule>

  <rule category="cross_border_transfer">
    <description>
      No strict localization, but contractual Data Processing Addendums (DPAs) are industry standard for compliance.
    </description>
  </rule>
</law_definition>

<law_definition id="BR-LGPD">
  <name>Brazil General Personal Data Protection Law (LGPD)</name>
  <effective_date>2020-09-18</effective_date>
  <rule category="cross_border_transfer">
    <description>
      Requires adequacy, SCCs, BCRs, or specific consent (Art. 33).
    </description>
  </rule>

  <rule category="ai_governance">
    <description>
      Risk-based approach and human oversight for automated decisions.
    </description>
  </rule>
</law_definition>

<law_definition id="CA-PIPEDA">
  <name>Canada Personal Information Protection and Electronic Documents Act (PIPEDA)</name>
  <effective_date>2001-01-01</effective_date>
  <rule category="consent_mechanism">
    <description>
      Requires meaningful consent. Organizations must be accountable for personal information under their control.
    </description>
  </rule>
</law_definition>

<law_definition id="US-STATE-LAWS">
  <name>US Comprehensive State Privacy Laws (24 states enacted as of mid-2026)</name>
  <effective_date>2023-2026</effective_date>
  <source_url><https://iapp.org/resources/article/us-state-privacy-legislation-tracker/></source_url>

  <applicability>
    - As of July 2026, 24 US states have enacted comprehensive consumer privacy laws, with approximately 20 currently in effect.
    - States with active laws include: Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Iowa, Indiana, Tennessee, Texas, Montana, Oregon, Delaware, New Hampshire, New Jersey, Nebraska, Kentucky, Rhode Island, Maryland, Minnesota, Alabama, Louisiana, Oklahoma, Vermont, Arkansas, and others.
    - Key effective dates in 2026: Indiana, Kentucky, Rhode Island (Jan 1), Connecticut expanded + Arkansas + Utah expanded (Jul 1).
  </applicability>

  <rule category="consent_mechanism">
    <description>
      Generally follows opt-out for sales/sharing and targeted advertising. Sensitive data processing typically requires opt-in consent. Most states now require recognition of Universal Opt-Out Mechanisms (e.g., Global Privacy Control signals). Variations exist — organizations must track state-specific thresholds (consumer counts, revenue from data sales) to determine applicability.
    </description>
  </rule>

  <rule category="consumer_rights">
    <description>
      Common rights across most state laws: Access, Deletion, Correction, Data Portability, and Opt-Out of Sale/Sharing. Some states (e.g., Connecticut, Maryland, Minnesota) provide additional rights such as algorithmic decision-making opt-outs and data minimization requirements.
    </description>
  </rule>
</law_definition>
