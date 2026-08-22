#!/usr/bin/env node
/**
 * Bulk-generates fully formatted agent .md files from a short JSON spec,
 * instead of hand-writing each file's frontmatter + 4-section body.
 *
 * Usage:
 *   node scripts/scaffold-agent.mjs scripts/specs/my-agents.json
 *
 * Each spec object:
 * {
 *   "dept": "09_ISHLAB_CHIQARISH_Departamenti",   // department folder under STRUCTURE/
 *   "subfolder": "01_Plan_Fakt",                   // optional sub-folder
 *   "filename": "Plan_Fakt.md",
 *   "aliases": ["Plan_Fakt", "Plan_Fakt_Agenti"],
 *   "tags": ["retail-it", "production"],
 *   "role": "Short one-line role for frontmatter (optional)",
 *   "status": "active",
 *   "parent": "Ishlab_Chiqarish_Agent",             // wikilink target, no brackets
 *   "title": "📊 Plan-Fakt — Kunlik Smena va Hajm Rejasi",
 *   "vazifa": ["Bullet 1", "Bullet 2", "..."],
 *   "workflow": ["Step 1 ...", "Step 2 ...", "..."],
 *   "erpRows": [
 *     { "in": "Kiruvchi ma'lumot", "manba": "[[Source_Agent]]", "out": "Chiquvchi ma'lumot", "qabul": "[[Target_Agent]]" }
 *   ],
 *   "bogliq": ["[[Some_Agent]] — description", "..."]
 * }
 *
 * Run with no args (or --example) to print one filled-in example spec you
 * can copy into a new specs/*.json file.
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const STRUCTURE_ROOT = join(__dirname, "..", "STRUCTURE");

function buildMarkdown(spec) {
  const fm = [
    "---",
    spec.frontmatterTitle ? `title: "${spec.frontmatterTitle}"` : null,
    spec.aliases ? `aliases: [${spec.aliases.join(", ")}]` : null,
    spec.tags ? `tags: [${spec.tags.join(", ")}]` : null,
    spec.role ? `role: "${spec.role}"` : null,
    spec.botRouter ? `bot_router: "${spec.botRouter}"` : null,
    spec.target ? `target: "${spec.target}"` : null,
    `status: ${spec.status || "active"}`,
    `created: ${spec.created || new Date().toISOString().slice(0, 10)}`,
    spec.parent ? `parent: [[${spec.parent}]]` : null,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  const vazifa = (spec.vazifa || []).map((b) => `- ${b}`).join("\n");
  const workflow = (spec.workflow || []).map((s, i) => `${i + 1}. ${s}`).join("\n");

  const erpHeader = "| Kiruvchi ma'lumot | Manba | Chiquvchi ma'lumot | Qabul qiluvchi |\n|---|---|---|---|";
  const erpBody = (spec.erpRows || [])
    .map((r) => `| ${r.in} | ${r.manba} | ${r.out} | ${r.qabul} |`)
    .join("\n");

  const bogliq = (spec.bogliq || []).map((b) => `- ${b}`).join("\n");

  return `${fm}

# ${spec.title}

## 📋 Vazifasi

${vazifa}

## 🔄 Tizim Zanjiri (Workflow)

${workflow}

## 📊 ERP va Ma'lumotlar Almashinuvi

${erpHeader}
${erpBody}

## 🔗 Bog'liq Agentlar

${bogliq}
`;
}

function scaffoldOne(spec) {
  const dir = spec.subfolder
    ? join(STRUCTURE_ROOT, spec.dept, spec.subfolder)
    : join(STRUCTURE_ROOT, spec.dept);
  mkdirSync(dir, { recursive: true });
  const filePath = join(dir, spec.filename);
  if (existsSync(filePath)) {
    console.log(`SKIP (already exists): ${filePath}`);
    return;
  }
  writeFileSync(filePath, buildMarkdown(spec), "utf-8");
  console.log(`Created: ${filePath}`);
}

const EXAMPLE_SPEC = {
  dept: "09_ISHLAB_CHIQARISH_Departamenti",
  subfolder: "07_Yangi_Bosqich",
  filename: "Yangi_Bosqich_Agent.md",
  aliases: ["Yangi_Bosqich_Agent"],
  tags: ["retail-it", "production", "makkajoxori"],
  role: "Bir gaplik rol tavsifi",
  status: "active",
  parent: "Ishlab_Chiqarish_Agent",
  title: "🆕 Yangi Bosqich Agent",
  vazifa: [
    "Birinchi aniq vazifa",
    "Ikkinchi aniq vazifa",
    "Uchinchi aniq vazifa",
    "To'rtinchi aniq vazifa",
    "Beshinchi aniq vazifa",
  ],
  workflow: [
    "[[Oldingi_Agent]] dan ma'lumot keladi.",
    "Ushbu agent nima ish bajarishini yozing.",
    "Natija [[Keyingi_Agent]] ga uzatiladi.",
  ],
  erpRows: [
    { in: "Misol kiruvchi ma'lumot: 100 dona", manba: "[[Oldingi_Agent]]", out: "Misol chiquvchi ma'lumot: 95 dona", qabul: "[[Keyingi_Agent]]" },
  ],
  bogliq: [
    "[[Ishlab_Chiqarish_Agent]] — bosh agent",
    "[[Oldingi_Agent]] — manba",
    "[[Keyingi_Agent]] — keyingi jarayon",
  ],
};

const arg = process.argv[2];

if (!arg || arg === "--example") {
  console.log("Namuna spec (nusxalab, o'zgartirib, JSON faylga saqlang):\n");
  console.log(JSON.stringify([EXAMPLE_SPEC], null, 2));
  console.log("\nSo'ng ishga tushiring: node scripts/scaffold-agent.mjs scripts/specs/my-agents.json");
  process.exit(0);
}

const specs = JSON.parse(readFileSync(arg, "utf-8"));
for (const spec of specs) scaffoldOne(spec);
