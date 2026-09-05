import { motion } from "framer-motion";
import { ExternalLink, Clock, Package } from "lucide-react";
import SectionHeading from "./SectionHeading";

const posts = [
  {
    title: "Migrating a Manual Python Pipeline to dbt + Dagster Without Breaking Reports",
    excerpt: "2,000 lines of pandas on a single Windows laptop, replaced layer by layer — while the reports it produced stayed byte-for-byte identical.",
    date: "Mar 2026",
    readTime: "11 min read",
    url: "https://medium.com/@msomali/migrating-a-manual-python-pipeline-to-dbt-dagster-without-breaking-reports-8ec9ca5be0d8",
    tags: ["Data Engineering", "dbt", "Dagster", "Migration"],
  },
  {
    title: "Building a Production Data Pipeline with dlt, dbt, and Dagster for Under $30/Month",
    excerpt: "A complete walkthrough of an end-to-end ELT pipeline — from four live APIs to a styled Excel report, deployed on AWS ECS Fargate.",
    date: "Feb 2026",
    readTime: "9 min read",
    url: "https://medium.com/@msomali/building-a-production-data-pipeline-with-dlt-dbt-and-dagster-for-under-30-month-a1d759d6072b",
    tags: ["Data Engineering", "Modern Data Stack", "AWS", "dbt dlt", "Dagster"],
  },
  {
    title: "Building Your First ETL Pipeline: A Beginner’s Guide to Extracting, Transforming, and Loading Real-World Data",
    excerpt: "Extract, transform, load — built from scratch against a live API, with the schema decisions and the beginner mistakes left in.",
    date: "Nov 2025",
    readTime: "7 min read",
    url: "https://medium.com/@msomali/building-your-first-etl-pipeline-a-beginners-guide-to-extracting-transforming-and-loading-a49bb19a0058",
    tags: ["Data Engineering", "ETL", "Python", "PostgreSQL", "Beginner Guide"],
  },
  {
    title: "Introducing shimmer_progress_bar : A Customizable, Animated Progress Indicator for Flutter",
    excerpt: "A customizable animated progress bar widget for Flutter with shimmer effects, percentage display, and accessibility support.",
    date: "May 2025",
    readTime: "3 min read",
    url: "https://medium.com/@msomali/introducing-shimmer-progress-bar-a-customizable-animated-progress-indicator-for-flutter-9dddb4046a9b",
    package: { label: "shimmer_progress_bar on pub.dev", href: "https://pub.dev/packages/shimmer_progress_bar" },
    tags: ["Flutter/Dart", "Mobile Development", "Open Source", "Custom Components"],
  },
  {
    title: "Creating Azure DevOps Work Items Using the REST API: A Quick Guide",
    excerpt: "Automate Azure DevOps work item creation using Python and REST API. A step-by-step instructions to streamline workflows and boost productivity.",
    date: "Oct 2024",
    readTime: "6 min read",
    url: "https://medium.com/@msomali/creating-azure-devops-work-items-using-the-rest-api-a-quick-guide-9c8b9aa47228",
    tags: ["Azure DevOps", "Work Item", "DevOps Training", "Agile Methodology", "Rest API"],
  }
];

export default function BlogPosts() {
  return (
    <section id="blog" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="07" title="Technical Deep Dives" />

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
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded text-xs font-mono bg-secondary text-primary/70">
                  {t}
                </span>
              ))}
            </div>
            {post.package && (
              <span
                role="link"
                tabIndex={0}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(post.package!.href, "_blank", "noopener,noreferrer"); }}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); window.open(post.package!.href, "_blank", "noopener,noreferrer"); } }}
                className="inline-flex items-center gap-1.5 mt-4 py-1 font-mono text-[11px] text-primary hover:underline underline-offset-4 cursor-pointer"
              >
                <Package size={12} />
                {post.package.label}
              </span>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
