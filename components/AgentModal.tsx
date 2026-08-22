"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ClipboardList, Workflow, ArrowLeftRight, Link2, Bot } from "lucide-react";
import type { AgentDoc } from "@/lib/obsidian";
import type { DocIndex } from "@/lib/tree";
import { deriveAgentFields } from "@/lib/agentFields";
import { stripLeadingEmoji } from "@/lib/deptMeta";
import { humanizeName } from "@/lib/markdownPrep";
import { cn, paletteFor, SEMANTIC } from "@/lib/utils";
import Markdown from "@/components/Markdown";
import WorkflowFlow from "@/components/WorkflowFlow";

interface Props {
  doc: AgentDoc | null;
  sectionName: string;
  colorIndex: number;
  docsIndex: DocIndex;
  onNavigate: (doc: AgentDoc) => void;
  onClose: () => void;
}

function Block({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 px-4 py-3.5">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-2">
        <Icon className="w-4 h-4" />
        {label}
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300 break-words leading-relaxed">{children}</div>
    </div>
  );
}

function LinkBadges({
  items,
  tone,
  docsIndex,
  onNavigate,
}: {
  items: string[];
  tone: string;
  docsIndex: DocIndex;
  onNavigate: (doc: AgentDoc) => void;
}) {
  if (!items.length)
    return (
      <span className="text-sm text-gray-400 dark:text-gray-500">
        Vault ma&apos;lumotida ko&apos;rsatilmagan
      </span>
    );
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => {
        const target = docsIndex.get(item.toLowerCase());
        return (
          <button
            key={item}
            type="button"
            disabled={!target}
            onClick={() => target && onNavigate(target)}
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs transition-colors",
              tone,
              target ? "hover:brightness-95 dark:hover:brightness-125 cursor-pointer" : "opacity-60 cursor-default"
            )}
          >
            <Link2 className="w-3 h-3" />
            {humanizeName(item)}
          </button>
        );
      })}
    </div>
  );
}

export default function AgentModal({
  doc,
  sectionName,
  colorIndex,
  docsIndex,
  onNavigate,
  onClose,
}: Props) {
  const palette = paletteFor(colorIndex);
  const fields = doc ? deriveAgentFields(doc) : null;
  const isActive = fields?.statusLabel?.includes("ishlamoqda");

  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [doc, onClose]);

  return (
    <AnimatePresence>
      {doc && fields && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="w-full max-w-2xl max-h-[88vh] overflow-y-auto no-scrollbar rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl"
          >
            <div className="sticky top-0 z-10 px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{sectionName}</div>
              <div className="flex items-center gap-3 pr-8">
                <span className={cn("flex items-center justify-center w-9 h-9 rounded-lg shrink-0", palette.bg)}>
                  <Bot className={cn("w-[18px] h-[18px]", palette.text)} />
                </span>
                <h2 className="font-bold tracking-tight text-gray-900 dark:text-white text-xl min-w-0 truncate">
                  {stripLeadingEmoji(fields.title)}
                </h2>
              </div>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-full text-xs font-medium",
                  isActive ? SEMANTIC.success : SEMANTIC.neutral
                )}
              >
                <span className={cn("w-1.5 h-1.5 rounded-full", isActive ? "bg-emerald-500 animate-pulse" : "bg-gray-400")} />
                {fields.statusLabel}
              </span>
            </div>

            <div className="px-6 py-5 space-y-4">
              <Block icon={ClipboardList} label="Vazifasi">
                <Markdown
                  content={fields.vazifaToliq}
                  accentText={palette.text}
                  docsIndex={docsIndex}
                  onNavigate={onNavigate}
                  stripH1
                />
              </Block>

              {(fields.workflowText || fields.workflow.length > 0) && (
                <Block icon={Workflow} label="Tizim Zanjiri (Workflow)">
                  {fields.workflowText ? (
                    <Markdown
                      content={fields.workflowText}
                      accentText={palette.text}
                      docsIndex={docsIndex}
                      onNavigate={onNavigate}
                    />
                  ) : (
                    <WorkflowFlow edges={fields.workflow} tone={cn(palette.bg, palette.text)} />
                  )}
                </Block>
              )}

              <Block icon={ArrowLeftRight} label="ERP Ma'lumotlar Almashinuvi">
                {fields.erpTable ? (
                  <Markdown
                    content={fields.erpTable}
                    accentText={palette.text}
                    docsIndex={docsIndex}
                    onNavigate={onNavigate}
                  />
                ) : (
                  <div className="space-y-3">
                    <div>
                      <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
                        Kiruvchi
                      </div>
                      <LinkBadges
                        items={fields.erpInputs}
                        tone={SEMANTIC.success}
                        docsIndex={docsIndex}
                        onNavigate={onNavigate}
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
                        Chiquvchi
                      </div>
                      <LinkBadges
                        items={fields.erpOutputs}
                        tone="bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400"
                        docsIndex={docsIndex}
                        onNavigate={onNavigate}
                      />
                    </div>
                  </div>
                )}
              </Block>

              <Block icon={Link2} label="Bog'liq Agentlar">
                <LinkBadges
                  items={fields.kompaniyadagiOrni}
                  tone="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  docsIndex={docsIndex}
                  onNavigate={onNavigate}
                />
              </Block>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
