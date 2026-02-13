import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const topics = [
  { title: "LLM Systems & RAG Pipelines", desc: "Building retrieval-augmented generation architectures for domain-specific knowledge systems" },
  { title: "Vector Databases", desc: "Exploring Pinecone, Weaviate, and pgvector for semantic search at scale" },
  { title: "Streaming Architectures", desc: "Real-time data mesh patterns with Kafka Streams and Apache Flink" },
  { title: "Distributed Systems Design", desc: "Consensus algorithms, CRDTs, and partition-tolerant system patterns" },
  { title: "MLOps & Model Observability", desc: "Feature drift detection, model performance monitoring, and automated retraining loops" },
];

export default function Exploring() {
  return (
    <section id="exploring" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="09" title="What I'm Currently Exploring" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <Sparkles className="text-primary" size={18} />
              <ArrowUpRight size={14} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{t.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
