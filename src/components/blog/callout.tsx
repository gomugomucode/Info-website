import { AlertCircle, CheckCircle, Info, ShieldAlert } from "lucide-react";
import { ReactNode } from "react";

type CalloutType = "info" | "tip" | "warning" | "danger";

interface CalloutProps {
  children: ReactNode;
  type?: CalloutType;
  title?: string;
}

const calloutStyles: Record<CalloutType, { container: string; icon: any; iconColor: string }> = {
  info: {
    container: "bg-blue-50/50 border-blue-200 text-blue-900 dark:bg-blue-950/20 dark:border-blue-900/50 dark:text-blue-200",
    icon: Info,
    iconColor: "text-blue-500",
  },
  tip: {
    container: "bg-emerald-50/50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-200",
    icon: CheckCircle,
    iconColor: "text-emerald-500",
  },
  warning: {
    container: "bg-amber-50/50 border-amber-200 text-amber-900 dark:bg-amber-950/20 dark:border-amber-900/50 dark:text-amber-200",
    icon: AlertCircle,
    iconColor: "text-amber-500",
  },
  danger: {
    container: "bg-red-50/50 border-red-200 text-red-900 dark:bg-red-950/20 dark:border-red-900/50 dark:text-red-200",
    icon: ShieldAlert,
    iconColor: "text-red-500",
  },
};

export function Callout({ children, type = "info", title }: CalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div className={`my-6 flex gap-4 rounded-xl border p-4 text-sm leading-relaxed ${style.container}`}>
      <Icon className={`h-5 w-5 shrink-0 ${style.iconColor}`} />
      <div className="flex-1">
        {title && <h5 className="font-bold mb-1">{title}</h5>}
        <div className="prose-sm">{children}</div>
      </div>
    </div>
  );
}
export default Callout;
