import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Heart, Code, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <div className="container mx-auto px-6 py-16 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold mb-6">
            About <span className="gradient-text">StudyPlan</span>
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              StudyPlan is a modern study planner designed to help students organize their academic tasks, manage time effectively, and stay motivated throughout their learning journey.
            </p>

            <div className="grid gap-4">
              {[
                { icon: Sparkles, title: "Smart Planning", text: "Organize tasks by subject, priority, and deadlines." },
                { icon: Code, title: "Focus Tools", text: "Built-in Pomodoro timer to keep you in the zone." },
                { icon: Heart, title: "Built for Students", text: "Every feature is designed with students in mind." },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
