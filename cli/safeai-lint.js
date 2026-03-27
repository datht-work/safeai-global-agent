#!/usr/bin/env node

/**
 * SafeAI-Lint — PRD Compliance Checker (CLI)
 *
 * Scans Markdown PRD files and warns about missing compliance sections.
 *
 * Usage:
 *   npx safeai-lint path/to/prd.md
 *   npx safeai-lint path/to/prd-folder/
 *
 * Exit codes:
 *   0 = All checks passed
 *   1 = Warnings found (missing sections)
 *   2 = Error (file not found, etc.)
 */

const fs = require("fs");
const path = require("path");

// ── Required sections ────────────────────────────────────────────────
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

function lintFile(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const results = [];
    const isKnowledge = filePath.includes("knowledge/") && !filePath.endsWith("metadata.json");
    
    const rules = isKnowledge ? KNOWLEDGE_RULES : PRD_RULES;

    for (const rule of rules) {
        if (!rule.pattern.test(content)) {
            results.push(rule);
        }
    }

    return results;
}

function collectMarkdownFiles(targetPath) {
    const stat = fs.statSync(targetPath);
    if (stat.isFile() && targetPath.endsWith(".md")) {
        return [targetPath];
    }
    if (stat.isDirectory()) {
        return fs
            .readdirSync(targetPath, { recursive: true })
            .filter((f) => f.endsWith(".md"))
            .map((f) => path.join(targetPath, f));
    }
    return [];
}

// ── Main ─────────────────────────────────────────────────────────────
function main() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes("--help")) {
        console.log(`
${COLORS.bold}SafeAI-Lint${COLORS.reset} — PRD & Knowledge Compliance Checker

${COLORS.dim}Usage:${COLORS.reset}
  npx safeai-lint <file.md | directory>

${COLORS.dim}Example:${COLORS.reset}
  npx safeai-lint docs/my-prd.md
  npx safeai-lint knowledge/

${COLORS.dim}PRD Rules:${COLORS.reset}`);
        PRD_RULES.forEach((r) => log(COLORS.cyan, r.id, `${r.name} (${r.severity})`));
        console.log(`\n${COLORS.dim}Knowledge Rules:${COLORS.reset}`);
        KNOWLEDGE_RULES.forEach((r) => log(COLORS.cyan, r.id, `${r.name} (${r.severity})`));
        console.log("");
        process.exit(0);
    }

    const target = args[0];
    if (!fs.existsSync(target)) {
        console.error(`${COLORS.red}Error:${COLORS.reset} Path not found: ${target}`);
        process.exit(2);
    }

    const files = collectMarkdownFiles(target);
    if (files.length === 0) {
        console.error(`${COLORS.red}Error:${COLORS.reset} No Markdown files found at: ${target}`);
        process.exit(2);
    }

    console.log(`\n${COLORS.bold}🛡️  SafeAI-Lint${COLORS.reset} — scanning ${files.length} file(s)...\n`);

    let totalWarnings = 0;
    let totalErrors = 0;

    for (const file of files) {
        const issues = lintFile(file);
        const relPath = path.relative(process.cwd(), file);

        if (issues.length === 0) {
            log(COLORS.green, "✓", `${relPath} — All checks passed`);
        } else {
            log(COLORS.yellow, "⚠", `${COLORS.bold}${relPath}${COLORS.reset}`);
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
        `${totalWarnings > 0 ? COLORS.yellow : COLORS.green}${totalWarnings} warning(s)${COLORS.reset}\n`
    );

    process.exit(totalErrors > 0 ? 1 : 0);
}

main();
