import { useState, useEffect } from "react";
import { Target } from "lucide-react";
import { loadDailyGoal, saveDailyGoal } from "@/lib/tasks";

interface Props {
  completedToday: number;
}

const GoalTracker = ({ completedToday }: Props) => {
  const [goal, setGoal] = useState(loadDailyGoal);

  useEffect(() => {
    saveDailyGoal(goal);
  }, [goal]);

  const reached = completedToday >= goal;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-2 mb-3">
        <Target className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Daily Goal</h3>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={() => setGoal((g) => Math.max(1, g - 1))}
          className="w-8 h-8 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors font-bold"
        >
          −
        </button>
        <span className="text-2xl font-bold tabular-nums gradient-text">{goal}</span>
        <button
          onClick={() => setGoal((g) => g + 1)}
          className="w-8 h-8 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors font-bold"
        >
          +
        </button>
        <span className="text-sm text-muted-foreground">tasks / day</span>
      </div>

      <p className={`text-sm font-medium ${reached ? "text-green-500" : "text-muted-foreground"}`}>
        {reached ? "🎉 Goal reached! Amazing work!" : `${completedToday}/${goal} completed today`}
      </p>
    </div>
  );
};

export default GoalTracker;
