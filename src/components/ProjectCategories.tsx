
import { HoverEffect } from "@/components/ui/hover-effect";

const categories = [
  {
    title: "AI/ML Projects",
    description: "Machine Learning algorithms, Deep Learning models, Computer Vision, and AI-powered applications ready for implementation.",
    icon: "🧠",
    link: "#projects"
  },
  {
    title: "Cybersecurity",
    description: "Network security systems, Penetration testing tools, Encryption algorithms, and Security audit applications.",
    icon: "🛡️",
    link: "#projects"
  },
  {
    title: "NLP Projects",
    description: "Natural Language Processing, Text Analysis, Chatbots, Sentiment Analysis, and Language Translation systems.",
    icon: "🧾",
    link: "#projects"
  },
  {
    title: "Data Science",
    description: "Data Analytics, Visualization dashboards, Statistical modeling, and Big Data processing solutions.",
    icon: "📊",
    link: "#projects"
  },
  {
    title: "CSE Core Projects",
    description: "Web Development, Mobile Apps, Database Management, System Design, and Software Engineering projects.",
    icon: "💻",
    link: "#projects"
  },
  {
    title: "Others",
    description: "IoT projects, Blockchain applications, Game development, and other innovative technology solutions.",
    icon: "➕",
    link: "#projects"
  }
];

function ProjectCategories() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of final year projects across different domains. 
            Each category offers both ready-made solutions and custom development options.
          </p>
        </div>
        
        <HoverEffect items={categories} className="max-w-6xl mx-auto" />
      </div>
    </section>
  );
}

export default ProjectCategories;
