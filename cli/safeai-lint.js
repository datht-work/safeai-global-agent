#!/usr/bin/env node

/**
 * SafeAI-Lint — PRD & Knowledge Compliance Checker (CLI)
 *
 * Scans Markdown PRD files and warns about missing compliance sections.
 * Automatically excludes project infrastructure files (README, CHANGELOG, etc.)
 *
 * Usage:
 *   npx safeai-lint path/to/prd.md
 *   npx safeai-lint path/to/prd-folder/
 *   npx safeai-lint . --strict          # Exit code 1 on any warning
 *
 * Exit codes:
 *   0 = All checks passed
 *   1 = Errors found (or warnings in --strict mode)
 *   2 = Error (file not found, etc.)
 */

const fs = require("fs");
const path = require("path");

// ── Project infrastructure files (NOT PRDs — skip PRD rules) ─────────
const EXCLUDED_BASENAMES = new Set([
    "README.md",
    "README-vi.md",
    "CHANGELOG.md",
    "CONTRIBUTING.md",
    "SECURITY.md",
    "LICENSE",
    "USER_GUIDE.md",
    "USER_GUIDE-vi.md",
]);

// ── Required sections for PRDs ───────────────────────────────────────
const PRD_RULES = [
    {
        id: "SEC-001",
        name: "Security & Compliance section",
        pattern: /##\s.*(?:security|compliance|bảo mật|tuân thủ)/i,
        severity: "error",
        message: "Missing a '## Security & Compliance' section.",
    },
    {
        id: "SEC-002",
        name: "Encryption mention",
        pattern: /(?:encrypt|AES|TLS|mã hoá|mã hóa)/i,
        severity: "warning",
        message: "No mention of encryption (AES, TLS, etc.).",
    },
    {
        id: "SEC-003",
        name: "Consent / DSAR mention",
        pattern: /(?:consent|DSAR|opt-in|opt-out|đồng ý|quyền)/i,
        severity: "warning",
        message: "No mention of user consent or Data Subject Access Requests.",
    },
    {
        id: "SEC-004",
        name: "Data Flow or Architecture diagram",
        pattern: /(?:data flow|mermaid|architecture|luồng dữ liệu|sơ đồ)/i,
        severity: "warning",
        message: "No Data Flow Diagram or architecture reference found.",
    },
    {
        id: "SEC-005",
        name: "Audit / Logging mention",
        pattern: /(?:audit|log|trail|giám sát|nhật ký)/i,
        severity: "warning",
        message: "No mention of audit logging or monitoring.",
    },
    {
        id: "SEC-006",
        name: "Compliance checklist",
        pattern: /- \[ ?\]/,
        severity: "warning",
        message: "No actionable compliance checklist (Markdown checkboxes) found.",
    },
    {
        id: "SEC-007",
        name: "Compliance Score",
        pattern: /(?:score|điểm số|đánh giá).*(?:\d{1,3}\/100|0-100)/i,
        severity: "warning",
        message: "No SafeAI-Global Compliance Score (0-100) found.",
    },
    {
        id: "SEC-008",
        name: "Risk Assessment",
        pattern: /##\s.*(?:risk|rủi ro)/i,
        severity: "warning",
        message: "Missing '## Risk Assessment' section.",
    },
    {
        id: "SEC-009",
        name: "Compliance Badge",
        pattern: /(?:🟢|🟡|🔴)\s.*(?:AAA|AA|A)/i,
        severity: "warning",
        message: "No SafeAI Compliance Badge (🟢 AAA / 🟡 AA / 🔴 A) found.",
    },
];

// ── Required sections for Knowledge Base ─────────────────────────────
const KNOWLEDGE_RULES = [
    {
        id: "KNOW-001",
        name: "Law Definition Tag",
        pattern: /<law_definition id="[^"]+">/,
        severity: "error",
        message: "Missing <law_definition> XML tag with an ID.",
    },
    {
        id: "KNOW-002",
        name: "Rule Tags",
        pattern: /<rule category="[^"]+">/,
        severity: "error",
        message: "Missing <rule> XML tags with a category.",
    },
    {
        id: "KNOW-003",
        name: "Metadata Tags",
        pattern: /<(?:name|effective_date)>/,
        severity: "warning",
        message: "Missing standard metadata tags (<name>, <effective_date>).",
    },
];

// ── SKILL.md-specific rules ──────────────────────────────────────────
const SKILL_RULES = [
    {
        id: "SKILL-001",
        name: "YAML Frontmatter",
        pattern: /^---\nname:/,
        severity: "error",
        message: "Missing YAML frontmatter with 'name' field.",
    },
    {
        id: "SKILL-002",
        name: "Description in frontmatter",
        pattern: /^---\n.*description:/s,
        severity: "error",
        message: "Missing 'description' field in YAML frontmatter.",
    },
    {
        id: "SKILL-003",
        name: "Disclaimer section",
        pattern: /disclaimer/i,
        severity: "warning",
        message: "Missing Disclaimer section.",
    },
    {
        id: "SKILL-004",
        name: "Version table",
        pattern: /version.*date.*changes/i,
        severity: "warning",
        message: "Missing Version & Changelog table.",
    },
];

// ── Helpers ──────────────────────────────────────────────────────────
const COLORS = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    cyan: "\x1b[36m",
    dim: "\x1b[2m",
    bold: "\x1b[1m",
};

function log(color, symbol, text) {
    console.log(`  ${color}${symbol}${COLORS.reset} ${text}`);
}

