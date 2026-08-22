"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { Link2 } from "lucide-react";
import type { AgentDoc } from "@/lib/obsidian";
import type { DocIndex } from "@/lib/tree";
import { prepMarkdown, stripLeadingH1 } from "@/lib/markdownPrep";
import { cn } from "@/lib/utils";

interface Props {
  content: string;
  accentText: string;
  docsIndex?: DocIndex;
  onNavigate?: (doc: AgentDoc) => void;
  stripH1?: boolean;
}

export default function Markdown({
  content,
  accentText,
  docsIndex,
  onNavigate,
  stripH1 = false,
}: Props) {
  const source = prepMarkdown(stripH1 ? stripLeadingH1(content) : content);

  const components: Components = {
    h1: ({ children }) => (
      <h1 className={cn("text-lg font-bold mt-4 mb-2 first:mt-0", accentText)}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={cn("text-base font-bold mt-4 mb-2 first:mt-0", accentText)}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-sm font-bold mt-3 mb-1.5 text-gray-900 dark:text-white">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2.5">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-2.5 pl-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-2.5 pl-1">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="marker:text-gray-300 dark:marker:text-gray-600">{children}</li>,
    strong: ({ children }) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="rounded-lg bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-3 text-xs text-gray-600 dark:text-gray-400 font-mono overflow-x-auto mb-2.5 no-scrollbar">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-gray-200 dark:border-gray-800 my-3" />,
    table: ({ children }) => (
      <div className="overflow-x-auto no-scrollbar mb-3 rounded-lg border border-gray-200 dark:border-gray-800">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-100 dark:bg-gray-800/80">{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-gray-200 dark:border-gray-800/50 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="p-3 text-left font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 whitespace-nowrap">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="p-2.5 text-gray-600 dark:text-gray-300 align-top">{children}</td>
    ),
    a: ({ href, children }) => {
      if (href?.startsWith("wikilink://")) {
        const name = decodeURIComponent(href.replace("wikilink://", ""));
        const target = docsIndex?.get(name.toLowerCase());
        return (
          <button
            type="button"
            disabled={!target}
            onClick={() => target && onNavigate?.(target)}
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs align-middle mx-0.5 transition-colors",
              target
                ? "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-300"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-default"
            )}
          >
            <Link2 className="w-3 h-3" />
            {children}
          </button>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cn("underline underline-offset-2", accentText)}
        >
          {children}
        </a>
      );
    },
  };

  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
        urlTransform={(url) =>
          url.startsWith("wikilink://") || /^(https?:|mailto:)/i.test(url) ? url : ""
        }
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
