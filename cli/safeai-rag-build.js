#!/usr/bin/env node

/**
 * SafeAI RAG Builder
 * 
 * Compiles the `knowledge/` directory into a single JSON file
 * for teams using localized RAG setups or custom vector databases.
 */

const fs = require('fs');
const path = require('path');

const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge');
const OUTPUT_FILE = path.join(__dirname, '..', 'knowledge_compiled.json');

function readDirRecursive(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(readDirRecursive(filePath));
        } else if (file.endsWith('.md')) {
            results.push(filePath);
        }
    });
    return results;
}

function compileKnowledge() {
    console.log(`📦 Compiling knowledge base from: ${KNOWLEDGE_DIR}`);

    if (!fs.existsSync(KNOWLEDGE_DIR)) {
        console.error(`❌ Error: Knowledge directory not found at ${KNOWLEDGE_DIR}`);
        process.exit(1);
    }

    const metadataPath = path.join(KNOWLEDGE_DIR, 'metadata.json');
    let metadata = { version: "unknown", last_updated: new Date().toISOString() };
    if (fs.existsSync(metadataPath)) {
        metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    }

    const files = readDirRecursive(KNOWLEDGE_DIR);
    const compiledData = [];

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(KNOWLEDGE_DIR, file);

        compiledData.push({
            source: relativePath,
            content: content,
            updated_at: new Date().toISOString()
        });
    });

    const outputObj = {
        metadata: metadata,
        documents: compiledData
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputObj, null, 2));

    console.log(`✅ Successfully compiled ${files.length} documents into ${OUTPUT_FILE}`);
}

compileKnowledge();
