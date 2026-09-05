import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(172 66% 50%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="max-w-4xl relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-primary mb-5 text-sm md:text-base"
        >
          Walid Kambagha &middot; Senior Data &amp; AI Engineer &middot; Los Angeles, CA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-[3.4rem] font-bold text-foreground leading-[1.08]"
        >
          I build the data platforms a business runs on —{" "}
          <span className="text-gradient">and the AI that sits on top of them.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="mt-6 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed"
        >
          Ten years shipping production systems, the last three in data. I've been the{" "}
          <span className="text-foreground font-medium">first data hire at two organizations</span> and
          built both platforms from an empty cloud account — ingestion and orchestration through to the
          models and dashboards on top.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
        >
          {[
            ["10 yrs", "engineering"],
            ["2", "platforms from zero"],
            ["5M+", "citizens served"],
            ["4.0", "M.Sc. Data Science"],
          ].map(([n, l]) => (
            <div key={l} className="border-l-2 border-primary/40 pl-3">
              <p className="text-xl md:text-2xl font-bold text-foreground leading-none">{n}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1.5 leading-snug">
                {l}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52 }}
          className="mt-7 flex flex-wrap gap-2 max-w-3xl"
        >
          {["PySpark", "Dagster", "dbt", "Kafka", "FastAPI", "PostgreSQL", "PyTorch", "RAG / LLMs", "AWS", "Docker"].map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded border border-primary/20 bg-primary/5 text-primary/90"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58 }}
          className="mt-8 flex items-start gap-2.5 font-mono text-xs sm:text-sm text-muted-foreground"
        >
          <span className="relative flex h-2 w-2 mt-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span>
            <span className="text-foreground">Open to new roles</span> &mdash; remote, hybrid, or on-site.
            <span className="block sm:inline sm:ml-1 text-muted-foreground/70">
              CA &middot; WA &middot; TX &middot; CO &middot; NY &middot; NJ &middot; MA &middot; IL &middot; FL &middot; GA
            </span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Contact Me
            <MessageSquare size={16} />
          </a>
          <div className="flex items-center gap-4 ml-2">
            {[
              { icon: Github, href: "https://github.com/msomali", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/walidaak", label: "LinkedIn" },
              { icon: Mail, href: "mailto:waleed92@live.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 -m-2.5 text-muted-foreground hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
