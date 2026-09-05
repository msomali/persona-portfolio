import { motion } from "framer-motion";
import { AlertTriangle, Layers, Scissors, ShieldCheck, Ruler, Receipt } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Drawn from the case studies rather than invented — each maps to a real decision.
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

export default function SystemsProcess() {
  return (
    <section id="systems" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="09" title="How I Build Systems" />

      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl -mt-6 mb-10">
        Six things I've learned the expensive way. Each one traces to a decision in the case studies above.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <p.icon className="text-primary shrink-0" size={19} />
              <span className="font-mono text-[10px] text-primary/50">0{i + 1}</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-2 leading-snug">{p.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
