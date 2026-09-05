import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Core = used in shipped, production work (traceable to a repo or a role).
// Familiar = real exposure, not what I'd claim depth in.
const categories = [
  { title: "Languages", skills: ["Python", "TypeScript", "SQL / T-SQL", "Dart", "C#", "Bash"] },
  { title: "Data Engineering", skills: ["PySpark", "Airflow", "Dagster", "dbt", "dlt", "Kafka", "Medallion Lakehouse", "ETL / ELT"] },
  { title: "ML & AI", skills: ["PyTorch", "YOLO", "RAG", "pgvector", "OpenAI", "Anthropic", "Computer Vision", "MLOps"] },
  { title: "Backend", skills: ["FastAPI", "Next.js", ".NET", "SQLAlchemy", "REST APIs", "Microservices"] },
  { title: "Databases & BI", skills: ["PostgreSQL", "SQL Server", "Oracle", "Redis", "Power BI", "Streamlit", "Tableau"] },
  { title: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps", "Linux"] },
];

const familiar = [
  "scikit-learn", "XGBoost", "TensorFlow", "MLflow", "Django", "GraphQL", "gRPC",
  "MongoDB", "MySQL", "Snowflake", "DuckDB", "Redshift", "DynamoDB", "GCP", "PHP",
];

export default function TechRadar() {
  return (
    <section id="tech" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="06" title="Tech Stack" />

      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl -mt-6 mb-10">
        What I'd defend in a live interview, grouped by where I actually use it. Everything below is traceable to a
        role or a repo — the honest second tier is at the bottom.
      </p>

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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 pt-6 border-t border-border"
      >
        <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Also worked with
        </h4>
        <div className="flex flex-wrap gap-2">
          {familiar.map((s) => (
            <span key={s} className="px-2.5 py-1 rounded-full text-[11px] font-mono text-muted-foreground/60 border border-border">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
