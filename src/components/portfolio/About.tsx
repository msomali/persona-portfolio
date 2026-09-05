import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const facts = [
  { label: "Engineering since", value: "2015 · 10 years" },
  { label: "M.Sc. Data Science", value: "4.0 GPA · UNF" },
  { label: "Published research", value: "2 papers" },
  { label: "Languages", value: "EN · SW · ES" },
];

export default function About() {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="01" title="About Me" />

      <div className="flex flex-col-reverse md:flex-row md:items-start gap-8 md:gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-muted-foreground leading-relaxed flex-1 min-w-0"
      >
        <p>
          I'm a Senior Data &amp; AI Engineer in Los Angeles, and I've been the{" "}
          <span className="text-foreground font-medium">first data hire at two organizations</span> — twice starting
          with an empty cloud account and ending with a platform the business runs on.
        </p>
        <p>
          Before data, most of a decade as a software engineer in{" "}
          <span className="text-foreground font-medium">Dar es Salaam</span> and{" "}
          <span className="text-foreground font-medium">Milan</span>: the backend for a national databank serving
          5M+ citizens, government platforms moved onto Kubernetes, a million records a day at 99.9% uptime. Then a
          master's at UNF and a deliberate move into data.
        </p>
        <p>
          I can write the ingestion, model the warehouse, train the model, ship the dashboard, and explain to a
          non-technical stakeholder why the number changed. The work I care about is the unglamorous part — whether
          anyone can trust the output.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="shrink-0 mx-auto md:mx-0"
      >
        <div className="relative w-40 h-40 md:w-52 md:h-52">
          <div className="absolute inset-0 rounded-xl border border-primary/40 translate-x-3 translate-y-3" />
          <img
            src="/walid.jpg"
            alt="Walid Kambagha"
            width={640}
            height={640}
            loading="lazy"
            className="relative w-full h-full object-cover rounded-xl border border-border grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 max-w-3xl"
      >
        {facts.map((f) => (
          <div key={f.label} className="bg-card border border-border rounded-lg px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-primary/70">{f.label}</p>
            <p className="text-sm text-foreground font-medium mt-1">{f.value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
