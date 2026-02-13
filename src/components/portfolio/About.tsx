import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="00" title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl"
      >
        <p>
          I'm a multidisciplinary engineer with 6+ years of experience spanning backend systems,
          large-scale data pipelines, and production machine learning. I build end-to-end — from data
          ingestion to deployed applications — with a focus on scalability, reliability, and measurable impact.
        </p>
        <p>
          My journey started building web apps, evolved into designing ETL architectures processing
          billions of events daily, and now includes deploying ML models that drive real business outcomes.
          I've worked across fintech, healthtech, and e-commerce, always at the intersection of
          software and data.
        </p>
        <p>
          I believe the best engineers understand the full stack — not just code, but the systems,
          data flows, and business context that make products work.
        </p>
      </motion.div>
    </section>
  );
}
