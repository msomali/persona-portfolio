import { motion } from "framer-motion";
import { Github, Package, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Verified against the GitHub API and pub.dev. Star counts are omitted
// deliberately — near-zero counters measure reach, not the work.
const repos = [
  {
    name: "job-application-assistant",
    desc: "Multi-tenant SaaS that scrapes listings, scores fit against a structured resume, generates tailored PDFs, and fills forms behind human approval. PII redacted before any prompt leaves the process.",
    lang: "Python",
    meta: "205 commits · 43.5K LOC",
    href: "https://github.com/msomali/job-application-assistant",
  },
  {
    name: "shimmer_progress_bar",
    desc: "Animated linear progress bar for Flutter with shimmer effect, percentage indicator, screen-reader semantics, and respect for reduced-motion settings.",
    lang: "Dart",
    meta: "Published on pub.dev · v1.0.1 · 160 pub points",
    href: "https://pub.dev/packages/shimmer_progress_bar",
    published: true,
  },
  {
    name: "epl-standings",
    desc: "ETL pipeline pulling Premier League standings from API-Football through a pandas transform into PostgreSQL. Small by design — written as the worked example behind a beginner ETL guide.",
    lang: "Python",
    meta: "Companion to a published walkthrough",
    href: "https://github.com/msomali/epl-standings",
  },
  {
    name: "azure-devops-workitems-rest-api",
    desc: "Automates Azure DevOps work-item creation over the REST API — PAT auth, a typed payload builder, and logging.",
    lang: "Python",
    meta: "Companion to a published guide",
    href: "https://github.com/msomali/azure-devops-workitems-rest-api",
  },
];

const langColors: Record<string, string> = {
  Python: "bg-blue-400",
  Dart: "bg-cyan-400",
  TypeScript: "bg-blue-500",
};

export default function GitHubRepos() {
  return (
    <section id="github" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="08" title="Open Source" />

      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl -mt-6 mb-10">
        What's public. Most of my recent work is behind a private repo, so this is the smaller half —
        but every link resolves and every line is mine.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {repos.map((r, i) => (
          <motion.a
            key={r.name}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group flex flex-col bg-card border border-border rounded-lg p-5 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              {r.published ? (
                <Package className="text-primary" size={19} />
              ) : (
                <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={19} />
              )}
              <ExternalLink size={14} className="text-muted-foreground/40 group-hover:text-primary transition-colors" />
            </div>

            <h4 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-2 break-all">
              {r.name}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{r.desc}</p>

            <div className="flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5 shrink-0">
                <span className={`w-2.5 h-2.5 rounded-full ${langColors[r.lang] || "bg-muted-foreground"}`} />
                {r.lang}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/70 text-right">{r.meta}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
