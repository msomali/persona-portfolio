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
          Hi, my name is Walid Kambagha
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
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View Projects
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
