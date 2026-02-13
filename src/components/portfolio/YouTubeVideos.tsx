import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const videos = [
  {
    title: "System Design: Building a Real-Time Analytics Platform",
    views: "45K views",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://youtube.com",
  },
  {
    title: "Apache Spark Optimization Tips You Need to Know",
    views: "32K views",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://youtube.com",
  },
  {
    title: "Docker + Kubernetes for Data Engineers — Full Tutorial",
    views: "78K views",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://youtube.com",
  },
];

export default function YouTubeVideos() {
  return (
    <section id="videos" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="05" title="YouTube" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((v, i) => (
          <motion.a
            key={v.title}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="aspect-video bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play size={20} className="text-primary ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-4 bg-card">
              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                {v.title}
              </h4>
              <p className="text-xs text-muted-foreground font-mono">{v.views}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
