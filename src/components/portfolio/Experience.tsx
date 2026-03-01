import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Law of Office of Jacob Emrani",
    role: "Data Engineer",
    period: "Dec 2025 — Present",
    points: [
      "Architected microservices handling 50M+ daily requests with P99 latency of 45ms using Go and Kubernetes on AWS EKS",
      "Built real-time ML feature store reducing model inference latency by 40% — serving 200+ models with sub-10ms retrieval",
      "Led migration from monolith to event-driven architecture using Kafka, reducing deployment time by 75% and cutting infrastructure costs by 35%",
      "Mentored team of 5 engineers; 3 promoted to senior roles within 18 months",
    ],
  },
  {
    company: "Upendo Kwanza Inc.",
    role: "Data Analyst",
    period: "Jan 2025 — Dec 2025",
    points: [
      "Designed data pipelines processing 5M+ records daily using Spark and Airflow with 99.9% SLA uptime",
      "Built real-time analytics dashboard reducing reporting latency from 6 hours to <2 seconds",
      "Implemented data quality framework catching 95% of anomalies before downstream impact — saving 200+ engineering hours/quarter",
      "Optimized Redshift queries and cluster configuration, resulting in $120K annual cost savings (40% reduction)",
    ],
  },
  {
    company: "Community First Credit Union of Florida",
    role: "Programmer",
    period: "Jun 2024 — Oct 2024",
    points: [
      "Developed NLP models achieving 94% accuracy on sentiment analysis, processing 2M customer reviews/day",
      "Built recommendation engine increasing user engagement by 35% and driving $2.4M incremental annual revenue",
      "Created automated fraud detection pipeline processing 10M+ transactions daily with 0.02% false positive rate",
      "Published research on transfer learning for low-resource NLP at EMNLP workshop (cited 45+ times)",
    ],
  },
  {
    company: "University of North Florida",
    role: "Graduate Research Assistant",
    period: "Aug 2023 — Dec 2024",
    points: [
      "Assisted in teaching Data Structures and Algorithms course to 150+ students, leading weekly recitations and office hours",
      "Developed automated grading scripts using Python, reducing grading time by 80% and providing instant feedback to students",
      "Received positive feedback from 95% of students for clarity and helpfulness in course evaluations",
    ],
  },
  {
    company: "Supernova Hub",
    role: "Software Engineer",
    period: "Jul 2022 — Apr 2024",
    points: [
      "Built MVP from scratch serving 10K+ users with sub-200ms API response times using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines reducing deployment time from 4 hours to 8 minutes with zero-downtime deployments",
      "Developed RESTful APIs and GraphQL endpoints handling 500K+ requests/day for mobile and web clients",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section-padding max-w-4xl mx-auto">
      <SectionHeading number="03" title="Where I've Worked" />

      <div className="flex flex-col md:flex-row gap-0 md:gap-8">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
          {experiences.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setActive(i)}
              className={`px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${active === i
                ? "text-primary border-primary bg-primary/5"
                : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50"
                }`}
            >
              {e.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="pt-6 md:pt-0"
        >
          <h3 className="text-lg font-semibold text-foreground">
            {experiences[active].role}{" "}
            <span className="text-primary">@ {experiences[active].company}</span>
          </h3>
          <p className="font-mono text-sm text-muted-foreground mt-1 mb-5">
            {experiences[active].period}
          </p>
          <ul className="space-y-3">
            {experiences[active].points.map((p, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1.5 shrink-0">▹</span>
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
