import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { StudyTask } from "@/lib/tasks";

interface Props {
  tasks: StudyTask[];
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const CalendarView = ({ tasks }: Props) => {
  const [current, setCurrent] = useState(new Date());
  const year = current.getFullYear();
  const month = current.getMonth();

  const deadlineDates = useMemo(() => {
    const set = new Set<string>();
    tasks.forEach((t) => { if (t.deadline) set.add(t.deadline); });
    return set;
  }, [tasks]);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const prev = () => setCurrent(new Date(year, month - 1, 1));
  const next = () => setCurrent(new Date(year, month + 1, 1));

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h3 className="font-semibold">{MONTHS[month]} {year}</h3>
        <button onClick={next} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {DAYS.map((d) => (
          <div key={d} className="py-1 text-muted-foreground font-medium">{d}</div>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} />;
          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
          const hasDeadline = deadlineDates.has(dateStr);

          return (
            <div
              key={dateStr}
              className={`py-1.5 rounded-lg text-sm relative transition-colors ${
                isToday ? "bg-primary text-primary-foreground font-bold" : hasDeadline ? "bg-accent/20 text-accent font-medium" : "hover:bg-muted"
              }`}
            >
              {day}
              {hasDeadline && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
