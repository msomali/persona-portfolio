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
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight"
        >
          I build intelligent, scalable systems —{" "}
          <span className="text-gradient">from raw data to production-ready applications.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed"
        >
          I design and ship end-to-end systems that transform data into reliable, performant,
          and impactful software. Bridging{" "}
          <span className="text-foreground font-medium">Software Engineering</span>,{" "}
          <span className="text-foreground font-medium">Data Engineering</span>, and{" "}
          <span className="text-foreground font-medium">Data Science</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-7 flex items-start gap-2.5 font-mono text-xs sm:text-sm text-muted-foreground"
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
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-200"
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
