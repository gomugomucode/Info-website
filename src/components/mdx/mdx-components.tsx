import React from 'react';
import { Pre } from "@/components/blog/pre";
import { Callout } from "@/components/blog/callout";
import { TerminalCommand } from "@/components/blog/terminal-command";

export const MDXComponents = {
  h1: (props: any) => <h1 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight lg:text-4xl text-neutral-900 dark:text-white" {...props} />,
  h2: (props: any) => <h2 className="mt-10 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800 text-2xl font-semibold tracking-tight transition-colors scroll-m-20 text-neutral-900 dark:text-neutral-50" {...props} />,
  h3: (props: any) => <h3 className="mt-8 mb-4 text-xl font-semibold tracking-tight scroll-m-20 text-neutral-900 dark:text-neutral-100" {...props} />,
  p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-4 text-neutral-700 dark:text-neutral-300" {...props} />,
  ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-neutral-700 dark:text-neutral-300" {...props} />,
  ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-neutral-700 dark:text-neutral-300" {...props} />,
  li: (props: any) => <li {...props} />,
  blockquote: (props: any) => (
    <blockquote className="mt-6 border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 italic text-neutral-600 dark:text-neutral-400" {...props} />
  ),
  pre: Pre,
  code: (props: any) => {
    if (props["data-language"]) {
      return <code {...props} />;
    }
    return (
      <code className="relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200" {...props} />
    );
  },
  a: (props: any) => (
    <a className="font-medium text-cyan-600 underline underline-offset-4 hover:text-cyan-500 dark:text-cyan-400" {...props} />
  ),
  table: (props: any) => (
    <div className="my-8 w-full overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
      <table className="w-full text-sm text-left border-collapse" {...props} />
    </div>
  ),
  Callout,
  TerminalCommand,
};
