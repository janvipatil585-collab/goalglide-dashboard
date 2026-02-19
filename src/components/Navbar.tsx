import { Link, useLocation } from "react-router-dom";
import { BookOpen, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <BookOpen className="w-6 h-6 text-primary" />
          <span className="gradient-text">StudyPlan</span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
