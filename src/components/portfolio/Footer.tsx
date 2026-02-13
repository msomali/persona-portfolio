import { Github, Linkedin, Twitter, Youtube, BookOpen } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/msomali" },
  { icon: Linkedin, href: "https://linkedin.com/in/walidaak" },
  { icon: Twitter, href: "https://x.com/waka_walid" },
  { icon: Youtube, href: "https://youtube.com/@walidkambagha" },
  { icon: BookOpen, href: "https://medium.com/@msomali" },
];

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      {/* Social icons for mobile */}
      <div className="flex justify-center gap-5 mb-6 md:hidden">
        {socials.map(({ icon: Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Fixed side elements for desktop */}
      <div className="hidden md:flex flex-col items-center gap-3 fixed bottom-0 left-10">
        {socials.map(({ icon: Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all">
            <Icon size={18} />
          </a>
        ))}
        <div className="w-px h-24 bg-muted-foreground/30 mt-2" />
      </div>

      <div className="hidden md:flex flex-col items-center gap-3 fixed bottom-0 right-10">
        <a href="mailto:waleed92@live.com" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors [writing-mode:vertical-lr]">
          waleed92@live.com
        </a>
        <div className="w-px h-24 bg-muted-foreground/30 mt-2" />
      </div>

      <p className="font-mono text-xs text-muted-foreground">
        Designed & Built by Walid Kambagha
      </p>
    </footer>
  );
}
