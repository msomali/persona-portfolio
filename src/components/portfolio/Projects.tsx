import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Target, Layers, Wrench, BarChart3, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = ["All", "Software Systems", "Data Engineering", "Machine Learning"] as const;

const projects = [
  {
    title: "DataStream Engine",
    category: "Data Engineering",
    problem: "Legacy batch systems couldn't keep up with real-time analytics demands — 12-hour delays made dashboards stale and decisions reactive.",
    architecture: "Event-driven microservices with custom partitioning, backpressure mechanisms, and exactly-once semantics across distributed nodes.",
    tech: ["Rust", "Apache Kafka", "ClickHouse", "gRPC", "Docker"],
    scale: "1M+ events/sec, 50TB daily throughput, 99.99% uptime",
    deployment: "AWS EKS with auto-scaling, blue-green deployments, and multi-region failover",
    impact: "Reduced pipeline latency from 12hrs to <1s. Cut infrastructure costs by 40% through efficient resource utilization.",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "MLOps Platform",
    category: "Machine Learning",
    problem: "Data scientists spent 70% of time on deployment rather than modeling — no standardized way to version, test, or monitor models in production.",
    architecture: "End-to-end platform with model registry, automated training pipelines, A/B testing framework, and real-time monitoring dashboards.",
    tech: ["Python", "FastAPI", "MLflow", "Kubernetes", "Terraform"],
    scale: "200+ models in production, 50M predictions/day, 15 data scientist users",
    deployment: "Multi-tenant K8s clusters on AWS with GPU node pools and spot instance optimization",
    impact: "Reduced model deployment time from 2 weeks to 4 hours. Improved model accuracy tracking by 18% through systematic A/B testing.",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Smart City Dashboard",
    category: "Software Systems",
    problem: "City officials lacked a unified view of urban metrics — traffic, air quality, and energy data existed in disconnected silos with no real-time capabilities.",
    architecture: "Real-time visualization platform with IoT gateway, time-series storage, WebSocket streaming, and interactive geospatial maps.",
    tech: ["React", "D3.js", "TimescaleDB", "WebSocket", "AWS"],
    scale: "10K+ IoT sensors, 500K data points/min, 200 concurrent dashboard users",
    deployment: "AWS with CloudFront CDN, auto-scaling ECS services, and edge-deployed IoT gateways",
    impact: "Enabled real-time city-wide monitoring. Reduced emergency response time by 23% through predictive alerting.",
    github: "https://github.com",
    live: "https://example.com",
  },
];

const sectionIcons = {
  Problem: Target,
  Architecture: Layers,
  Tech: Wrench,
  Scale: BarChart3,
  Deployment: Rocket,
  Impact: TrendingUp,
};

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="04" title="Things I've Built" />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono border transition-all duration-200 ${
              filter === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case-study projects */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-16"
        >
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[11px] text-primary/60 uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1">{p.title}</h3>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
                {([
                  ["Problem", p.problem],
                  ["Architecture", p.architecture],
                  ["Scale", p.scale],
                  ["Deployment", p.deployment],
                  ["Impact", p.impact],
                ] as const).map(([label, text]) => {
                  const Icon = sectionIcons[label];
                  return (
                    <div key={label} className={label === "Impact" ? "md:col-span-2" : ""}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={14} className="text-primary" />
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">{label}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Tech footer */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench size={14} className="text-primary" />
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
