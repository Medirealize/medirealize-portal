import ProductLeadSection from "@/components/ProductLeadSection";
import DeveloperThoughtFooter from "@/components/DeveloperThoughtFooter";
import VoiceInputSection from "@/components/VoiceInputSection";
import DeveloperProfileSection from "@/components/DeveloperProfileSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8FB] text-slate-900 flex flex-col">
      <main className="flex-1">
        <ProductLeadSection />
        <VoiceInputSection />
        <DeveloperProfileSection />
      </main>
      <DeveloperThoughtFooter />
    </div>
  );
}
