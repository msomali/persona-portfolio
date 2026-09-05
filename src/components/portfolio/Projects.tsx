import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Target, Layers, Wrench, BarChart3, Rocket, TrendingUp, ArrowRight, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Derived from the projects themselves so a tab can never render empty.
const categoryOrder = ["AI Systems", "Data Engineering", "Platform Engineering"];

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
  /** When set, the card renders condensed and points at the full case study. */
  caseStudySlug?: string;
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
  {
    title: "LOJE Intake Data Platform",
    category: "Data Engineering",
    problem:
      "The firm's intake reporting ran as 2,000 lines of pandas on a single Windows laptop under Task Scheduler. Rebuilt as an incremental ELT platform across three call and lead sources, with freshness gates so a stale report can never be mistaken for a current one.",
    architecture:
      "dlt ingestion on 30-minute schedules into a medallion lakehouse across four Postgres schemas, dbt transforms, Dagster orchestration with dependency-aware sensors, and a Streamlit dashboard alongside the generated Excel report.",
    decisions: [],
    tech: ["Python", "dlt", "dbt", "Dagster", "PostgreSQL", "Terraform", "AWS ECS Fargate", "Streamlit", "GitHub Actions"],
    scale: "596 commits between February and August 2026. Three sources, four report windows a day, SNS alerting on any failure.",
    deployment: "AWS ECS Fargate via GitHub Actions, infrastructure managed with Terraform.",
    caseStudySlug: "intake-pipeline-rebuild",
  },
  {
    title: "Case Summary AI",
    category: "AI Systems",
    problem:
      "Reloading an entire case file into your head is the largest recurring cost in legal case work. This turns it into a structured six-section brief plus case-scoped Q&A that refuses to answer outside its retrieved context — against live client data, in a regulated practice.",
    architecture:
      "An LLM-free sync path extracting document text, embeddings in pgvector inside the existing Postgres, tiered model selection per workload, deterministic milestone summaries anchored to case creation date, and authorization proxied off the source system's live access matrix.",
    decisions: [],
    tech: ["Python", "FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "pgvector", "OpenAI", "MSAL / MS Graph", "APScheduler"],
    scale: "41K LOC across 25 tables and 133 commits. Cost per brief, per chat turn and per milestone cycle observable in the audit rollup.",
    deployment: "FastAPI with APScheduler for milestone checks, Microsoft Graph magic-link auth, GitHub Actions deploy.",
    caseStudySlug: "rag-in-a-regulated-workflow",
  },
  {
    title: "LOJE Hub",
    category: "Platform Engineering",
    problem:
      "Internal staff portal that doubles as the authorization authority for every sibling tool — announcements, directory and calendar on one side, and on the other the single service that answers who may use which app, at what level, with which roles.",
    architecture:
      "Server-rendered FastAPI and Jinja2 with Microsoft Entra OIDC sign-in, exposing three authorization endpoints consumed by sibling tools through a shared SDK. Role slugs are stable and labels are display-only, so renames need no consumer deploy.",
    decisions: [],
    tech: ["Python", "FastAPI", "SQLAlchemy 2.x", "PostgreSQL", "Alembic", "Microsoft Entra / OIDC", "Terraform", "Docker"],
    scale: "26K LOC over 358 commits with 164 test files. CI runs every migration up and back down against real Postgres.",
    deployment: "Docker with locked dependencies — CI installs from the lockfile, so the image that ships is the one that was tested.",
    caseStudySlug: "central-authorization-service",
  },
  {
    title: "LOJE Case Platform — Records & Insurance",
    category: "Platform Engineering",
    problem:
      "Two legacy ASP.NET WebForms applications — one tracking medical-records requests, one tracking health-insurance subrogation — had drifted into separate silos with separate logins, separate permissions, and no shared audit. Both needed rebuilding, and rebuilding them twice would have recreated the same divergence.",
    architecture:
      "One application, two modules on a shared stack. Records and Insurance share a Microsoft Entra login, the LOJE Hub access layer, and a common UI shell with a module switcher — while data, roles, analytics, audit trails, and page-access rules stay isolated per module. Records is the reference implementation; Insurance mirrors it with the domain nouns swapped.",
    decisions: [
      "Shared shell, isolated data. One login and one access layer, but a role in Records grants nothing in Insurance — the convenience of a single sign-in never becomes an accidental grant across two different regulated workflows.",
      "Built Records as the reference implementation and mirrored it feature-for-feature, so the second module inherits the first's structure instead of reinventing a parallel one that drifts within a year.",
      "Modelled the case lifecycle explicitly as named states with typed team slots, and drove who may fill each slot from the hub role rather than a local table.",
      "Directory-backed providers and insurers with duplicate and typo detection at the point of entry, because the reporting layer is only as good as whether two spellings of one provider are one row.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "TypeScript", "React", "Microsoft Entra", "Docker"],
    scale: "33K LOC — 19K Python, 14K TypeScript — across 307 files in 261 commits, replacing two legacy WebForms applications.",
    deployment: "Dockerised backend and frontend behind the shared Entra login and the LOJE Hub authorization layer.",
  },
  {
    title: "PI Law Redactor",
    category: "AI Systems",
    problem:
      "Personal injury files are dense with protected information — names, addresses, policy numbers, medical record numbers — spread across scanned PDFs, Word documents, images, and DICOM medical imaging. Redacting by hand is slow, and redacting by regex is worse, because the failure mode is a document that looks clean and isn't.",
    architecture:
      "A Flask application over a detection engine that ensembles multiple signals — OCR adapters, medical named-entity recognition, custom entity rules, language detection, and context filtering — across format-specific processors for DOCX, images, and DICOM. A human-in-the-loop feedback path fine-tunes the OCR and NER models over time through SageMaker.",
    decisions: [
      "Ensembled detectors rather than trusting one. A single NER model has a characteristic blind spot; the cost of one missed identifier in a legal record is high enough to justify paying for redundancy.",
      "Handled DICOM as a first-class format, because medical imaging carries patient identifiers in its metadata that a document-oriented pipeline never looks at.",
      "Made corrections train the system. Reviewer fixes feed a dataset builder rather than being discarded, so the model improves on the firm's actual documents instead of staying at its generic baseline.",
      "Kept a human in the loop by design. The pipeline narrows and proposes; it does not decide that a document is safe to release.",
    ],
    tech: ["Python", "Flask", "Medical NER", "OCR", "DICOM", "AWS SageMaker", "Ensemble Models"],
    scale: "5.8K LOC across a detection engine of eleven specialised modules, spanning five document and image formats.",
    deployment: "Runs locally against the document store, with model fine-tuning jobs dispatched to SageMaker.",
  },
];

const sectionIcons = {
  Problem: Target,
  Architecture: Layers,
  Tech: Wrench,
  Scale: BarChart3,
  Deployment: Rocket,
};

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: Math.min(index, 4) * 0.06 }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300"
    >
      <div className="p-6 md:p-7 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="font-mono text-[11px] text-primary/60 uppercase tracking-wider">{p.category}</span>
            <h3 className="text-lg md:text-xl font-bold text-foreground mt-1">{p.title}</h3>
          </div>
          <div className="flex gap-3 shrink-0">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`}
                 className="p-2 -m-2 text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live site`}
                 className="p-2 -m-2 text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7 grid md:grid-cols-2 gap-6">
        {([["Problem", p.problem], ["Architecture", p.architecture], ["Scale", p.scale], ["Deployment", p.deployment]] as const)
          .map(([label, text]) => {
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

      <div className="px-6 md:px-7 pb-5">
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-secondary text-secondary-foreground border border-border">
              {t}
            </span>
          ))}
        </div>
      </div>

      {p.decisions.length > 0 && (
        <div className="px-6 md:px-7 pb-6">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="group/t inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline underline-offset-4"
          >
            <TrendingUp size={13} />
            {open ? "Hide" : "Show"} the {p.decisions.length} decisions that mattered
            <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden space-y-2.5 mt-4"
              >
                {p.decisions.map((d, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    {d}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}

      {p.caseStudySlug && (
        <div className="px-6 md:px-7 pb-6">
          <Link
            to={`/case-studies/${p.caseStudySlug}`}
            className="group/cs inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline underline-offset-4"
          >
            Read the full case study — decisions, tradeoffs, and what I'd change
            <ArrowRight size={13} className="group-hover/cs:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...categoryOrder.filter((c) => projects.some((p) => p.category === c)),
    ...[...new Set(projects.map((p) => p.category))].filter((c) => !categoryOrder.includes(c)),
  ];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="03" title="Things I've Built" />

      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl -mt-6 mb-8">
        {projects.length} systems, from a one-person tool to a multi-tenant platform. Each card opens with the
        problem and the shape of the solution — the reasoning is one click down, so you can skim or go deep.
      </p>

      <div className={`flex-wrap gap-2 mb-10 ${categories.length > 2 ? "flex" : "hidden"}`}>
        {categories.map((cat) => {
          const n = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono border transition-all duration-200 ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat} <span className="opacity-60">{n}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
