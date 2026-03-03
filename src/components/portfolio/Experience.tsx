import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "CSI Professionals Inc.",
    role: "Data Analyst",
    period: "Dec 2025 — Present",
    points: [
      "Built end-to-end data pipelines using PySpark, Airflow/Dagster, dbt, and Kafka to process 15K+ daily records across two CRM systems, achieving 99.5% data consistency and integrating 5+ external APIs via FastAPI for real-time data synchronization",
      "Architected a medallion lakehouse on AWS S3 and RDS that unified legal operations data, enabling speed-to-lead analytics and call center performance tracking that improved operational efficiency by 40% and eliminated manual reporting bottlenecks across the organization",
      "Deployed production AI systems including GenAI-powered case summarization that cut attorney research time by 60%, an AI agent layer handling 500+ concurrent client inquiries, and a computer vision model at 92% accuracy automating case intake and severity assessment decisions",
      "Built predictive ML models for marketing optimization, reducing client acquisition costs by 35% and improving lead conversion by 28% through data-driven audience segmentation",
      "Delivered real-time Power BI and Streamlit dashboards to legal and operations leadership, translating complex pipeline outputs into actionable business metrics for non-technical stakeholders",
    ],
  },
  {
    company: "Upendo Kwanza Inc.",
    role: "Data Analyst",
    period: "Jan 2025 — Dec 2025",
    points: [
      "Engineered automated ETL pipelines in Python and SQL processing 10K+ student records across three programs, eliminating 35 hours per month of manual reporting and improving data accuracy by 40%",
      "Built a Next.js and FastAPI analytics portal delivering real-time engagement metrics to 200+ staff members, enabling program teams to identify at-risk students 50% faster than before",
      "Optimized data transformation workflows reducing dashboard refresh cycles from 4 hours to 45 minutes, an 81% improvement and established data quality checks catching 95% of anomalies before they reached reporting",
      "Developed Power BI dashboards tracking 15+ KPIs across student engagement, program performance, and outcome metrics, giving leadership the visibility to make faster, evidence-based program decisions",
    ],
  },
  {
    company: "Community First Credit Union of Florida",
    role: "Programmer",
    period: "Jun 2024 — Oct 2024",
    points: [
      "Automated 12 recurring SQL reports using Python, eliminating 25 hours per week of manual data extraction and freeing the analyst team to focus on higher-value work",
      "Developed data validation scripts that detected $150K+ in potential processing errors within the first four months a direct financial risk mitigation contribution",
      "Built .NET applications processing 5K+ daily loan transactions at 99.8% accuracy, improving loan approval speed by 30% and streamlining critical financial workflows across the credit union",
      "Deployed Power Automate workflows that reduced operational overhead by 40% across three business units, improving process efficiency and enabling staff to redirect time toward member services",
    ],
  },
  {
    company: "University of North Florida",
    role: "Graduate Research Assistant",
    period: "Aug 2023 — Dec 2024",
    points: [
      "Designed PySpark and Airflow ETL pipelines that ingested 250+ GB of cross-institutional traffic data from 5 sites, reducing processing time by 60% and supporting a PostgreSQL data warehouse handling 50+ concurrent analytical queries",
      "Developed YOLO-based computer vision models to process 100K+ traffic images, generating vehicle classification and movement insights that directly informed urban planning decisions for city stakeholders",
      "Built an automated ML evaluation framework that reduced model experiment cycles from 8 hours to 90 minutes, significantly accelerating research iteration velocity across the team",
      "Architected normalized data schemas and automated reporting pipelines that made analytical outputs reproducible and shareable across partner institutions a key requirement for federally-adjacent research work",
    ],
  },
  {
    company: "Supernova Hub",
    role: "Software Engineer",
    period: "Jul 2022 — Apr 2024",
    points: [
      "Delivered Flutter mobile applications to 100K+ users across iOS and Android, implementing modular architecture patterns that improved app performance by 20% and made the codebase significantly easier to maintain and extend",
      "Integrated real-time analytics dashboards and AI-driven features into production apps, boosting operational efficiency by 20% and giving product teams the data visibility needed to make informed roadmap decisions",
      "Architected Azure DevOps CI/CD pipelines using Docker and Fastlane, cutting release cycles by 30% and establishing automated deployment workflows that enabled continuous delivery across multiple concurrent product lines",
      "Led the frontend engineering team through structured code reviews and pair programming, raising code quality standards and reducing bug rates across multiple product releases",
      "Collaborated asynchronously across time zones with European clients and cross-functional teams building the remote communication and documentation discipline that carries into every role since",
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
