import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Dart", "SQL", "C#", "Bash"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Next.js", "FastAPI", "Django", "gRPC", "GraphQL", "PHP", ".NET"],
  },
  {
    title: "Data Engineering",
    skills: ["Spark", "Airflow", "dbt", "Kafka", "dlt", "Dagster", "Data Modeling", "ETL/ELT"],
  },
  {
    title: "Machine Learning",
    skills: ["scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "MLflow", "Deep Learning", "NLP", "Computer Vision", "Agentic AI", "Generative AI"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "MSSQL", "Redshift", "RDS", "DynamoDB", "Snowflake", "DuckDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Terraform", "CI/CD", "GitHub Actions", "Azure", "GCP", "Azure DevOps", "Oracle Cloud"],
  },
];

export default function TechRadar() {
  return (
    <section id="tech" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="02" title="Tech Stack Radar" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
          >
            <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(s => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-xs font-mono bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
