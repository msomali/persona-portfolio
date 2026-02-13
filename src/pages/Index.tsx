import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import SystemsProcess from "@/components/portfolio/SystemsProcess";
import TechRadar from "@/components/portfolio/TechRadar";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import CaseStudies from "@/components/portfolio/CaseStudies";
import BlogPosts from "@/components/portfolio/BlogPosts";
import YouTubeVideos from "@/components/portfolio/YouTubeVideos";
import GitHubRepos from "@/components/portfolio/GitHubRepos";
import Hobbies from "@/components/portfolio/Hobbies";
import Exploring from "@/components/portfolio/Exploring";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SystemsProcess />
        <TechRadar />
        <Experience />
        <Projects />
        <CaseStudies />
        <BlogPosts />
        <YouTubeVideos />
        <GitHubRepos />
        <Hobbies />
        <Exploring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
