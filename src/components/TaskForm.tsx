import { useState } from "react";
import { Plus } from "lucide-react";
import type { StudyTask } from "@/lib/tasks";

interface Props {
  onAdd: (task: Omit<StudyTask, "id" | "completed" | "createdAt">) => void;
}

const TaskForm = ({ onAdd }: Props) => {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !topic.trim()) return;
    onAdd({ subject, topic, deadline, priority });
    setSubject("");
    setTopic("");
    setDeadline("");
    setPriority("medium");
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full glass-card p-4 flex items-center gap-3 text-muted-foreground hover-lift cursor-pointer"
      >
        <Plus className="w-5 h-5 text-primary" />
        <span>Add a new study task...</span>
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4 animate-fade-in">
      <h3 className="font-semibold text-lg">New Study Task</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          placeholder="Subject (e.g. Math)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          required
        />
        <input
          placeholder="Topic (e.g. Algebra)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          required
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
          className="px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <div className="flex gap-3">
        <button type="submit" className="gradient-btn px-6 py-2.5 rounded-lg font-medium text-sm">
          Add Task
        </button>
        <button type="button" onClick={() => setOpen(false)} className="px-6 py-2.5 rounded-lg font-medium text-sm bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
