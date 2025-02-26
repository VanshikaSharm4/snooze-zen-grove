
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const ActionButtons = () => {
  const handleYogaClick = () => {
    window.location.href = 'http://localhost:3000/';
  };

  const handleStressClick = () => {
    window.location.href = 'http://127.0.0.1:5500/swasth/quiz2.html';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Button 
        className="h-24 bg-wellness-mint hover:bg-wellness-sage transition-all flex items-center justify-center gap-3 text-lg"
        onClick={handleYogaClick}
      >
        <Heart className="w-6 h-6" />
        Yoga Trainer
      </Button>
      <Button
        className="h-24 bg-wellness-lavender hover:bg-wellness-lavender/80 transition-all flex items-center justify-center gap-3 text-lg"
        onClick={handleStressClick}
      >
        <Heart className="w-6 h-6" />
        Check Stress Levels
      </Button>
    </div>
  );
};
