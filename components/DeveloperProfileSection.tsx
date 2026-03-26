import Image from "next/image";

export default function DeveloperProfileSection() {
  return (
    <section
      className="border-t border-gray-100 bg-white py-12 sm:py-14"
      aria-label="Developer Profile"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
        <div className="flex shrink-0 justify-center sm:justify-start">
          <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-gray-200 sm:h-20 sm:w-20">
            <Image
              src="/nomura-profile.png"
              alt="野村信介"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 640px) 64px, 80px"
              priority={false}
            />
          </div>
        </div>

        <div className="mt-5 min-w-0 sm:mt-0">
          <p className="text-sm leading-relaxed text-gray-600 sm:text-[0.9375rem]">
            診察室の「言えない」を、言葉に。現役の医師として、日々の診療で見つけた課題をテクノロジーで解決することを目指しています。
          </p>
          <p className="mt-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
            メディリアライズ 代表社員 / 医師 野村信介
          </p>
        </div>
      </div>
    </section>
  );
}
