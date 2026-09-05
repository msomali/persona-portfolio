import { motion } from "framer-motion";
import { FileText, ExternalLink, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const works = [
  {
    type: "M.Sc. Thesis",
    icon: GraduationCap,
    title:
      "Comparative Analysis: Advanced Model Improvements from YOLOv8, YOLOv9 and YOLOv10 in Traffic Analysis",
    venue: "University of North Florida · UNF Graduate Theses and Dissertations, No. 1305",
    year: "2024",
    authors: "Walid Kambagha",
    detail:
      "Adapted three YOLO architectures for urban traffic monitoring on FDOT CCTV footage from six I-295 corridor locations in Jacksonville, then ran three escalating experiments — baseline, spatial/structural augmentation, and combined environmental variability — across AdamW and SGD. The finding that matters is not that one model won: YOLOv8 held the best precision on constrained hardware, YOLOv9 the best recall, YOLOv10 the best F1 under degraded lighting and weather. The contribution is a defensible basis for choosing between them per deployment.",
    tags: ["Computer Vision", "YOLOv8/v9/v10", "PyTorch", "Model Evaluation"],
    href: "https://digitalcommons.unf.edu/etd/1305/",
    linkLabel: "UNF Digital Commons",
  },
  {
    type: "Commissioned Research Report",
    icon: FileText,
    title:
      "Review of Smart Features of Buildings and Systems Impacting Fire, Electrical and Life Safety",
    venue: "Fire Protection Research Foundation (NFPA) · University of North Florida",
    year: "July 2025",
    authors:
      "A. Jiang, A. Leiva Araos, C. Hayes, H. Kaushal, V. S. Kalasapudi, W. Kambagha, Z. Prodanoff",
    detail:
      "A 195-page review, commissioned by the NFPA's Fire Protection Research Foundation under the SFPE Grand Challenges Initiative, mapping how smart and connected building systems change fire, electrical, and life safety — including the cyber risk that arrives with the connectivity.",
    tags: ["Applied Research", "Smart Buildings", "Systems Review"],
    href: "https://www.nfpa.org/education-and-research/research/fire-protection-research-foundation/projects-and-reports/review-of-smart-features-of-buildings-and-systems-impacting-fire-electrical-and-life-safety",
    linkLabel: "NFPA Research Foundation",
  },
];

export default function Publications() {
  return (
    <section id="research" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="07" title="Research & Publications" />

      <div className="space-y-5">
        {works.map((w, i) => (
          <motion.article
            key={w.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/25 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <w.icon className="text-primary shrink-0 mt-1" size={20} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary/70 border border-primary/20 bg-primary/5 rounded px-2 py-0.5">
                    {w.type}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
                </div>

                <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">
                  {w.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mt-1.5">{w.venue}</p>
                <p className="text-xs text-muted-foreground/80 mt-1 italic">{w.authors}</p>

                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{w.detail}</p>

                <div className="flex flex-wrap items-center gap-2 mt-5">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-1 rounded border border-primary/20 bg-primary/5 text-primary/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-5 font-mono text-xs text-primary hover:underline underline-offset-4"
                >
                  {w.linkLabel}
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
