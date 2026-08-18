import {
  GraduationCap,
  Code2,
  FolderGit2,
  Trophy,
} from "lucide-react";

import "../styles/QuickStats.css";

const stats = [
  {
    icon: GraduationCap,
    value: "B.Tech",
    label: "Computer Science",
  },
  {
    icon: Code2,
    value: "MERN",
    label: "Full Stack Development",
  },
  {
    icon: FolderGit2,
    value: "10+",
    label: "Projects Built",
  },
  {
    icon: Trophy,
    value: "DSA , Java",
    label: "Problem Solving",
  },
];

function QuickStats() {
  return (
    <section className="quick-stats" aria-label="Professional highlights">
      <div className="quick-stats-container">

        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div className="quick-stat-item" key={index}>

              <div className="quick-stat-icon">
                <Icon size={21} strokeWidth={1.8} />
              </div>

              <div className="quick-stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default QuickStats;