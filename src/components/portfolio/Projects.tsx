import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Target, Layers, Wrench, BarChart3, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = ["All", "AI Systems", "Data Engineering", "Machine Learning"] as const;

interface Project {
  title: string;
  category: string;
  problem: string;
  architecture: string;
  decisions: string[];
  tech: string[];
  scale: string;
  deployment: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Job Application Assistant",
    category: "AI Systems",
    problem:
      "Applying seriously to a role means re-reading the posting, re-tailoring a resume, writing a cover letter, and re-typing the same twenty answers into a different form. It is an hour of work per application, most of it mechanical, and the mechanical part is what makes people send generic applications instead.",
    architecture:
      "A multi-tenant SaaS built around a four-stage pipeline — discover, analyze, generate, apply. Firecrawl and a Playwright browser session scrape listings; Claude scores each against a structured master resume and returns a 0\u2013100 fit score with a penalty breakdown; tailored content is injected into LaTeX templates and compiled to PDF; Claude Computer Use drives a real browser to fill the application form. A Telegram bot handles notification and human approval before anything is submitted.",
    decisions: [
      "PII is redacted before any prompt leaves the process and re-injected into the output \u2014 the LLM never sees the applicant's real identity, and no vendor gets a resume database.",
      "The LLM layer is a provider interface with a router behind it (Anthropic + Gemini), which is what makes bring-your-own-key possible \u2014 tenants pay their own inference costs instead of the platform absorbing them.",
      "Batch API for bulk analysis at half the cost, with async collection, because discovery runs score dozens of jobs at once and none of them are latency-sensitive.",
      "Nothing auto-submits. Form filling is agentic, but a human approves through Telegram before the click \u2014 the failure mode of a wrong application is unrecoverable.",
    ],
    tech: [
      "Python", "FastAPI", "PostgreSQL", "Redis", "MinIO", "Alembic",
      "Claude Computer Use", "Playwright", "LaTeX", "React", "TypeScript", "Stripe",
    ],
    scale:
      "43.5K LOC across 371 files \u2014 30K Python, 13K TypeScript \u2014 in 205 commits over 16 days. 15 migrations covering multi-tenancy, a credit ledger, subscription tiers, BYOK key management, and an audit log.",
    deployment:
      "Docker Compose across seven services: Postgres, Redis, MinIO, Alembic migrator, FastAPI API, background worker, and the Vite frontend. Rate limiting, tenant isolation, and circuit breakers sit in middleware.",
    github: "https://github.com/msomali/job-application-assistant",
  },
];

const sectionIcons = {
  Problem: Target,
  Architecture: Layers,
  Tech: Wrench,
  Scale: BarChart3,
  Deployment: Rocket,
};

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="03" title="Things I've Built" />

      {/* Filter tabs */}
      <div className={`flex-wrap gap-2 mb-12 ${projects.length > 2 ? "flex" : "hidden"}`}>
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
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live site`} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
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
                ] as const).map(([label, text]) => {
                  const Icon = sectionIcons[label];
                  return (
                    <div key={label}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={14} className="text-primary" />
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">{label}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Key decisions */}
              <div className="px-6 md:px-8 pb-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={14} className="text-primary" />
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">Decisions That Mattered</span>
                </div>
                <ul className="space-y-2.5">
                  {p.decisions.map((d, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1.5 shrink-0">\u25B9</span>
                      {d}
                    </li>
                  ))}
                </ul>
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
