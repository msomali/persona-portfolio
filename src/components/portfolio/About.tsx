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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl"
      >
        <p>
          I'm a Senior Data &amp; AI Engineer in Los Angeles. I've been the{" "}
          <span className="text-foreground font-medium">first dedicated data hire at two organizations</span> — a
          nonprofit and a personal injury law firm — which means I've twice started with an empty cloud account and
          ended with a platform the business actually runs on: ingestion, orchestration, a lakehouse, and the AI and
          BI products sitting on top of it.
        </p>
        <p>
          I didn't start in data. I spent most of a decade as a software engineer in{" "}
          <span className="text-foreground font-medium">Dar es Salaam</span> and{" "}
          <span className="text-foreground font-medium">Milan</span> — building the backend for a national
          socio-economic databank serving 5M+ citizens, moving government platforms off monoliths onto Kubernetes,
          running ETL over a million records a day at 99.9% uptime, then leading frontend on Flutter apps that
          reached 100K+ users. That decade is where I learned the hard part is rarely the model or the query. It's
          the delivery, and it's whether anyone can trust the number at the end.
        </p>
        <p>
          Moving into data was deliberate, not accidental. I took a master's at the{" "}
          <span className="text-foreground font-medium">University of North Florida</span>, built PySpark and
          Airflow pipelines over 250&nbsp;GB of FDOT traffic footage, and wrote a thesis comparing YOLOv8, v9, and
          v10 for urban traffic detection — then went straight into being the person who builds the platform rather
          than the person who asks for one.
        </p>
        <p>
          That mix is the point. I can write the ingestion, model the warehouse, train the model, build the API,
          ship the dashboard, and then explain to a non-technical stakeholder why the number changed. Most of my
          work now lives where data engineering meets applied AI — document intelligence, agent systems, and the
          unglamorous data quality work that decides whether anyone trusts the output at all.
        </p>
      </motion.div>

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
