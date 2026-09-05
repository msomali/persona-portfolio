import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="04" title="Case Studies" />

      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl -mt-6 mb-10">
        The systems worth explaining rather than listing. Same work as the platform entries above, taken apart:
        what the constraint was, which option I rejected, and what I gave up to get the one I shipped.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08 }}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <Link
              to={`/case-studies/${cs.slug}`}
              className="group flex flex-col h-full bg-card border border-border rounded-xl p-6 md:p-7 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-primary/70 mb-2">{cs.context}</p>
              <h3 className="text-base md:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                {cs.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{cs.summary}</p>

              <div className="flex flex-wrap items-center gap-2 mt-5">
                <Layers size={13} className="text-primary/60 mr-0.5" />
                {cs.stack.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-1 rounded border border-primary/20 bg-primary/5 text-primary/90"
                  >
                    {t}
                  </span>
                ))}
                {cs.stack.length > 5 && (
                  <span className="font-mono text-[11px] text-muted-foreground/60">
                    +{cs.stack.length - 5} more
                  </span>
                )}
              </div>

              <span className="inline-flex items-center gap-1.5 mt-5 font-mono text-xs text-primary">
                Read the case study
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
