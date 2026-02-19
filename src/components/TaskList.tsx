import { Trash2, Flag } from "lucide-react";
import type { StudyTask } from "@/lib/tasks";

interface Props {
  tasks: StudyTask[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors: Record<string, string> = {
  high: "text-destructive",
  medium: "text-accent",
  low: "text-secondary",
};

const TaskList = ({ tasks, onToggle, onDelete }: Props) => {
  if (tasks.length === 0) {
    return (
      <div className="glass-card p-8 text-center text-muted-foreground">
        <p className="text-lg">No tasks yet. Add your first study task! 📚</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`glass-card p-4 flex items-center gap-4 hover-lift transition-all ${
            task.completed ? "opacity-60" : ""
          }`}
        >
          <button
            onClick={() => onToggle(task.id)}
            className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
              task.completed
                ? "bg-primary border-primary"
                : "border-muted-foreground/40 hover:border-primary"
            }`}
          >
            {task.completed && (
              <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          <div className="flex-1 min-w-0">
            <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
              {task.subject}: {task.topic}
            </p>
            {task.deadline && (
              <p className="text-xs text-muted-foreground mt-0.5">
                Due: {new Date(task.deadline).toLocaleDateString()}
              </p>
            )}
          </div>

          <Flag className={`w-4 h-4 flex-shrink-0 ${priorityColors[task.priority]}`} />

          <button
            onClick={() => onDelete(task.id)}
            className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
