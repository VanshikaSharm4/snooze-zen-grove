
import { SleepSection } from "@/components/SleepSection";
import { MeditationSection } from "@/components/MeditationSection";
import { ActionButtons } from "@/components/ActionButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-sage to-wellness-cream p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-light text-wellness-charcoal text-center mb-12">
          <span className="text-sm uppercase tracking-wider block text-wellness-charcoal/70 mb-2">Welcome to</span>
          Swasthya
        </h1>
        
        <SleepSection />
        <MeditationSection />
        <ActionButtons />
      </div>
    </div>
  );
};

export default Index;
