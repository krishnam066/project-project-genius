
import { Hero } from "@/components/ui/animated-hero";
import Navigation from "@/components/Navigation";
import ProjectCategories from "@/components/ProjectCategories";
import ProjectsListing from "@/components/ProjectsListing";
import RequestProject from "@/components/RequestProject";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <ProjectCategories />
      <ProjectsListing />
      <RequestProject />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
