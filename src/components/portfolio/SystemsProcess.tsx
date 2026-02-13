import { motion } from "framer-motion";
import { Database, Workflow, Brain, Server, Layout, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Database,
    title: "Data Ingestion",
    desc: "APIs, streaming, batch systems",
    detail: "Kafka, REST APIs, WebSocket, S3, database CDC",
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    desc: "ETL pipelines, transformations, modeling",
    detail: "Spark, Airflow, dbt, data quality & validation",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Feature engineering, training, evaluation",
    detail: "PyTorch, scikit-learn, XGBoost, MLflow",
  },
  {
    icon: Server,
    title: "Backend Systems",
    desc: "APIs, services, scalability",
    detail: "FastAPI, Node.js, Go, gRPC, microservices",
  },
  {
    icon: Layout,
    title: "Frontend & UX",
    desc: "Dashboards, visualizations",
    detail: "React, D3.js, real-time data views",
  },
  {
    icon: Rocket,
    title: "Deploy & Monitor",
    desc: "Cloud, CI/CD, observability",
    detail: "AWS, Docker, K8s, Prometheus, Grafana",
  },
];

export default function SystemsProcess() {
  return (
    <section id="systems" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="01" title="How I Build Systems" />

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative z-10 group"
            >
              <div className="bg-card border border-border rounded-lg p-4 h-full hover:border-primary/40 hover:bg-surface-hover transition-all duration-300 text-center">
                {/* Step number */}
                <span className="font-mono text-[10px] text-primary/50 block mb-2">0{i + 1}</span>
                <step.icon className="text-primary mx-auto mb-3" size={24} />
                <h4 className="text-xs font-semibold text-foreground mb-1 leading-tight">{step.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-snug mb-2">{step.desc}</p>
                <p className="text-[10px] text-muted-foreground/60 font-mono leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
                  {step.detail}
                </p>
              </div>
              {/* Arrow connector on lg */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 text-border text-xs -translate-y-1/2 z-20">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
