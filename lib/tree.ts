import type { AgentDoc, DashboardData, SectionNode } from "@/lib/obsidian";

export interface FlatAgent {
  doc: AgentDoc;
  groupLabel: string | null;
}

export function flattenAgents(section: SectionNode, topLevel = true): FlatAgent[] {
  const out: FlatAgent[] = [];
  for (const d of section.docs) {
    out.push({ doc: d, groupLabel: topLevel ? null : section.displayName });
  }
  for (const child of section.children) {
    out.push(...flattenAgents(child, false));
  }
  return out;
}

export function countAgents(section: SectionNode): number {
  return (
    section.docs.length +
    section.children.reduce((sum, c) => sum + countAgents(c), 0)
  );
}

function collectAllDocs(section: SectionNode, out: AgentDoc[]) {
  if (section.index) out.push(section.index);
  out.push(...section.docs);
  section.children.forEach((c) => collectAllDocs(c, out));
}

export function allDocsFlat(data: DashboardData): AgentDoc[] {
  const out: AgentDoc[] = [];
  if (data.leadership) collectAllDocs(data.leadership, out);
  data.departments.forEach((d) => collectAllDocs(d, out));
  if (data.orgChart) out.push(data.orgChart);
  return out;
}

export type DocIndex = Map<string, AgentDoc>;

export function buildDocIndex(docs: AgentDoc[]): DocIndex {
  const map: DocIndex = new Map();
  for (const doc of docs) {
    const keys = [doc.fileName, ...((doc.frontmatter.aliases as string[]) || [])];
    for (const key of keys) {
      if (key) map.set(key.toLowerCase(), doc);
    }
  }
  return map;
}

export interface DocMeta {
  sectionName: string;
  colorIndex: number;
}

export type DocMetaIndex = Map<string, DocMeta>;

function collectDocMeta(
  section: SectionNode,
  colorIndex: number,
  sectionName: string,
  out: DocMetaIndex
) {
  if (section.index) out.set(section.index.id, { sectionName, colorIndex });
  for (const d of section.docs) out.set(d.id, { sectionName, colorIndex });
  for (const child of section.children) collectDocMeta(child, colorIndex, sectionName, out);
}

export function buildDocMetaIndex(
  data: DashboardData,
  colorIndexFor: (section: SectionNode) => number
): DocMetaIndex {
  const out: DocMetaIndex = new Map();
  if (data.leadership) collectDocMeta(data.leadership, 6, "Rahbariyat", out);
  for (const dept of data.departments) {
    collectDocMeta(dept, colorIndexFor(dept), dept.displayName, out);
  }
  return out;
}
