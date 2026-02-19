export interface StudyTask {
  id: string;
  subject: string;
  topic: string;
  deadline: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  createdAt: string;
}

export const loadTasks = (): StudyTask[] => {
  try {
    const data = localStorage.getItem("study-tasks");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveTasks = (tasks: StudyTask[]) => {
  localStorage.setItem("study-tasks", JSON.stringify(tasks));
};

export const loadDailyGoal = (): number => {
  return Number(localStorage.getItem("daily-goal") || "5");
};

export const saveDailyGoal = (goal: number) => {
  localStorage.setItem("daily-goal", String(goal));
};
