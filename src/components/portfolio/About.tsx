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
