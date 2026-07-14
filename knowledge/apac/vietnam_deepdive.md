<!-- Vietnam Privacy, Cybersecurity & IT Regulations Deep-Dive -->
# Vietnam Compliance Framework

<law_definition id="VN-PDPL-DEEP">
  <name>Vietnam Law on Personal Data Protection (Law No. 91/2025/QH15) & Decree 356/2025/ND-CP</name>
  <effective_date>2026-01-01</effective_date>
  <source_url>https://vanban.chinhphu.vn/</source_url>

  <applicability>
    - Any agency, organization, or individual involved in personal data processing in Vietnam.
    - Foreign agencies, organizations, or individuals directly involved in or related to personal data processing in Vietnam.
    - Mandatory designation of a Data Protection Officer (DPO) or Department.
  </applicability>

  <rule category="data_residency">
    <description>
      Requires a copy of personal data of Vietnamese citizens to be stored locally on servers physically located in Vietnam, aligned with Law on Cybersecurity 2025.
    </description>
  </rule>

  <rule category="cross_border_transfer">
    <description>
      Transferring personal data of Vietnamese citizens abroad requires:
      1. Drafting and submitting a Data Transfer Impact Assessment (DTIA) filing with the Ministry of Public Security (A05) within 60 days of processing.
      2. Obtaining explicit, voluntary, and informed consent of the data subject.
      3. A written commitment to data protection standards from the foreign recipient.
    </description>
  </rule>

  <rule category="consent_mechanism">
    <description>
      Consent must be voluntary, clear, specific, and opt-in. Bundled consent for multiple purposes is strictly prohibited. Silence or pre-checked boxes are not valid. Verifiable consent logs must be maintained at all times.
    </description>
  </rule>

  <rule category="penalties">
    <description>
      Severe violations are subject to administrative fines up to 5% of annual revenue or up to VND 3 billion. Additional sanctions include service suspension or revocation of licenses.
    </description>
  </rule>

  <rule category="dpo_requirement">
    <description>
      Mandatory designation of a Data Protection Officer (DPO) or a dedicated Data Protection Department. The contact details of the DPO/Department must be registered with the Ministry of Public Security (A05).
    </description>
  </rule>

  <rule category="sensitive_data">
    <description>
      Identifies 10 categories of sensitive data: political views, religious beliefs, health status, genetic data, biometric data, sexual orientation, criminal records, financial data, location data, and data of children. Processing sensitive data requires heightened security and notification to A05.
    </description>
  </rule>

  <rule category="data_subject_rights">
    <description>
      Data subjects have the right to access, correct, delete, object to processing, withdraw consent, and file complaints. Response to Data Subject Access Requests (DSAR) must be completed within 30 days.
    </description>
  </rule>
</law_definition>

<law_definition id="VN-CYBERSECURITY-2025">
  <name>Vietnam Law on Cybersecurity 2025 (Law No. 116/2025/QH15)</name>
  <effective_date>2026-07-01</effective_date>
  <source_url>https://vanban.chinhphu.vn/</source_url>

  <applicability>
    - Domestic and foreign enterprises providing telecommunications, Internet, or value-added services in cyberspace in Vietnam.
  </applicability>

  <rule category="data_localization">
    <description>
      Mandates local data storage for user account names, service usage times, payment/financial information, IP addresses, and user-generated relationship data. Non-compliant foreign entities may be forced to open local representative offices.
    </description>
  </rule>

  <rule category="content_moderation">
    <description>
      Strict content moderation obligations. Platform operators must remove illegal content (e.g., fake news, national security threats) within specific "golden hour" timelines (typically within 24 hours of authority notification).
    </description>
  </rule>

  <rule category="ai_deepfake">
    <description>
      Prohibits the generation, dissemination, or utilization of AI-generated deepfakes (synthetic media) for fraud, misinformation, manipulation, or unauthorized identity replication. All synthetic content must be machine-readable labeled.
    </description>
  </rule>

  <rule category="system_classification">
    <description>
      Classifies information systems into 5 tiers based on national security impact. Systems at Level 3 and above must notify the Ministry of Public Security (MPS) and meet strict technical security criteria.
    </description>
  </rule>

  <rule category="budget_requirement">
    <description>
      Organizations managing critical information systems must allocate at least 15% of their total investment and operational budget to cybersecurity and defensive measures.
    </description>
  </rule>
