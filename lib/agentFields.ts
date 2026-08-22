import type { AgentDoc } from "@/lib/obsidian";
import { parseWorkflowEdges, stripCodeFences, type WorkflowEdge } from "@/lib/markdownPrep";

const NA = "Vault ma'lumotida ko'rsatilmagan";

function asString(v: unknown): string | null {
  if (v === undefined || v === null) return null;
  if (Array.isArray(v)) return v.join(", ");
  return String(v);
}

function asStringArray(v: unknown): string[] {
  if (v === undefined || v === null) return [];
  const arr = Array.isArray(v) ? v : [v];
  return arr.map((x) => String(x).replace(/\[\[|\]\]/g, "").trim()).filter(Boolean);
}

function section(content: string, heading: RegExp): string | null {
  const match = content.match(heading);
  if (!match) return null;
  const startIdx = match.index! + match[0].length;
  const rest = content.slice(startIdx);
  const nextHeading = rest.search(/\n#{1,3}\s/);
  const body = nextHeading === -1 ? rest : rest.slice(0, nextHeading);
  return body.trim() || null;
}

function wikilinksIn(text: string | null): string[] {
  if (!text) return [];
  return Array.from(text.matchAll(/\[\[([^\]|]+)/g)).map((m) => m[1].trim());
}

/** Short intro prose under the H1, before the first ## heading — used when there's no dedicated role section. */
function introText(content: string): string | null {
  const noH1 = content.replace(/^#\s+[^\n]*\n?/, "");
  const idx = noH1.search(/\n#{2,3}\s/);
  const body = idx === -1 ? noH1 : noH1.slice(0, idx);
  const cleaned = stripCodeFences(body).trim();
  return cleaned || null;
}

export interface CascadeInfo {
  trigger: string | null;
  action: string | null;
  escalateTo: string | null;
}

export interface AgentFields {
  title: string;
  statusLabel: string;
  createdAt: string;
  lavozimi: string;
  tajriba: string;
  bilimDarajasi: string;
  bozorQiymati: string;
  vazifaToliq: string;
  masuliyati: string;
  kompaniyadagiOrni: string[];
  erpInputs: string[];
  erpOutputs: string[];
  workflow: WorkflowEdge[];
  cascade: CascadeInfo | null;
  tizim: string;
  telegramBot: string | null;
  webDastur: string | null;
}

export function deriveAgentFields(doc: AgentDoc): AgentFields {
  const fm = doc.frontmatter as Record<string, unknown>;
  const status = asString(fm.status);

  const roleBody =
    section(doc.content, /##\s*[^\n]*Roll va Mas'uliyat[^\n]*/i) ||
    section(doc.content, /##\s*[^\n]*Vazifa(?:lari)?[^\n]*/i);

  const linksBody =
    section(doc.content, /##\s*[^\n]*Bog'liqliklar[^\n]*/i) ||
    section(doc.content, /##\s*[^\n]*Keyinchalik[^\n]*/i);

  const linkSet = new Set<string>();
  if (linksBody) {
    wikilinksIn(linksBody).forEach((l) => linkSet.add(l));
  } else {
    doc.wikilinks.forEach((l) => linkSet.add(l));
  }
  const parent = asString(fm.parent);
  if (parent) linkSet.add(parent.replace(/\[\[|\]\]/g, ""));

  let cascade: CascadeInfo | null = null;
  if (fm.cascade_rules && typeof fm.cascade_rules === "object") {
    const cr = fm.cascade_rules as Record<string, unknown>;
    cascade = {
      trigger: asString(cr.trigger),
      action: asString(cr.action),
      escalateTo: asString(cr.escalate_to)?.replace(/\[\[|\]\]/g, "") ?? null,
    };
  }

  const erpInputs = asStringArray(fm.inputs_from).length
    ? asStringArray(fm.inputs_from)
    : wikilinksIn(
        section(doc.content, /##\s*[^\n]*Kirish[^\n]*/i) ||
          section(doc.content, /##\s*[^\n]*ERP Kiruvchi[^\n]*/i)
      );

  const erpOutputs = asStringArray(fm.outputs_to).length
    ? asStringArray(fm.outputs_to)
    : wikilinksIn(
        section(doc.content, /##\s*[^\n]*Chiqish[^\n]*/i) ||
          section(doc.content, /##\s*[^\n]*ERP Chiquvchi[^\n]*/i)
      );

  return {
    title: doc.title,
    statusLabel:
      status === "active"
        ? "Yasab bo'lingan - ishlamoqda"
        : status || "Holat noma'lum",
    createdAt: asString(fm.created) || NA,
    lavozimi: asString(fm.role) || asString(fm.aliases) || doc.title,
    tajriba: asString(fm.experience) || asString(fm.tajriba) || NA,
    bilimDarajasi: asString(fm.education) || asString(fm.bilim_darajasi) || NA,
    bozorQiymati: asString(fm.market_value) || asString(fm.bozor_qiymati) || NA,
    vazifaToliq: roleBody || introText(doc.content) || NA,
    masuliyati: asString(fm.role) || NA,
    kompaniyadagiOrni: Array.from(linkSet),
    erpInputs,
    erpOutputs,
    workflow: parseWorkflowEdges(doc.content),
    cascade,
    tizim: asString(fm.tags) || NA,
    telegramBot: doc.telegramBot,
    webDastur: doc.webApp,
  };
}
