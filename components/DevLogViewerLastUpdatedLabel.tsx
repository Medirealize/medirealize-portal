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
      className={`flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap text-[10px] text-[#65676B] sm:text-xs ${className ?? ""}`}
    >
      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" aria-hidden />
      <time
        dateTime={DEVLOG_VIEWER_LAST_UPDATED_ISO}
        className="inline-flex items-baseline gap-0 font-sans"
      >
        <span className="font-mono tabular-nums tracking-tight">{DEVLOG_VIEWER_LAST_UPDATED}</span>
        <span> 更新</span>
      </time>
    </p>
  );
}
