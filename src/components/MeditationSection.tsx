
import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Pause, Play } from "lucide-react";

export const MeditationSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const intervalRef = useRef<NodeJS.Timer>();

  const toggleTimer = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            setIsActive(false);
            return 300;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    setIsActive(!isActive);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="p-6 bg-wellness-cream/80 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-wellness-charcoal mb-6">Meditation</h2>
      <div className="flex flex-col items-center gap-6">
        <div className="text-6xl font-light text-wellness-charcoal animate-pulse-slow">
          {formatTime(time)}
        </div>
        <Button
          size="lg"
          className={`w-48 ${isActive ? "bg-wellness-lavender" : "bg-wellness-mint"}`}
          onClick={toggleTimer}
        >
          {isActive ? <Pause className="mr-2" /> : <Play className="mr-2" />}
          {isActive ? "Pause" : "Start"}
        </Button>
      </div>
    </Card>
  );
};
