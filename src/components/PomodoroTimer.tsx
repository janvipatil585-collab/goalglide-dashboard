import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const POMODORO_SECONDS = 25 * 60;

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(POMODORO_SECONDS);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running && seconds > 0) {
      intervalRef.current = setInterval(() => setSeconds((s) => s - 1), 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, seconds]);

  useEffect(() => {
    if (seconds === 0) setRunning(false);
  }, [seconds]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  const pct = ((POMODORO_SECONDS - seconds) / POMODORO_SECONDS) * 100;

  return (
    <div className="glass-card p-6 text-center">
      <h3 className="font-semibold mb-4">🍅 Pomodoro Timer</h3>

      <div className="relative w-40 h-40 mx-auto mb-4">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
          <circle
            cx="60" cy="60" r="54" fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 54}`}
            strokeDashoffset={`${2 * Math.PI * 54 * (1 - pct / 100)}`}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold tabular-nums">{mins}:{secs}</span>
        </div>
      </div>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => setRunning(!running)}
          className="gradient-btn p-3 rounded-xl"
        >
          {running ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button
          onClick={() => { setRunning(false); setSeconds(POMODORO_SECONDS); }}
          className="p-3 rounded-xl bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