</law_definition>

<law_definition id="VN-AI-LAW">
  <name>Vietnam Law on Artificial Intelligence 2025 (Law No. 134/2025/QH15)</name>
  <effective_date>2026-03-01</effective_date>
  <source_url>https://vanban.chinhphu.vn/</source_url>

  <applicability>
    - Any entity designing, developing, deploying, or offering AI systems in the Vietnamese market.
    - Foreign AI developers whose models target or impact users in Vietnam.
  </applicability>

  <rule category="risk_classification">
    <description>
      Establishes a 3-tier risk framework: High, Medium, and Low risk AI. Under Decision No. 33/2026/QD-TTg, 46 specific systems across transport, judicial, healthcare, banking, education, and public sector are classified as high-risk.
    </description>
  </rule>

  <rule category="conformity_assessment">
    <description>
      High-risk AI systems must undergo mandatory conformity assessments, safety testing, and register with the National AI Database prior to market release.
    </description>
  </rule>

  <rule category="transparency">
    <description>
      Mandates clear labeling for all AI-generated content (deepfakes, generated audio/text/video) with machine-readable watermarks. Users must be notified when interacting with an AI system.
    </description>
  </rule>

  <rule category="foreign_entity">
    <description>
      Foreign AI developers deploying high-risk AI systems in Vietnam must establish a commercial presence (subsidiary/representative office) or appoint a local legal representative.
    </description>
  </rule>

  <rule category="regulatory_sandbox">
    <description>
      Provides state-backed regulatory sandboxes for testing AI innovations under controlled conditions with temporary exemptions from certain administrative requirements.
    </description>
  </rule>
</law_definition>

<law_definition id="VN-ECOMMERCE-2025">
  <name>Vietnam Law on E-Commerce (Law No. 122/2025/QH15)</name>
  <effective_date>2026-07-01</effective_date>
  <source_url>https://vanban.chinhphu.vn/</source_url>

  <applicability>
    - All domestic and foreign e-commerce platforms, sales websites, social networks with e-commerce features, and livestream commerce operators in Vietnam.
  </applicability>

  <rule category="platform_obligations">
    <description>
      Platform operators act as "active gatekeepers." They must verify seller identities using chip-based Citizen ID cards or VNeID level 2 credentials. They are jointly liable for counterfeit goods if they fail to perform verification.
    </description>
  </rule>

  <rule category="foreign_platform">
    <description>
      Foreign e-commerce platforms targeting Vietnam must appoint an authorized legal representative in Vietnam to handle consumer claims and compliance audits.
    </description>
  </rule>

  <rule category="livestream_commerce">
    <description>
      Brings livestreaming sales, affiliate marketing networks, and group buying platforms under explicit licensing, taxation, and platform compliance guidelines.
    </description>
  </rule>

  <rule category="data_retention">
    <description>
      E-commerce platforms must store transaction logs and seller information for a minimum of 3 years. Service activity data and logs must be stored for at least 1 year.
    </description>
  </rule>

  <rule category="grace_period">
    <description>
      E-commerce portals registered under the old Decree 52/2013/ND-CP have a transition grace period until June 30, 2027, to fully align with the new 2025 E-Commerce Law.
    </description>
  </rule>
</law_definition>

<law_definition id="VN-ELECTRONIC-TRANSACTIONS">
  <name>Vietnam Law on Electronic Transactions 2023 & Decree 23/2025/ND-CP</name>
  <effective_date>2024-07-01</effective_date>
  <source_url>https://vanban.chinhphu.vn/</source_url>

  <applicability>
    - Any transaction conducted by electronic means in public, corporate, and civil activities.
  </applicability>

  <rule category="digital_signature">
    <description>
      Recognizes three categories: Specialized e-signatures, Public digital signatures (asymmetric crypto), and Specialized digital signatures for public use. High-value transactions require certified public digital signatures.
    </description>
  </rule>

  <rule category="software_requirements">
    <description>
      Electronic contract and digital signature software must implement RSA-2048+ algorithms, verify the validity of certificates, bind timestamps, and connect to the public digital signature authentication gateway managed by MoST.
    </description>
  </rule>

  <rule category="foreign_signature">
    <description>
      Foreign digital signatures and electronic signatures are legally recognized in Vietnam provided they meet equivalent security levels and verification standards.
    </description>
  </rule>

  <rule category="legal_validity">
    <description>
      An electronic signature holds the same legal weight as a handwritten signature for individuals, and a seal/authorized signature for organizations.
    </description>
  </rule>
