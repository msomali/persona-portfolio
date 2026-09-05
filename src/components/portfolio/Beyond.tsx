import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle, Layers, Scissors, ShieldCheck, Ruler, Receipt,
  Sparkles, Camera, Mountain, Gamepad2, BookOpen, Medal, CookingPot,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    icon: AlertTriangle,
    title: "Name the silent failure first",
    desc: "A system that breaks loudly gets fixed. The dangerous one produces a confident, wrong answer at 8am because an API timed out at 2am and nothing was watching. I start by finding what fails quietly.",
  },
  {
    icon: Layers,
    title: "Replace layers, don't rewrite",
    desc: "Rewrites ask everyone to trust a new system all at once. Swapping ingestion, then transformation, then orchestration keeps the output stable while the ground moves underneath it.",
  },
  {
    icon: Scissors,
    title: "Know what the tool can't infer",
    desc: "Frameworks absorb plumbing — pagination, retries, state, upserts. They cannot infer business rules. Drawing that line deliberately is most of the work; getting it wrong is most of the pain.",
  },
  {
    icon: ShieldCheck,
    title: "Put the boundary below the bug",
    desc: "Tenant isolation in application code fails when the application has a bug. Enforced in the database on a restricted role, the boundary holds one layer beneath the mistake.",
  },
  {
    icon: Ruler,
    title: "Ship the measurable version",
    desc: "I've built the more sophisticated pipeline and left it paused because it couldn't be shown to beat the simple one. An unmeasured improvement in a system people rely on is a liability, not a feature.",
  },
  {
    icon: Receipt,
    title: "Instrument cost and access from day one",
    desc: "Who used it, what it cost, how long it took, what the model was. Retrofitting that is painful, and without it you cannot scale a system or defend it to the people paying for it.",
  },
];

const topics = [
  { title: "Evaluating LLM Output, Properly", desc: "Golden-case harnesses, algorithmic scorers, and LLM-as-judge with bootstrap confidence intervals. Built one to decide whether a more sophisticated summarization pipeline was actually better — it wasn't, yet, so it stayed paused." },
  { title: "Event Sourcing for Regulated Records", desc: "Append-only histories where the audit trail is the product, not a side effect. Currently the backbone of a Title 17 care platform." },
  { title: "Agentic Systems With Human Gates", desc: "Where an agent should act autonomously and where it must stop and ask. Computer-use form filling with approval checkpoints, and intake agents that hand off cleanly to a person." },
  { title: "Infrastructure as Code", desc: "Terraform for the data platform — moving deployment from remembered steps to reviewable diffs." },
  { title: "Cost-Aware AI Architecture", desc: "Model tiering per workload, lazy and cached inference, batch APIs, and keeping the sync path model-free so scale doesn't cost inference." },
  { title: "pgvector at Small-to-Mid Scale", desc: "How far a single Postgres carries retrieval before a dedicated ANN index earns its operational cost — and keeping that migration reversible." },
];

const hobbies = [
  { icon: Mountain, title: "Hiking & Trekking", desc: "Trails and elevation. The best debugging I do happens nowhere near a screen." },
  { icon: Medal, title: "Football", desc: "Competitive amateur leagues — still convinced I'm quicker than I actually am." },
  { icon: CookingPot, title: "Cooking", desc: "Swahili, East African, and Indian flavours. The food I grew up on, made properly." },
  { icon: Gamepad2, title: "Game Dev", desc: "Weekend builds in Godot and Unity — systems design with an immediate feedback loop." },
  { icon: Camera, title: "Photography", desc: "Landscape and astrophotography. Long exposures are mostly an exercise in patience." },
  { icon: BookOpen, title: "Reading", desc: "Science fiction, systems thinking, and philosophy, in roughly that order." },
];

const tabs = [
  { key: "principles", label: "How I build",  blurb: "Six things I learned the expensive way. Each traces to a decision in the case studies above." },
  { key: "exploring",  label: "Exploring",    blurb: "What I'm working through right now — each of these traces to a repo, not a reading list." },
  { key: "beyond",     label: "Beyond code",  blurb: "The rest of it." },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function Beyond() {
  const [tab, setTab] = useState<TabKey>("principles");
  const active = tabs.find((t) => t.key === tab)!;

  return (
    <section id="approach" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="09" title="How I Work" />

      <div className="flex flex-wrap gap-2 -mt-6 mb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono border transition-all duration-200 ${
              tab === t.key
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-8">{active.blurb}</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {tab === "principles" && principles.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-lg p-4 hover:border-primary/25 transition-colors">
              <p.icon className="text-primary mb-2" size={17} />
              <h4 className="text-[13px] font-semibold text-foreground mb-1.5 leading-snug">{p.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {tab === "exploring" && topics.map((t) => (
            <div key={t.title} className="bg-card border border-border rounded-lg p-4 hover:border-primary/25 transition-colors">
              <Sparkles className="text-primary mb-2" size={17} />
              <h4 className="text-[13px] font-semibold text-foreground mb-1.5 leading-snug">{t.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}

          {tab === "beyond" && hobbies.map((h) => (
            <div key={h.title} className="bg-card border border-border rounded-lg p-4 hover:border-primary/25 transition-colors">
              <h.icon className="text-primary mb-2" size={17} />
              <h4 className="text-[13px] font-semibold text-foreground mb-1.5">{h.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
