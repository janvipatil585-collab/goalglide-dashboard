import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Target, Clock, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";

const quotes = [
  "The secret of getting ahead is getting started.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Don't watch the clock; do what it does. Keep going.",
  "Education is the passport to the future.",
];

const features = [
  { icon: Target, title: "Task Management", desc: "Organize your subjects, topics, and deadlines effortlessly." },
  { icon: Clock, title: "Pomodoro Timer", desc: "Stay focused with a built-in 25-minute study timer." },
  { icon: BookOpen, title: "Progress Tracking", desc: "See your daily completion and stay motivated." },
  { icon: Sparkles, title: "Smart Goals", desc: "Set daily study goals and crush them every day." },
];

const Index = () => {
  const navigate = useNavigate();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">
              ✨ Your study companion
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight"
          >
            Plan Smart.
            <br />
            Study Better.
            <br />
            <span className="opacity-80">Achieve More.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8"
          >
            Manage your daily study tasks, track progress, and stay focused with our beautiful planner built for students like you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate("/dashboard")}
              className="px-8 py-4 rounded-xl text-lg font-semibold bg-primary-foreground text-primary hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started →
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-primary-foreground/50 text-sm italic"
          >
            "{quote}"
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to <span className="gradient-text">ace your studies</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A complete toolkit designed to help you organize, focus, and succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover-lift cursor-default"
            >
              <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        <p>© 2026 StudyPlan. Built for students, by students.</p>
      </footer>
    </div>
  );
};

export default Index;
