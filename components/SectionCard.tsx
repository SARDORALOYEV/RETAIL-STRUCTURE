"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Bot, Folder, Info } from "lucide-react";
import type { SectionNode, AgentDoc } from "@/lib/obsidian";
import { countAgents } from "@/lib/tree";
import { deptTitle, stripLeadingEmoji } from "@/lib/deptMeta";
import { iconForDept } from "@/components/DeptIcon";
import { cn, paletteFor } from "@/lib/utils";

type SelectHandler = (doc: AgentDoc, sectionName: string, colorIndex: number) => void;

function AgentRow({
  doc,
  sectionName,
  colorIndex,
  onSelectAgent,
}: {
  doc: AgentDoc;
  sectionName: string;
  colorIndex: number;
  onSelectAgent: SelectHandler;
}) {
  const status = String(doc.frontmatter.status || "");
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSelectAgent(doc, sectionName, colorIndex);
      }}
      className="w-full flex items-center gap-2.5 px-2 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left group"
    >
      <span
        className={cn(
          "w-2 h-2 rounded-full shrink-0",
          status === "active" ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"
        )}
      />
      <Bot className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
      <span className="min-w-0 flex-1 text-sm text-gray-700 dark:text-gray-300 truncate group-hover:text-gray-900 dark:group-hover:text-white">
        {stripLeadingEmoji(doc.title)}
      </span>
    </button>
  );
}

function NestedGroup({
  node,
  sectionName,
  colorIndex,
  depth,
  onSelectAgent,
}: {
  node: SectionNode;
  sectionName: string;
  colorIndex: number;
  depth: number;
  onSelectAgent: SelectHandler;
}) {
  const [open, setOpen] = useState(false);
  const total = countAgents(node);
  const palette = paletteFor(colorIndex);

  return (
    <div className="border-l border-gray-200 dark:border-gray-800" style={{ marginLeft: depth * 10 }}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
      >
        {open ? (
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
        )}
        <Folder className={cn("w-3.5 h-3.5 shrink-0", palette.text)} />
        <span className="min-w-0 flex-1 text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
          {node.displayName}
        </span>
        <span className="text-[11px] text-gray-400 dark:text-gray-500 shrink-0">{total}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-1 py-1 divide-y divide-gray-100 dark:divide-gray-800/60">
              {total === 0 && (
                <p className="px-2 py-2 text-xs text-gray-400 dark:text-gray-500">Sub-agent topilmadi</p>
              )}
              {node.docs.map((doc) => (
                <AgentRow
                  key={doc.id}
                  doc={doc}
                  sectionName={sectionName}
                  colorIndex={colorIndex}
                  onSelectAgent={onSelectAgent}
                />
              ))}
              {node.children.map((child) => (
                <NestedGroup
                  key={child.id}
                  node={child}
                  sectionName={sectionName}
                  colorIndex={colorIndex}
                  depth={depth + 1}
                  onSelectAgent={onSelectAgent}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface Props {
  section: SectionNode;
  colorIndex: number;
  onSelectAgent: SelectHandler;
  index: number;
}

export default function SectionCard({ section, colorIndex, onSelectAgent, index }: Props) {
  const palette = paletteFor(colorIndex);
  const total = countAgents(section);
  const Icon = iconForDept(section.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className={cn(
        "h-full flex flex-col rounded-2xl border bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden",
        palette.border
      )}
    >
      <div className="w-full flex items-center justify-between gap-3 px-5 py-4">
        <div className="min-w-0 flex-1 flex items-center gap-3">
          <span className={cn("flex items-center justify-center w-9 h-9 rounded-lg shrink-0", palette.bg)}>
            <Icon className={cn("w-[18px] h-[18px]", palette.text)} />
          </span>
          <span className="min-w-0 flex-1">
            <span className={cn("block text-[11px] font-semibold tracking-wide uppercase", palette.text)}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-bold tracking-tight text-gray-900 dark:text-white text-base truncate">
              {deptTitle(section)}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{total} sub-agent</p>
          </span>
        </div>
        {section.index && (
          <button
            onClick={() => onSelectAgent(section.index!, deptTitle(section), colorIndex)}
            title="Bo'lim haqida batafsil"
            className={cn(
              "p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shrink-0",
              palette.text
            )}
          >
            <Info className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800">
        <div
          data-lenis-prevent
          className="px-3 py-2 divide-y divide-gray-100 dark:divide-gray-800/60 max-h-[420px] overflow-y-auto no-scrollbar"
        >
          {total === 0 && (
            <p className="px-2 py-3 text-xs text-gray-400 dark:text-gray-500">Sub-agent topilmadi</p>
          )}
          {section.docs.map((doc) => (
            <AgentRow
              key={doc.id}
              doc={doc}
              sectionName={section.displayName}
              colorIndex={colorIndex}
              onSelectAgent={onSelectAgent}
            />
          ))}
          {section.children.map((child) => (
            <NestedGroup
              key={child.id}
              node={child}
              sectionName={section.displayName}
              colorIndex={colorIndex}
              depth={1}
              onSelectAgent={onSelectAgent}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
