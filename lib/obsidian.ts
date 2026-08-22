import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Bundled into the repo (see /STRUCTURE) so it resolves the same way on
// Vercel's serverless functions as it does locally. Override only for local
// development against a live Obsidian vault outside the repo.
export const VAULT_PATH =
  process.env.OBSIDIAN_VAULT_PATH || path.join(process.cwd(), "STRUCTURE");

export interface AgentDoc {
  id: string;
  fileName: string;
  title: string;
  frontmatter: Record<string, unknown>;
  content: string;
  wikilinks: string[];
  telegramBot: string | null;
  webApp: string | null;
  relativePath: string;
}

export interface SectionNode {
  id: string;
  folderName: string;
  displayName: string;
  index: AgentDoc | null;
  docs: AgentDoc[];
  children: SectionNode[];
}

export interface DashboardData {
  orgChart: AgentDoc | null;
  leadership: SectionNode | null;
  departments: SectionNode[];
}

function cleanName(raw: string): string {
  return raw
    .replace(/^\d+_/, "")
    .replace(/_/g, " ")
    .trim();
}

function extractWikilinks(content: string): string[] {
  const matches = content.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g);
  const set = new Set<string>();
  for (const m of matches) set.add(m[1].trim());
  return Array.from(set);
}

function extractTelegramBot(content: string): string | null {
  const m = content.match(/@[a-zA-Z0-9_]{4,}bot\b/i);
  return m ? m[0] : null;
}

function extractWebApp(content: string): string | null {
  const m = content.match(/https?:\/\/[^\s)|\]]+/);
  return m ? m[0] : null;
}

function parseFile(filePath: string, relativePath: string): AgentDoc {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const headingMatch = content.match(/^#\s+(.+)$/m);
  const fileName = path.basename(filePath, ".md");

  return {
    id: relativePath.replace(/\\/g, "/").replace(/\.md$/, ""),
    fileName,
    title: headingMatch ? headingMatch[1].trim() : cleanName(fileName),
    frontmatter: data,
    content: content.trim(),
    wikilinks: extractWikilinks(content),
    telegramBot: extractTelegramBot(content),
    webApp: extractWebApp(content),
    relativePath: relativePath.replace(/\\/g, "/"),
  };
}

function buildSection(dirPath: string, relDir: string): SectionNode {
  const folderName = path.basename(dirPath);
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  let index: AgentDoc | null = null;
  const docs: AgentDoc[] = [];
  const children: SectionNode[] = [];

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    const entryRel = path.join(relDir, entry.name);

    if (entry.isDirectory()) {
      children.push(buildSection(entryPath, entryRel));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const doc = parseFile(entryPath, entryRel);
      if (entry.name.toUpperCase() === "_INDEX.MD") {
        index = doc;
      } else {
        docs.push(doc);
      }
    }
  }

  // A folder-dropdown must hold at least 2 files to earn its own accordion.
  // A leaf child folder with fewer than 2 docs (and no sub-folders of its
  // own) gets unwrapped: its doc(s) are promoted straight into this parent.
  const finalDocs = [...docs];
  const finalChildren: SectionNode[] = [];
  for (const child of children) {
    if (child.docs.length < 2 && child.children.length === 0) {
      finalDocs.push(...child.docs);
    } else {
      finalChildren.push(child);
    }
  }

  return {
    id: relDir.replace(/\\/g, "/"),
    folderName,
    displayName: cleanName(folderName),
    index,
    docs: finalDocs,
    children: finalChildren,
  };
}

let cache: DashboardData | null = null;

export function getDashboardData(forceRefresh = false): DashboardData {
  if (cache && !forceRefresh) return cache;

  if (!fs.existsSync(VAULT_PATH)) {
    cache = { orgChart: null, leadership: null, departments: [] };
    return cache;
  }

  const entries = fs.readdirSync(VAULT_PATH, { withFileTypes: true });
  let orgChart: AgentDoc | null = null;
  let leadership: SectionNode | null = null;
  const departments: SectionNode[] = [];

  for (const entry of entries) {
    const entryPath = path.join(VAULT_PATH, entry.name);

    if (entry.isFile() && entry.name.endsWith(".md")) {
      if (entry.name.toUpperCase() === "ORG-CHART.MD") {
        orgChart = parseFile(entryPath, entry.name);
      }
    } else if (entry.isDirectory()) {
      const section = buildSection(entryPath, entry.name);
      if (/RAHBARIYAT/i.test(entry.name)) {
        leadership = section;
      } else {
        departments.push(section);
      }
    }
  }

  departments.sort((a, b) => a.id.localeCompare(b.id));

  cache = { orgChart, leadership, departments };
  return cache;
}

export function findDocById(id: string): AgentDoc | null {
  const data = getDashboardData();
  const all: AgentDoc[] = [];

  function walk(section: SectionNode) {
    if (section.index) all.push(section.index);
    all.push(...section.docs);
    section.children.forEach(walk);
  }

  if (data.leadership) walk(data.leadership);
  data.departments.forEach(walk);
  if (data.orgChart) all.push(data.orgChart);

  return all.find((d) => d.id === id) || null;
}
