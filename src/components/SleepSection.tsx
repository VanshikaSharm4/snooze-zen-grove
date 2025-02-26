
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { sounds } from "@/lib/sounds";
import { Timer, Pause, Play, Volume2 } from "lucide-react";

export const SleepSection = () => {
  const [selectedSound, setSelectedSound] = useState(sounds[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [timer, setTimer] = useState(30);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    } else {
      audioRef.current.play();
      if (timer > 0) {
        timerRef.current = setTimeout(() => {
          audioRef.current?.pause();
          setIsPlaying(false);
        }, timer * 60 * 1000);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const changeSound = (sound: typeof sounds[0]) => {
    setSelectedSound(sound);
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <Card className="p-6 bg-wellness-cream/80 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-wellness-charcoal mb-6">Sleep Sounds</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {sounds.map((sound) => (
          <Button
            key={sound.id}
            variant={selectedSound.id === sound.id ? "default" : "outline"}
            className={`h-24 flex flex-col items-center justify-center gap-2 transition-all ${
              selectedSound.id === sound.id ? "bg-wellness-mint" : "hover:bg-wellness-sage/50"
            }`}
            onClick={() => changeSound(sound)}
          >
            <span className="text-lg">{sound.name}</span>
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Volume2 className="w-6 h-6" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <Timer className="w-6 h-6" />
          <Slider
            value={[timer]}
            onValueChange={([value]) => setTimer(value)}
            max={120}
            step={5}
            className="flex-1"
          />
          <span className="min-w-[4rem] text-right">{timer}m</span>
        </div>

        <Button
          size="lg"
          className={`w-full ${isPlaying ? "bg-wellness-lavender" : "bg-wellness-mint"}`}
          onClick={togglePlay}
        >
          {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </div>

      <audio ref={audioRef} src={selectedSound.url} loop />
    </Card>
  );
};
