const MOJIBAKE_FIXES: [RegExp, string][] = [
  [/ERP\s*输入/gi, "ERP Kiruvchi (Inputs)"],
  [/ERP\s*输出/gi, "ERP Chiquvchi (Outputs)"],
  [/输入/g, "Kiruvchi"],
  [/输出/g, "Chiquvchi"],
];

const EMOJI_RE = /[\p{Extended_Pictographic}‍️]/gu;

/** Strip the leading H1 (already shown as the modal's own title). */
export function stripLeadingH1(content: string): string {
  return content.replace(/^#\s+[^\n]*\n?/, "").trim();
}

/** Turn a raw file/node identifier into a clean, human-readable label. */
export function humanizeName(raw: string): string {
  return raw
    .replace(EMOJI_RE, "")
    .replace(/^\d+_/, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Remove every fenced ``` code block (mermaid or otherwise) from the text. */
export function stripCodeFences(content: string): string {
  return content.replace(/```[\s\S]*?```/g, "").trim();
}

export interface WorkflowEdge {
  from: string;
  to: string;
  label?: string;
}

/** Parse every ```mermaid flowchart/graph block in the content into clean from->to edges. */
export function parseWorkflowEdges(content: string): WorkflowEdge[] {
  const blocks = [...content.matchAll(/```mermaid\n([\s\S]*?)```/g)].map((m) => m[1]);
  if (!blocks.length) return [];

  const nodeLabels = new Map<string, string>();
  const edges: WorkflowEdge[] = [];
  const seen = new Set<string>();

  // NOTE: bracket.source is an alternation (a|b|c) with lower precedence than
  // concatenation, so every embed below MUST wrap it in a non-capturing group —
  // otherwise anchors like `$` only bind to the last alternative.
  const bracket = /\[([^\]]+)\]|\(([^)]+)\)|\{([^}]+)\}/;
  const nodeDefRe = new RegExp(`^([A-Za-z0-9_]+)\\s*(?:${bracket.source})\\s*$`);
  const edgeRe = new RegExp(
    `^([A-Za-z0-9_]+)(?:\\s*(?:${bracket.source}))?\\s*-{1,3}>(?:\\|([^|]+)\\|)?\\s*([A-Za-z0-9_]+)(?:\\s*(?:${bracket.source}))?`
  );

  const labelOf = (id: string, groups: (string | undefined)[]) => {
    const bracketLabel = groups.find((g) => g);
    const label = bracketLabel ? humanizeName(bracketLabel) : nodeLabels.get(id) || humanizeName(id);
    if (bracketLabel) nodeLabels.set(id, humanizeName(bracketLabel));
    return label;
  };

  for (const block of blocks) {
    for (const rawLine of block.split("\n")) {
      const line = rawLine.trim();
      if (!line || line.startsWith("%%") || /^(graph|flowchart)\b/i.test(line)) continue;

      const nodeDefMatch = line.match(nodeDefRe);
      if (nodeDefMatch) {
        const [, id, b1, b2, b3] = nodeDefMatch;
        nodeLabels.set(id, humanizeName(b1 || b2 || b3 || id));
        continue;
      }

      const edgeMatch = line.match(edgeRe);
      if (edgeMatch) {
        const [, fromId, fb1, fb2, fb3, edgeLabel, toId, tb1, tb2, tb3] = edgeMatch;
        const from = labelOf(fromId, [fb1, fb2, fb3]);
        const to = labelOf(toId, [tb1, tb2, tb3]);
        const key = `${from}→${to}`;
        if (!seen.has(key) && from !== to) {
          seen.add(key);
          edges.push({ from, to, label: edgeLabel ? humanizeName(edgeLabel) : undefined });
        }
      }
    }
  }

  return edges;
}

/** Fix known mojibake/garbled sequences and turn [[Wikilinks]] into real markdown links. */
export function prepMarkdown(content: string): string {
  let out = stripCodeFences(content);
  for (const [re, replacement] of MOJIBAKE_FIXES) out = out.replace(re, replacement);

  out = out.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_m, name: string, label?: string) => {
    const clean = name.trim();
    const text = humanizeName(label || clean);
    return `[${text}](wikilink://${encodeURIComponent(clean)})`;
  });

  return out;
}
