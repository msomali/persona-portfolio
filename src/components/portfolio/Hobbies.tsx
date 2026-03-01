import { motion } from "framer-motion";
import { Camera, Mountain, Gamepad2, BookOpen, Music, Coffee, Medal, CookingPot } from "lucide-react";
import SectionHeading from "./SectionHeading";

const hobbies = [
  { icon: Mountain, title: "Hiking & Trekking", desc: "Summited 15+ peaks across the Rockies and Alps" },
  { icon: Camera, title: "Photography", desc: "Landscape and astrophotography — featured on Unsplash" },
  { icon: Gamepad2, title: "Game Dev", desc: "Building indie games with Godot and Unity on weekends" },
  { icon: BookOpen, title: "Reading", desc: "50+ books/year — sci-fi, systems thinking, philosophy" },
  { icon: Medal, title: "Football Player", desc: "Competitive amateur football player in local leagues" },
  { icon: CookingPot, title: "Specialty Chef", desc: "Home chef — swahili, african, and indian flavors" },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="07" title="Beyond Code" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
          >
            <h.icon className="text-primary mb-3" size={24} />
            <h4 className="font-semibold text-foreground text-sm mb-1">{h.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
