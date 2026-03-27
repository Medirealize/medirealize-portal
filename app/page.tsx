import ProductLeadSection from "@/components/ProductLeadSection";
import DeveloperThoughtFooter from "@/components/DeveloperThoughtFooter";
import VoiceInputSection from "@/components/VoiceInputSection";
import DeveloperProfileSection from "@/components/DeveloperProfileSection";
import StorySection from "@/components/StorySection";
import SiteHeader from "@/components/SiteHeader";
import { readDevLogEntries } from "@/lib/dev-log";

export default async function Home() {
  const entries = await readDevLogEntries();
  const devLogPreviewTitles = entries.slice(0, 3).map((e) => e.title);

  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[#F0F2F5] text-[#1C1E21]"
    >
      <SiteHeader />
      <main className="flex-1 pt-2 sm:pt-3">
        <section id="products">
          <ProductLeadSection devLogPreviewTitles={devLogPreviewTitles} />
        </section>
        <section id="voice">
          <VoiceInputSection />
        </section>
        <section id="profile">
          <DeveloperProfileSection />
        </section>
        <section id="story">
          <StorySection />
        </section>
      </main>
      <DeveloperThoughtFooter />
    </div>
  );
}
