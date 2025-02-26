
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const ActionButtons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Button
        className="h-24 bg-wellness-mint hover:bg-wellness-sage transition-all flex items-center justify-center gap-3 text-lg"
        onClick={() => console.log("Yoga trainer clicked")}
      >
        <Heart className="w-6 h-6" />
        Yoga Trainer
      </Button>
      <Button
        className="h-24 bg-wellness-lavender hover:bg-wellness-lavender/80 transition-all flex items-center justify-center gap-3 text-lg"
        onClick={() => console.log("Stress levels clicked")}
      >
        <Heart className="w-6 h-6" />
        Check Stress Levels
      </Button>
    </div>
  );
};
