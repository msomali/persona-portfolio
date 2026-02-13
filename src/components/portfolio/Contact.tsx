import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-padding max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-4">08. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          I'm always open to new opportunities, interesting projects, and great conversations.
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <a
          href="mailto:waleed92@live.com"
          className="inline-flex items-center px-8 py-4 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 transition-colors"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
