# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | ✅ Active support  |
| 1.0.x   | ❌ End of life     |

## Reporting a Vulnerability

If you discover a security vulnerability within this skill, please report it responsibly:

1. **Do NOT open a public GitHub issue** for security vulnerabilities.
2. **Email:** Send details to [datht-work](https://github.com/datht-work) via GitHub private message or create a [private security advisory](https://github.com/datht-work/safeai-global-agent/security/advisories/new).
3. **Include:**
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact assessment
   - Suggested fix (if any)

We will acknowledge receipt within **48 hours** and provide a detailed response within **5 business days**.

## Security Measures

This skill implements the following security practices:

### Content Security

- ✅ **No executable code** — This skill contains only Markdown instruction files (SKILL.md). No scripts, binaries, or executable code are included.
- ✅ **No external network calls** — The skill does not make any HTTP requests, API calls, or network connections.
- ✅ **No data collection** — No telemetry, analytics, or user data collection is performed by the skill itself.
- ✅ **No file system writes** — The skill does not write, modify, or delete any files on the host system.
- ✅ **No dependency chain** — Zero runtime dependencies, eliminating supply-chain attack vectors.

### Data Protection

- ✅ **PII Redaction Layer** — Built-in workflow to detect and mask personally identifiable information before PRD output.
- ✅ **Stateless Operation** — Every session is ephemeral; no user data is stored or persisted.
- ✅ **Consent-First Approach** — All data masking requires explicit user confirmation.

### Compliance

- ✅ **Multi-jurisdiction awareness** — Covers 35+ legal jurisdictions with up-to-date regulations.
- ✅ **Conflict resolution** — Defaults to the most restrictive regulation when jurisdictions conflict.
- ✅ **Source transparency** — All legal citations include specific article/decree references.

## Audit Status

This skill is listed on [skills.sh](https://skills.sh/datht-work/safeai-global-agent) and undergoes automated security audits by:

- **Gen Agent Trust Hub** — AI-driven risk classification and threat analysis
- **Socket** — Supply-chain security and dependency analysis
- **Snyk** — Vulnerability scanning and security monitoring

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
