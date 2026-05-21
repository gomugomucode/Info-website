import { CopyButton } from "./copy-button";
import { ReactElement, ReactNode } from "react";

export function Pre({
  children,
  raw,
  ...props
}: {
  children?: ReactNode;
  raw?: string;
  [key: string]: any;
}) {
  // Try to extract raw string from children if 'raw' prop isn't provided
  let text = raw || "";
  
  if (!text && children) {
    try {
      // In MDX, children of pre is often a code element
      const codeElement = children as ReactElement<any>;
      if (codeElement?.props?.children) {
        if (typeof codeElement.props.children === "string") {
          text = codeElement.props.children;
        } else if (Array.isArray(codeElement.props.children)) {
           // rehype-pretty-code structures it differently, usually lines
           text = ""; // Fallback handled by raw prop injection in MDX
        }
      }
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="relative group">
      {text && <CopyButton text={text} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
      <pre className="mb-4 mt-6 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-50 dark:bg-neutral-950" {...props}>
        {children}
      </pre>
    </div>
  );
}
