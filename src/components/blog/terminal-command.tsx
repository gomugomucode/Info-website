"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

export function TerminalCommand({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy command:", e);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-neutral-950 px-4 py-3 font-mono text-sm text-neutral-200 border border-neutral-800 my-4 shadow-md">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
        <Terminal className="h-4.5 w-4.5 text-cyan-500 shrink-0" />
        <span className="select-all whitespace-nowrap">{cmd}</span>
      </div>
      <button
        onClick={handleCopy}
        className="rounded p-1.5 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer shrink-0"
        aria-label="Copy command"
      >
        {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
export default TerminalCommand;