function getFileCategory(filePath) {
    const basename = path.basename(filePath);

    // Excluded infrastructure files — skip entirely
    if (EXCLUDED_BASENAMES.has(basename)) {
        return "excluded";
    }

    // Knowledge base files
    if (filePath.includes("knowledge/") && !filePath.endsWith("metadata.json")) {
        return "knowledge";
    }

    // SKILL.md files (hub or spoke)
    if (basename === "SKILL.md") {
        return "skill";
    }

    // Example PRD outputs
    if (filePath.includes("examples/")) {
        return "prd";
    }

    // Default: treat as a PRD
    return "prd";
}

function lintFile(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const results = [];
    const category = getFileCategory(filePath);

    if (category === "excluded") {
        return { results: [], skipped: true };
    }

    let rules;
    switch (category) {
        case "knowledge":
            rules = KNOWLEDGE_RULES;
            break;
        case "skill":
            rules = SKILL_RULES;
            break;
        case "prd":
        default:
            rules = PRD_RULES;
            break;
    }

    for (const rule of rules) {
        if (!rule.pattern.test(content)) {
            results.push(rule);
        }
    }

    return { results, skipped: false, category };
}

function collectMarkdownFiles(targetPath) {
    const stat = fs.statSync(targetPath);
    if (stat.isFile() && targetPath.endsWith(".md")) {
        return [targetPath];
    }
    if (stat.isDirectory()) {
        return fs
            .readdirSync(targetPath, { recursive: true })
            .filter((f) => {
                const parts = f.split(path.sep);
                const isHidden = parts.some(part => part.startsWith("."));
                const isNodeModules = parts.some(part => part === "node_modules");
                return f.endsWith(".md") && !isHidden && !isNodeModules;
            })
            .map((f) => path.join(targetPath, f));
    }
    return [];
}

// ── Main ─────────────────────────────────────────────────────────────
function main() {
    const args = process.argv.slice(2);
    const isStrict = args.includes("--strict");
    const filteredArgs = args.filter(a => a !== "--strict");

    if (filteredArgs.length === 0 || args.includes("--help")) {
        console.log(`
${COLORS.bold}SafeAI-Lint v5.0.0${COLORS.reset} — PRD, Skill & Knowledge Compliance Checker

${COLORS.dim}Usage:${COLORS.reset}
  npx safeai-lint <file.md | directory>
  npx safeai-lint . --strict              # Treat warnings as errors

${COLORS.dim}Options:${COLORS.reset}
  --strict    Exit with code 1 on any warning (useful for CI/CD)
  --help      Show this help message

${COLORS.dim}File Categories:${COLORS.reset}
  PRD files         → Checked against SEC-001 to SEC-009
  SKILL.md files    → Checked against SKILL-001 to SKILL-004
  knowledge/*.md    → Checked against KNOW-001 to KNOW-003
  Infrastructure    → Automatically skipped (README, CHANGELOG, etc.)

${COLORS.dim}PRD Rules:${COLORS.reset}`);
        PRD_RULES.forEach((r) => log(COLORS.cyan, r.id, `${r.name} (${r.severity})`));
        console.log(`\n${COLORS.dim}Skill Rules:${COLORS.reset}`);
        SKILL_RULES.forEach((r) => log(COLORS.cyan, r.id, `${r.name} (${r.severity})`));
        console.log(`\n${COLORS.dim}Knowledge Rules:${COLORS.reset}`);
        KNOWLEDGE_RULES.forEach((r) => log(COLORS.cyan, r.id, `${r.name} (${r.severity})`));
        console.log("");
        process.exit(0);
    }

    const target = filteredArgs[0];
    if (!fs.existsSync(target)) {
        console.error(`${COLORS.red}Error:${COLORS.reset} Path not found: ${target}`);
        process.exit(2);
    }

    const files = collectMarkdownFiles(target);
    if (files.length === 0) {
        console.error(`${COLORS.red}Error:${COLORS.reset} No Markdown files found at: ${target}`);
        process.exit(2);
    }

    console.log(`\n${COLORS.bold}🛡️  SafeAI-Lint v5.0.0${COLORS.reset} — scanning ${files.length} file(s)...${isStrict ? ` ${COLORS.red}(strict mode)${COLORS.reset}` : ""}\n`);

    let totalWarnings = 0;
    let totalErrors = 0;
    let totalSkipped = 0;

    for (const file of files) {
        const { results: issues, skipped, category } = lintFile(file);
        const relPath = path.relative(process.cwd(), file);

        if (skipped) {
            log(COLORS.dim, "⏭", `${relPath} — Skipped (infrastructure file)`);
            totalSkipped++;
        } else if (issues.length === 0) {
            log(COLORS.green, "✓", `${relPath} — All checks passed ${COLORS.dim}(${category})${COLORS.reset}`);
        } else {
            log(COLORS.yellow, "⚠", `${COLORS.bold}${relPath}${COLORS.reset} ${COLORS.dim}(${category})${COLORS.reset}`);
            for (const issue of issues) {
                const color = issue.severity === "error" ? COLORS.red : COLORS.yellow;
                const symbol = issue.severity === "error" ? "✗" : "⚠";
                log(color, `  ${symbol} [${issue.id}]`, issue.message);
                if (issue.severity === "error") totalErrors++;
                else totalWarnings++;
            }
        }
    }

    console.log(`\n${COLORS.dim}────────────────────────────────────────${COLORS.reset}`);
    console.log(
        `  ${totalErrors > 0 ? COLORS.red : COLORS.green}${totalErrors} error(s)${COLORS.reset}, ` +
        `${totalWarnings > 0 ? COLORS.yellow : COLORS.green}${totalWarnings} warning(s)${COLORS.reset}, ` +
        `${COLORS.dim}${totalSkipped} skipped${COLORS.reset}\n`
    );

    if (isStrict) {
        process.exit((totalErrors + totalWarnings) > 0 ? 1 : 0);
    } else {
        process.exit(totalErrors > 0 ? 1 : 0);
    }
}

main();
