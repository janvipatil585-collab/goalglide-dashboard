interface Props {
  completed: number;
  total: number;
}

const ProgressBar = ({ completed, total }: Props) => {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Daily Progress</h3>
        <span className="text-sm font-medium gradient-text">{pct}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: "var(--gradient-primary)",
          }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        {completed} of {total} tasks completed
      </p>
    </div>
  );
};

export default ProgressBar;
