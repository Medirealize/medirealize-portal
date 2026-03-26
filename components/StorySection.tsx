import { ArrowUpRight, MessageCircleMore } from "lucide-react";

const NOTE_STORY_URL = "https://note.com/medirealize_note";
const X_DM_URL = "https://x.com/med_structure";

export default function StorySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-2" aria-label="信頼と共感のストーリー">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            Story
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
            なぜ、外科医がコードを書くのか
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            15年のキャリア、ボストンでの研究、そして宮崎での再挑戦。医療の現場で何度も直面した「構造の限界」を、AIでハックするために。現場で見えていた痛みを、プロダクトへ変換しています。
          </p>
          <a
            href={NOTE_STORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80"
          >
            noteでストーリーを読む
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>

        <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            Recruit
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
            共犯者（参謀）募集
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            この狂気をロジックに変える右腕を探しています。医療の現場理解と、実装をつなげる挑戦に興味がある方は、ぜひ声をかけてください。
          </p>
          <a
            href={X_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80"
          >
            X（旧Twitter）でDMを送る
            <MessageCircleMore className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}

