import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Target, Layers, Wrench, BarChart3, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = ["All", "AI Systems", "Platform Engineering", "Data Engineering"] as const;

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
      "A multi-tenant SaaS built around a four-stage pipeline — discover, analyze, generate, apply. Firecrawl and a Playwright browser session scrape listings; Claude scores each against a structured master resume and returns a 0–100 fit score with a penalty breakdown; tailored content is injected into LaTeX templates and compiled to PDF; Claude Computer Use drives a real browser to fill the application form. A Telegram bot handles notification and human approval before anything is submitted.",
    decisions: [
      "PII is redacted before any prompt leaves the process and re-injected into the output — the LLM never sees the applicant's real identity, and no vendor gets a resume database.",
      "The LLM layer is a provider interface with a router behind it (Anthropic + Gemini), which is what makes bring-your-own-key possible — tenants pay their own inference costs instead of the platform absorbing them.",
      "Batch API for bulk analysis at half the cost, with async collection, because discovery runs score dozens of jobs at once and none of them are latency-sensitive.",
      "Nothing auto-submits. Form filling is agentic, but a human approves through Telegram before the click — the failure mode of a wrong application is unrecoverable.",
    ],
    tech: [
      "Python", "FastAPI", "PostgreSQL", "Redis", "MinIO", "Alembic",
      "Claude Computer Use", "Playwright", "LaTeX", "React", "TypeScript", "Stripe",
    ],
    scale:
      "43.5K LOC across 371 files — 30K Python, 13K TypeScript — in 205 commits over 16 days. 15 migrations covering multi-tenancy, a credit ledger, subscription tiers, BYOK key management, and an audit log.",
    deployment:
      "Docker Compose across seven services: Postgres, Redis, MinIO, Alembic migrator, FastAPI API, background worker, and the Vite frontend. Rate limiting, tenant isolation, and circuit breakers sit in middleware.",
    github: "https://github.com/msomali/job-application-assistant",
  },
  {
    title: "ARF Care Management System",
    category: "Platform Engineering",
    problem:
      "Adult residential care facilities operate under Title 17, which means a medication pass, an incident note, and a shift handoff are all regulated records. Caregivers work from tablets in buildings where the wifi drops, and four different audiences — owners, lead staff, outside consultants, auditors, and families — each need a different slice of the same record with hard walls between organizations.",
    architecture:
      "An event-sourced FastAPI backend behind three separate frontends: an offline-first tablet PWA for caregivers, an admin web app for owners and auditors, and a family portal. Multi-tenancy is enforced in the database with Postgres row-level security, with the API connecting on a restricted role rather than as owner.",
    decisions: [
      "Event-sourced the record rather than storing current state. A regulated care log needs to answer 'what did the chart say at 4pm on the 12th', and a mutable row cannot answer that — the append-only history is the compliance artifact.",
      "Built the caregiver app offline-first. A medication pass cannot wait for the network to come back, so the tablet writes locally and reconciles later; connectivity is treated as unreliable by default rather than as an error case.",
      "Enforced tenant isolation with Postgres RLS on a restricted database role instead of filtering in application code. An application bug then leaks nothing — the boundary holds one layer below the mistake.",
      "Tested the isolation rather than assuming it: a two-organization isolation spec runs in CI against a real Alembic-migrated stack on the restricted role, not a mocked one.",
    ],
    tech: [
      "Python", "FastAPI", "SQLAlchemy", "PostgreSQL RLS", "Alembic", "MinIO",
      "React", "TypeScript", "PWA", "Playwright", "Docker",
    ],
    scale:
      "73K LOC — 31K Python, 42K TypeScript — across one backend and three frontends, delivered in seven phases. 129 backend unit and integration tests run in CI; the ten browser-driven Playwright specs run locally only, since they need all three frontends served at once.",
    deployment:
      "Docker Compose for Postgres and MinIO, GitHub Actions running unit, integration, and the two-org isolation E2E against a migrated stack.",
  },
  {
    title: "doc-sense",
    category: "AI Systems",
    problem:
      "Incoming mail arrives as scanned PDF bundles — dozens of unrelated documents fused into one file, separated only by physical markers a person recognizes on sight. Every page passes through a human who splits, identifies, names, and files it before anyone can act on any of it.",
    architecture:
      "A FastAPI service with Postgres for state and Redis for queue and pub/sub, driving an Arq worker through split → OCR → classify → group → persist over a shared filesystem. The whole pipeline runs on-premises.",
    decisions: [
      "On-premises by requirement, not preference. The documents are client mail, so no cloud OCR endpoint and no third-party document service — the constraint shaped every tool choice downstream.",
      "Detects handwritten separators alongside printed ones, because in real mail the divider is as often a marker pen as a printed sheet, and a classifier trained only on clean print fails on exactly the bundles that matter.",
      "The pipeline proposes groupings rather than committing them. A wrong split silently misfiles a legal document, so the machine narrows the work and a person confirms it.",
      "Long OCR runs go through a Redis-backed worker queue rather than the request path, so a fifty-page bundle never holds a connection open.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Arq", "OCR", "Docker"],
    scale: "4.6K LOC across 40 commits — a focused tool rather than a platform, built to remove one specific manual step.",
    deployment: "Docker Compose across four services — Postgres, Redis, API, and worker — bootstrapped with a generated session secret.",
  },
  {
    title: "Sheria Poa",
    category: "Platform Engineering",
    problem:
      "Tanzanian law is public but not accessible. The constitution, the Zanzibar constitution, the proposed drafts, and the government gazettes exist as scattered PDFs on government sites, in a country where most people read Swahili first and legal English second. Knowing your rights should not require knowing where the files are kept.",
    architecture:
      "A Django backend exposing a GraphQL schema over a resource centre of constitutions, gazettes and recorded explainers, with accounts, profiles and email flows — paired with a Flutter client for Android and iOS.",
    decisions: [
      "Built it Swahili-first, around the documents people actually need: the Union and Zanzibar constitutions, the proposed constitutional drafts, and the gazettes — not an English-language summary layer over them.",
      "Included recorded audio explainers on practical topics like land acquisition, because a population that reads unevenly still listens, and a PDF of the constitution helps nobody who cannot get through it.",
      "GraphQL over REST so a single mobile client could ask for exactly the fields it needed on connections that are metered and slow.",
    ],
    tech: ["Django", "GraphQL", "Python", "Dart / Flutter", "SQLite"],
    scale:
      "An independent build from 2022 — roughly 19K LOC across the Django backend and Flutter client. Side-project scale, not platform scale, and included here for the through-line rather than the size: legal information access in Dar es Salaam, four years before building legal AI in Los Angeles.",
    deployment: "Django backend with a media library of constitutional documents, gazettes and audio; Flutter client targeting Android and iOS.",
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
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
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
