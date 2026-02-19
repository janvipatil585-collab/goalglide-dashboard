import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import ProgressBar from "@/components/ProgressBar";
import PomodoroTimer from "@/components/PomodoroTimer";
import CalendarView from "@/components/CalendarView";
import MotivationalQuote from "@/components/MotivationalQuote";
import GoalTracker from "@/components/GoalTracker";
import { loadTasks, saveTasks, type StudyTask } from "@/lib/tasks";

const Dashboard = () => {
  const [tasks, setTasks] = useState<StudyTask[]>(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (data: Omit<StudyTask, "id" | "completed" | "createdAt">) => {
    setTasks((prev) => [
      {
        ...data,
        id: crypto.randomUUID(),
        completed: false,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">Manage your study tasks and stay on track.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            <ProgressBar completed={completed} total={tasks.length} />
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <PomodoroTimer />
            <GoalTracker completedToday={completed} />
            <CalendarView tasks={tasks} />
            <MotivationalQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
