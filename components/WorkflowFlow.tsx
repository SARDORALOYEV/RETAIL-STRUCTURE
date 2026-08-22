"use client";

import { ArrowRight } from "lucide-react";
import type { WorkflowEdge } from "@/lib/markdownPrep";
import { cn } from "@/lib/utils";

function NodeBadge({ text, tone }: { text: string; tone: string }) {
  return (
    <span className={cn("px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap", tone)}>
      {text}
    </span>
  );
}

export default function WorkflowFlow({
  edges,
  tone,
}: {
  edges: WorkflowEdge[];
  tone: string;
}) {
  if (!edges.length) return null;

  return (
    <div className="space-y-2">
      {edges.map((edge, i) => (
        <div key={`${edge.from}-${edge.to}-${i}`} className="flex flex-col gap-1">
          {edge.label && (
            <span className="text-[11px] text-gray-400 dark:text-gray-500 pl-1">{edge.label}</span>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            <NodeBadge text={edge.from} tone={tone} />
            <ArrowRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 shrink-0" />
            <NodeBadge text={edge.to} tone={tone} />
          </div>
        </div>
      ))}
    </div>
  );
}