</law_definition>

<law_definition id="VN-SBV-FINTECH">
  <name>State Bank of Vietnam (SBV) Decision 2345/QD-NHNN & Circulars 45/2025/TT-NHNN, 77/2025/TT-NHNN</name>
  <effective_date>2024-07-01</effective_date>
  <source_url>https://sbv.gov.vn/</source_url>

  <applicability>
    - All commercial banks, foreign bank branches, and payment intermediary service providers (e-wallets, payment gateways) operating in Vietnam.
  </applicability>

  <rule category="biometric_auth">
    <description>
      Mandatory facial biometric authentication (matching chip-based ID data or VNeID level 2) for:
      1. Single online transactions exceeding VND 10 million.
      2. Cumulative daily transaction value exceeding VND 20 million.
      3. First-time log in or transactions on new mobile devices.
    </description>
  </rule>

  <rule category="ekyc">
    <description>
      eKYC process must verify customer face biometric identifiers directly against the national database via chip-based citizen identity card NFC reads or VNeID api integration.
    </description>
  </rule>

  <rule category="account_suspension">
    <description>
      Since January 1, 2026, financial institutions must suspend online transaction access for any account that has not successfully verified its biometrics.
    </description>
  </rule>

  <rule category="corporate_banking">
    <description>
      Circular 77/2025/TT-NHNN (effective March 1, 2026) imposes strict security requirements on corporate banking. From July 1, 2026, corporate approvers must use biometric verification for transactions exceeding VND 50 million.
    </description>
  </rule>

  <rule category="passport_deprecated">
    <description>
      Since January 1, 2026, passports can no longer be used as a primary ID for banking operations; only chip-based Citizen IDs or VNeID level-2 accounts are recognized.
    </description>
  </rule>
</law_definition>

<law_definition id="VN-INFOSEC-TIERS">
  <name>Vietnam Information Security System Tiers Framework</name>
  <effective_date>2026-07-01</effective_date>
  <source_url>https://mic.gov.vn/</source_url>

  <applicability>
    - All owners, operators, and developers of information systems in Vietnam (public and private).
  </applicability>

  <rule category="tier_1">
    <description>
      Systems serving internal administrative tasks where failure causes minor disruption to operations but no damage to users.
    </description>
  </rule>

  <rule category="tier_2">
    <description>
      Systems serving public/user services where failure causes serious disruption to users or minor public damage.
    </description>
  </rule>

  <rule category="tier_3">
    <description>
      Systems processing special/sensitive data, national infrastructure, or systems where failure affects national security. Must notify the Ministry of Public Security (A05) and undergo mandatory auditing.
    </description>
  </rule>

  <rule category="tier_4">
    <description>
      Systems of critical national security importance where disruption causes catastrophic public damage or direct threat to national sovereignty.
    </description>
  </rule>

  <rule category="tier_5">
    <description>
      The highest state system tier — critical national security networks requiring military-grade defense and direct continuous government administration.
    </description>
  </rule>
</law_definition>

<law_definition id="VN-QCVN-STANDARDS">
  <name>Vietnam National Technical Standards & Security Vulnerabilities Framework</name>
  <effective_date>2026-01-01</effective_date>
  <source_url>https://mic.gov.vn/</source_url>

  <applicability>
    - All software, hardware, IoT devices, and database architectures deployed in Vietnam.
  </applicability>

  <rule category="iot_standards">
    <description>
      Under QCVN 135:2025/BTTTT, all IP cameras, smart home hubs, and connected IoT devices must undergo mandatory certification and possess no known critical security vulnerabilities.
    </description>
  </rule>

  <rule category="software_security">
    <description>
      Requires regular vulnerability assessments, code scanning, and patching. Custom software must prove compliance with secure coding standards (OWASP Top 10 equivalent) under local cybersecurity audits.
    </description>
  </rule>
</law_definition>
