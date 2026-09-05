import { motion } from "framer-motion";
import { Camera, Mountain, Gamepad2, BookOpen, Music, Coffee, Medal, CookingPot } from "lucide-react";
import SectionHeading from "./SectionHeading";

const hobbies = [
  { icon: Mountain, title: "Hiking & Trekking", desc: "Trails and elevation. The best debugging I do happens nowhere near a screen." },
  { icon: Medal, title: "Football", desc: "Competitive amateur leagues — still convinced I'm quicker than I actually am." },
  { icon: CookingPot, title: "Cooking", desc: "Swahili, East African, and Indian flavours. The food I grew up on, made properly." },
  { icon: Gamepad2, title: "Game Dev", desc: "Weekend builds in Godot and Unity — systems design with an immediate feedback loop." },
  { icon: Camera, title: "Photography", desc: "Landscape and astrophotography. Long exposures are mostly an exercise in patience." },
  { icon: BookOpen, title: "Reading", desc: "Science fiction, systems thinking, and philosophy, in roughly that order." },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="10" title="Beyond Code" />

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
