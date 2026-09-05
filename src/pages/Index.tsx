import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import TechRadar from "@/components/portfolio/TechRadar";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import CaseStudies from "@/components/portfolio/CaseStudies";
import Publications from "@/components/portfolio/Publications";
import BlogPosts from "@/components/portfolio/BlogPosts";
import Beyond from "@/components/portfolio/Beyond";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const { hash } = useLocation();

  // Arriving from a case-study page carries a #hash the router won't scroll to on its own.
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CaseStudies />
        <Publications />
        <TechRadar />
        <BlogPosts />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
