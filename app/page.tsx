import ProductLeadSection from "@/components/ProductLeadSection";
import DeveloperThoughtFooter from "@/components/DeveloperThoughtFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8FB] text-slate-900 flex flex-col">
      <main className="flex-1">
        <ProductLeadSection />
      </main>
      <DeveloperThoughtFooter />
    </div>
  );
}
