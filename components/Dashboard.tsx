"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Bot, ChevronsDown, ChevronsUp } from "lucide-react";
import type { DashboardData, AgentDoc } from "@/lib/obsidian";
import {
  flattenAgents,
  countAgents,
  allDocsFlat,
  buildDocIndex,
  buildDocMetaIndex,
} from "@/lib/tree";
import { deptLeader, stripLeadingEmoji } from "@/lib/deptMeta";
import { paletteFor, cn } from "@/lib/utils";
import SectionCard, { type ExpandSignal } from "@/components/SectionCard";
import AgentModal from "@/components/AgentModal";

interface Selected {
  doc: AgentDoc;
  sectionName: string;
  colorIndex: number;
}

export default function Dashboard({ data }: { data: DashboardData }) {
  const [selected, setSelected] = useState<Selected | null>(null);
  const [expandSignal, setExpandSignal] = useState<ExpandSignal | null>(null);

  const leadershipAgents = useMemo(
    () => (data.leadership ? flattenAgents(data.leadership) : []),
    [data.leadership]
  );

  const ceo = leadershipAgents.find((a) => /^ceo$/i.test(a.doc.fileName));
  const orchestrator = leadershipAgents.find((a) =>
    /yordamchi|orchestrator|coo/i.test(a.doc.fileName)
  );

  const DEPT_COLOR_OVERRIDES: [RegExp, number][] = [
    [/Ishlab_Chiqarish/i, 0], // green/emerald
    [/Sotuv/i, 2], // blue
    [/KOMRON_Moliya/i, 6], // amber
    [/KOMRON_Analitika/i, 4], // teal
    [/ABDUVORIS_Sklad/i, 1], // orange
    [/ABDUVORIS_Marketing/i, 9], // rose
    [/ABDULLOH_Legal/i, 3], // purple
    [/KAMRON_HR_Departamenti/i, 8], // indigo
    [/KAMRON_Logistika/i, 11], // sky
    [/KAMRON_Taminot/i, 5], // pink
  ];

  const heads = data.departments.map((d, i) => {
    const override = DEPT_COLOR_OVERRIDES.find(([re]) => re.test(d.id));
    return {
      section: d,
      leader: deptLeader(d),
      colorIndex: override ? override[1] : i,
    };
  });

  const uniqueLeaders = Array.from(
    new Map(heads.map((h) => [h.leader, h])).values()
  );

  const largestSectionId = heads.reduce(
    (best, h) => {
      const total = countAgents(h.section);
      return total > best.total ? { id: h.section.id, total } : best;
    },
    { id: "", total: -1 }
  ).id;

  const colorIndexById = new Map(heads.map((h) => [h.section.id, h.colorIndex]));

  const docsIndex = useMemo(() => buildDocIndex(allDocsFlat(data)), [data]);
  const docMetaIndex = useMemo(
    () => buildDocMetaIndex(data, (section) => colorIndexById.get(section.id) ?? 0),
    [data]
  );

  const handleNavigate = (doc: AgentDoc) => {
    const meta = docMetaIndex.get(doc.id);
    setSelected({
      doc,
      sectionName: meta?.sectionName ?? doc.title,
      colorIndex: meta?.colorIndex ?? 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
        <header className="space-y-6">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            AI Agent Dashboard — Retail Structure
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => ceo && setSelected({ doc: ceo.doc, sectionName: "Rahbariyat", colorIndex: 0 })}
            className="cursor-pointer mx-auto max-w-md rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-200 px-6 py-5 text-center"
          >
            <div className="inline-flex p-2 bg-amber-50 dark:bg-amber-500/10 rounded-lg mb-2">
              <Crown className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="font-bold tracking-tight text-gray-900 dark:text-white text-lg">
              {ceo ? stripLeadingEmoji(ceo.doc.title) : "CEO — Bosh Direktor"}
            </div>
            <div className="text-sm text-muted-foreground text-gray-500 dark:text-gray-400 mt-0.5">CEO AI</div>
          </motion.div>

          <div className="flex justify-center my-2">
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            onClick={() =>
              orchestrator &&
              setSelected({ doc: orchestrator.doc, sectionName: "Rahbariyat", colorIndex: 3 })
            }
            className="cursor-pointer mx-auto max-w-lg rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 px-6 py-5 text-center"
          >
            <div className="inline-flex p-2 bg-violet-50 dark:bg-violet-500/10 rounded-lg mb-2">
              <Bot className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </div>
            <div className="font-bold tracking-tight text-gray-900 dark:text-white text-lg">
              {orchestrator ? stripLeadingEmoji(orchestrator.doc.title) : "Ijrochi Sun'iy Intellekt"}
            </div>
            <div className="text-sm text-muted-foreground text-gray-500 dark:text-gray-400 mt-0.5">Chief AI Officer</div>
          </motion.div>

          <div className="flex justify-center my-2">
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
          >
            {uniqueLeaders.map(({ leader, colorIndex }) => {
              const palette = paletteFor(colorIndex);
              return (
                <span
                  key={leader}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold border border-transparent",
                    palette.bg,
                    palette.text
                  )}
                >
                  {leader}
                </span>
              );
            })}
          </motion.div>
        </header>

        <main>
          <div className="flex items-center justify-end gap-2 mb-3">
            <button
              onClick={() => setExpandSignal({ action: "expand", token: Date.now() })}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronsDown className="w-3.5 h-3.5" />
              Barchasini yoyish
            </button>
            <button
              onClick={() => setExpandSignal({ action: "collapse", token: Date.now() })}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronsUp className="w-3.5 h-3.5" />
              Barchasini yig'ish
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {heads.map(({ section, colorIndex }, i) => (
              <SectionCard
                key={section.id}
                section={section}
                colorIndex={colorIndex}
                index={i}
                defaultOpen={section.id === largestSectionId}
                expandSignal={expandSignal}
                onSelectAgent={(doc, sectionName, ci) =>
                  setSelected({ doc, sectionName, colorIndex: ci })
                }
              />
            ))}
          </div>
        </main>
      </div>

      <AgentModal
        doc={selected?.doc ?? null}
        sectionName={selected?.sectionName ?? ""}
        colorIndex={selected?.colorIndex ?? 0}
        docsIndex={docsIndex}
        onNavigate={handleNavigate}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
