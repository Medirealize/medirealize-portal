import {
  DEVLOG_VIEWER_LAST_UPDATED,
  DEVLOG_VIEWER_LAST_UPDATED_ISO,
} from "@/lib/productLeadContent";

type Props = {
  className?: string;
};

export default function DevLogViewerLastUpdatedLabel({ className }: Props) {
  return (
    <p
      className={`flex items-center justify-center gap-1.5 font-mono text-[10px] tabular-nums text-slate-500 sm:text-xs ${className ?? ""}`}
    >
      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" aria-hidden />
      <time dateTime={DEVLOG_VIEWER_LAST_UPDATED_ISO}>
        {DEVLOG_VIEWER_LAST_UPDATED} 更新
      </time>
    </p>
  );
}
