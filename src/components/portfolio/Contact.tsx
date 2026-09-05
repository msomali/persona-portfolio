import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, FileText, MapPin } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "waleed92@live.com", href: "mailto:waleed92@live.com" },
  { icon: Phone, label: "Phone", value: "(904) 846-1719", href: "tel:+19048461719" },
  { icon: Linkedin, label: "LinkedIn", value: "in/walidaak", href: "https://linkedin.com/in/walidaak" },
  { icon: Github, label: "GitHub", value: "@msomali", href: "https://github.com/msomali" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-4">09. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Let's Talk</h2>

        <p className="text-muted-foreground leading-relaxed mb-3 max-w-xl mx-auto">
          I'm open to Senior Data Engineering, AI/ML Engineering, and Analytics Engineering roles —
          remote, hybrid, or on-site. If you're building something where the data actually has to be
          trusted, I'd like to hear about it.
        </p>
        <p className="font-mono text-xs text-muted-foreground/70 mb-10 inline-flex items-center gap-1.5">
          <MapPin size={12} className="text-primary" />
          Los Angeles, CA · open to CA, WA, TX, CO, NY, NJ, MA, IL, FL, GA
        </p>

        <div className="grid sm:grid-cols-2 gap-3 text-left mb-10">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/40 transition-all duration-300"
            >
              <Icon size={17} className="text-primary shrink-0" />
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  {label}
                </span>
                <span className="block text-sm text-foreground truncate group-hover:text-primary transition-colors">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:waleed92@live.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail size={16} />
            Send me an email
          </a>
          <a
            href="/WalidKambaghaResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            <FileText size={16} />
            Download resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
