import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

const quotes = [
  "The expert in anything was once a beginner.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Don't let what you cannot do interfere with what you can do.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Learning is not attained by chance, it must be sought for with ardor.",
  "Push yourself, because no one else is going to do it for you.",
  "Believe you can and you're halfway there.",
  "It always seems impossible until it's done.",
];

const MotivationalQuote = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }, []);

  return (
    <div className="glass-card p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="flex items-start gap-3">
        <span className="text-3xl">💡</span>
        <div className="flex-1">
          <p className="italic text-sm text-foreground/80 leading-relaxed">"{quotes[index]}"</p>
          <button
            onClick={() => setIndex((i) => (i + 1) % quotes.length)}
            className="mt-3 flex items-center gap-1.5 text-xs text-primary hover:underline"
          >
            <RefreshCw className="w-3 h-3" /> New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotivationalQuote;
