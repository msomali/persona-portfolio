import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Grounded in work actually in progress — each of these traces to a repo.
const topics = [
  { title: "Evaluating LLM Output, Properly", desc: "Golden-case harnesses, algorithmic scorers, and LLM-as-judge with bootstrap confidence intervals. Built one to decide whether a more sophisticated summarization pipeline was actually better — it wasn't, yet, so it stayed paused." },
  { title: "Event Sourcing for Regulated Records", desc: "Append-only histories where the audit trail is the product, not a side effect. Currently the backbone of a Title 17 care platform." },
  { title: "Agentic Systems With Human Gates", desc: "Where an agent should act autonomously and where it must stop and ask. Computer-use form filling with approval checkpoints, and intake agents that hand off cleanly to a person." },
  { title: "Infrastructure as Code", desc: "Terraform for the data platform — moving deployment from remembered steps to reviewable diffs." },
  { title: "Cost-Aware AI Architecture", desc: "Model tiering per workload, lazy and cached inference, batch APIs, and keeping the sync path model-free so scale doesn't cost inference." },
  { title: "pgvector at Small-to-Mid Scale", desc: "How far a single Postgres carries retrieval before a dedicated ANN index earns its operational cost — and keeping that migration reversible." },
];

export default function Exploring() {
  return (
    <section id="exploring" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="11" title="What I'm Currently Exploring" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <Sparkles className="text-primary" size={18} />
              <ArrowUpRight size={14} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{t.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
