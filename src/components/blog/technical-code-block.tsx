"use client";

import * as React from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface TechnicalCodeBlockProps {
  code: string;
  language: string;
  filePath?: string;
}

export function TechnicalCodeBlock({ code, language, filePath }: TechnicalCodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-surface border border-border rounded-lg overflow-hidden font-mono shadow-xl my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-background border-b border-border text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-neon" />
          <span className="font-medium">{filePath || `snippet.${language}`}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 hover:text-neon transition-colors focus:outline-none rounded px-1.5 py-0.5"
          aria-label="Copy code snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="font-semibold">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed text-foreground">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
