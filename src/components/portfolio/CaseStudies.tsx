import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const caseStudies = [
  {
    title: "Migrating a Monolith to Event-Driven Architecture",
    summary: "How we decomposed a 500K LOC Python monolith into 12 event-driven microservices serving 50M daily requests — without downtime.",
    decisions: [
      "Chose Kafka over RabbitMQ for exactly-once semantics at scale",
      "Implemented the Strangler Fig pattern for incremental migration",
      "Built a custom service mesh for cross-service observability",
    ],
    tradeoffs: "Accepted eventual consistency in non-critical paths to achieve 10x throughput improvement. Traded deployment simplicity for horizontal scalability.",
    performance: "Latency P99 dropped from 2.1s to 180ms. Infrastructure cost reduced by 35% through right-sizing.",
    lesson: "Start migration from the edges — services with fewest dependencies. Build comprehensive integration tests before touching a single line of production code.",
  },
  {
    title: "Building a Real-Time Feature Store for ML",
    summary: "Designed a low-latency feature store serving 200+ ML models with sub-10ms retrieval — bridging offline training and online inference.",
    decisions: [
      "Dual-storage: Redis for online, Parquet on S3 for offline training",
      "Point-in-time correctness to prevent data leakage in features",
      "Feature versioning with automated drift detection",
    ],
    tradeoffs: "Chose Redis Cluster over DynamoDB for lower tail latency despite higher ops overhead. Accepted storage duplication for read performance.",
    performance: "Feature retrieval P95: 4ms (down from 200ms). Reduced model training data prep from 6 hours to 20 minutes.",
    lesson: "Feature stores are only as good as their data contracts. Invest heavily in schema validation and backward compatibility from day one.",
  },
  {
    title: "Scaling a Data Pipeline from 100K to 5M Events/sec",
    summary: "Evolved a simple Airflow-based ETL into a distributed streaming platform processing 5M events/second with sub-second latency.",
    decisions: [
      "Moved from batch to streaming with Kafka Streams for critical paths",
      "Implemented custom partitioning based on tenant isolation requirements",
      "Built backpressure mechanisms to handle traffic spikes gracefully",
    ],
    tradeoffs: "Maintained batch pipelines for historical reprocessing alongside streaming for real-time — dual architecture with higher complexity but greater resilience.",
    performance: "End-to-end latency: 800ms (from 4 hours batch). Zero data loss during 3x traffic spike events.",
    lesson: "Don't stream everything. Identify which data paths genuinely need real-time processing and keep batch for the rest. Hybrid architectures win.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="05" title="Case Studies" />

      <div className="space-y-8">
        {caseStudies.map((cs, i) => (
          <motion.article
            key={cs.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-4">
              <BookOpen className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-bold text-foreground">{cs.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{cs.summary}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-3">Key Architectural Decisions</h4>
                <ul className="space-y-2">
                  {cs.decisions.map((d, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <ArrowRight size={14} className="text-primary shrink-0 mt-1" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Tradeoffs</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.tradeoffs}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Performance</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.performance}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Lesson Learned</h4>
              <p className="text-sm text-foreground/80 leading-relaxed italic">{cs.lesson}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
