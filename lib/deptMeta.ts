import type { SectionNode } from "@/lib/obsidian";

const EMOJI_RE = /^[\p{Extended_Pictographic}‍️]+\s*/u;

export function deptEmoji(section: SectionNode): string | null {
  const title = section.index?.title || "";
  const m = title.match(EMOJI_RE);
  return m ? m[0].trim() : null;
}

export function deptTitle(section: SectionNode): string {
  const title = section.index?.title;
  if (!title) return section.displayName;
  return title.replace(EMOJI_RE, "").trim();
}

export function stripLeadingEmoji(text: string): string {
  return text.replace(EMOJI_RE, "").trim();
}

export function deptLeader(section: SectionNode): string {
  const content = section.index?.content || "";
  const rahbarMatch = content.match(/\*\*Rahbar:\*\*\s*([^\n]+)/i);
  if (rahbarMatch) return rahbarMatch[1].trim();

  const title = deptTitle(section);
  const dashMatch = title.match(/^([^\s—-]+)/);
  return dashMatch ? dashMatch[1] : section.displayName;
}
