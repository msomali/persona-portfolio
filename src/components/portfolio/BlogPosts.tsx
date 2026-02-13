import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";

const posts = [
  {
    title: "Designing Scalable ETL Systems: Lessons from Processing 5M Events/sec",
    excerpt: "A deep dive into partitioning strategies, backpressure mechanisms, and exactly-once semantics in distributed data pipelines.",
    date: "Dec 2024",
    readTime: "14 min read",
    url: "https://medium.com",
    tags: ["Data Engineering", "Architecture"],
  },
  {
    title: "Serving ML Models in Production: Beyond the Jupyter Notebook",
    excerpt: "From model registry to canary deployments — the operational patterns that make ML systems reliable at scale.",
    date: "Oct 2024",
    readTime: "11 min read",
    url: "https://medium.com",
    tags: ["MLOps", "Production"],
  },
  {
    title: "Data Modeling Tradeoffs: Star Schema vs. Wide Tables in Analytics",
    excerpt: "When to normalize, when to denormalize, and how your query patterns should drive schema decisions.",
    date: "Aug 2024",
    readTime: "9 min read",
    url: "https://medium.com",
    tags: ["SQL", "Data Modeling"],
  },
  {
    title: "Cloud Cost Optimization: How We Cut Our AWS Bill by 40%",
    excerpt: "Right-sizing instances, spot strategies, and architectural changes that saved $120K/year without sacrificing performance.",
    date: "Jun 2024",
    readTime: "8 min read",
    url: "https://medium.com",
    tags: ["AWS", "Cost Optimization"],
  },
];

export default function BlogPosts() {
  return (
    <section id="blog" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="06" title="Technical Deep Dives" />

      <div className="grid md:grid-cols-2 gap-5">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
              {post.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex gap-2">
              {post.tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded text-xs font-mono bg-secondary text-primary/70">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
