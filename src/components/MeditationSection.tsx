
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Pause, Play } from "lucide-react";

export const MeditationSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [breathePhase, setBreathePhase] = useState<"in" | "out" | "hold">("in");
  const intervalRef = useRef<number>();
  const breatheIntervalRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (breatheIntervalRef.current) clearInterval(breatheIntervalRef.current);
    };
  }, []);

  const toggleTimer = () => {
    if (isActive) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (breatheIntervalRef.current) clearInterval(breatheIntervalRef.current);
    } else {
      // Start meditation timer
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (breatheIntervalRef.current) clearInterval(breatheIntervalRef.current);
            setIsActive(false);
            return 300;
          }
          return prevTime - 1;
        });
      }, 1000);

      // Start breathing cycle
      let phase = 0;
      breatheIntervalRef.current = window.setInterval(() => {
        phase = (phase + 1) % 12; // 4s breathe in, 4s hold, 4s breathe out
        if (phase === 0) setBreathePhase("in");
        else if (phase === 4) setBreathePhase("hold");
        else if (phase === 8) setBreathePhase("out");
      }, 1000);
    }
    setIsActive(!isActive);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getBreatheText = () => {
    switch (breathePhase) {
      case "in":
        return "Breathe In";
      case "hold":
        return "Hold";
      case "out":
        return "Breathe Out";
    }
  };

  const getBreatheAnimation = () => {
    switch (breathePhase) {
      case "in":
        return "scale-110 transition-transform duration-[4000ms]";
      case "hold":
        return "scale-110 transition-transform duration-[4000ms]";
      case "out":
        return "scale-100 transition-transform duration-[4000ms]";
    }
  };

  return (
    <Card className="p-6 bg-wellness-cream/80 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-wellness-charcoal mb-6">Meditation</h2>
      <div className="flex flex-col items-center gap-6">
        <div className="text-6xl font-light text-wellness-charcoal">
          {formatTime(time)}
        </div>
        {isActive && (
          <div className={`text-2xl font-light text-wellness-charcoal ${getBreatheAnimation()}`}>
            {getBreatheText()}
          </div>
        )}
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
