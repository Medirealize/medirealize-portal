import { CONTACT_GOOGLE_FORM_URL } from "@/lib/socialLinks";

export default function VoiceInputSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl justify-center px-3 pb-10 pt-2 sm:px-4 sm:pb-12">
      <div className="w-full max-w-xl rounded-xl border border-[#DADDE1] bg-white px-5 py-6 shadow-[0_1px_2px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7">
        <h3 className="text-center text-base font-bold leading-snug tracking-tight text-[#050505] text-balance sm:text-lg">
          あなたの言葉を、聞かせてください。
        </h3>
        <p className="mt-3 text-center text-sm leading-relaxed text-[#65676B] sm:text-[0.9375rem]">
          協業・参謀のご相談は、ページ下部の
          <strong className="font-semibold text-[#050505]"> Recruit </strong>
          から
          <strong className="font-semibold text-[#050505]"> Facebook Messenger </strong>
          へお願いします。Facebook をお持ちでない場合のみ、
          <a
            href={CONTACT_GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1877F2] underline decoration-[#1877F2]/35 underline-offset-2 hover:decoration-[#1877F2]"
          >
            お問い合わせフォーム
          </a>
          からも受け付けています。
        </p>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-[#8A8D91] sm:text-xs">
          ※個別の診療相談にはお答えできません
        </p>
      </div>
    </section>
  );
}
