import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layers, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = idx >= 0 ? caseStudies[(idx + 1) % caseStudies.length] : undefined;

  useEffect(() => {
    if (!cs) return;
    const prev = document.title;
    document.title = `${cs.title} — Walid Kambagha`;
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [cs]);

  if (!cs) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            All case studies
          </Link>
          <Link to="/" className="font-mono text-primary font-bold text-base tracking-tight">
            {"<waka />"}
          </Link>
        </div>
      </header>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto px-6 py-14 md:py-20"
      >
        <p className="font-mono text-xs uppercase tracking-wider text-primary/70">{cs.context}</p>
        <h1 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mt-3">{cs.title}</h1>

        <p className="text-base text-muted-foreground leading-relaxed mt-7 border-l-2 border-primary/40 pl-5">
          {cs.summary}
        </p>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-5">Decisions &amp; Why</h2>
          <ul className="space-y-4">
            {cs.decisions.map((d, j) => (
              <li key={j} className="flex gap-3.5 text-[15px] text-muted-foreground leading-relaxed">
                <ArrowRight size={15} className="text-primary shrink-0 mt-1.5" />
                {d}
              </li>
            ))}
          </ul>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-3">What I Traded Away</h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{cs.tradeoffs}</p>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-3">Where It Landed</h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{cs.outcome}</p>
          </section>
        </div>

        <section className="mt-12 bg-card border border-border rounded-xl p-6 md:p-7">
          <h2 className="font-mono text-xs uppercase tracking-wider text-primary mb-3">What I Took From It</h2>
          <p className="text-[15px] text-foreground/85 leading-relaxed italic">{cs.lesson}</p>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-center gap-2">
            <Layers size={14} className="text-primary/60 mr-1" />
            {cs.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded border border-primary/20 bg-primary/5 text-primary/90"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {cs.readMore && (
          <a
            href={cs.readMore.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-9 font-mono text-sm text-primary hover:underline underline-offset-4"
          >
            {cs.readMore.label}
            <ExternalLink size={14} />
          </a>
        )}

        <nav className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all case studies
          </Link>
          {next && next.slug !== cs.slug && (
            <Link
              to={`/case-studies/${next.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline underline-offset-4 text-right"
            >
              Next: {next.title.split(/[—:?]/)[0].trim()}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          )}
        </nav>
      </motion.article>
    </div>
  );
}
