import { motion } from "framer-motion";
import { Star, GitFork, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const repos = [
  { name: "datastream-engine", desc: "High-throughput distributed data processing engine", lang: "Rust", stars: 1240, forks: 187 },
  { name: "ml-pipeline-toolkit", desc: "End-to-end ML pipeline framework with AutoML", lang: "Python", stars: 890, forks: 134 },
  { name: "query-optimizer", desc: "Cost-based query optimizer for graph databases", lang: "Go", stars: 456, forks: 67 },
  { name: "schema-migrate", desc: "Zero-downtime PostgreSQL migration tool", lang: "Go", stars: 312, forks: 45 },
  { name: "pydatakit", desc: "Data validation and profiling toolkit", lang: "Python", stars: 567, forks: 89 },
  { name: "react-data-grid", desc: "High-performance virtualized data grid for React", lang: "TypeScript", stars: 234, forks: 38 },
];

const langColors: Record<string, string> = {
  Rust: "bg-orange-400",
  Python: "bg-blue-400",
  Go: "bg-cyan-400",
  TypeScript: "bg-blue-500",
};

export default function GitHubRepos() {
  return (
    <section id="github" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="06" title="Open Source" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((r, i) => (
          <motion.a
            key={r.name}
            href={`https://github.com/msomali/${r.name}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-card border border-border rounded-lg p-5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Star size={12} /> {r.stars}</span>
                <span className="flex items-center gap-1"><GitFork size={12} /> {r.forks}</span>
              </div>
            </div>
            <h4 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {r.name}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{r.desc}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className={`w-2.5 h-2.5 rounded-full ${langColors[r.lang] || "bg-muted-foreground"}`} />
              {r.lang}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
