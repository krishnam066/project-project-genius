
import { useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectDetailsModal from "./ProjectDetailsModal";

const sampleProjects = [
  {
    id: 1,
    title: "Smart Crop Recommendation System",
    category: "AI/ML",
    technology: "Python, TensorFlow, Flask",
    description: "ML-based system that recommends optimal crops based on soil conditions, weather data, and market prices.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
    price: "₹8,999"
  },
  {
    id: 2,
    title: "Network Intrusion Detection System",
    category: "Cybersecurity",
    technology: "Python, Wireshark, Machine Learning",
    description: "Real-time network monitoring system that detects and prevents unauthorized access attempts.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    price: "₹12,999"
  },
  {
    id: 3,
    title: "Sentiment Analysis Chatbot",
    category: "NLP",
    technology: "Python, NLTK, TensorFlow, React",
    description: "Intelligent chatbot that analyzes user sentiment and provides contextual responses.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
    price: "₹10,999"
  },
  {
    id: 4,
    title: "E-commerce Analytics Dashboard",
    category: "Data Science",
    technology: "Python, Pandas, Plotly, Streamlit",
    description: "Comprehensive analytics dashboard for e-commerce businesses with sales predictions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    price: "₹9,999"
  },
  {
    id: 5,
    title: "College Management System",
    category: "CSE Core",
    technology: "React, Node.js, MongoDB, Express",
    description: "Complete web application for managing college operations including students, faculty, and courses.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    price: "₹15,999"
  },
  {
    id: 6,
    title: "IoT Smart Home System",
    category: "Others",
    technology: "Arduino, Raspberry Pi, React Native",
    description: "Complete IoT solution for home automation with mobile app control and voice commands.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    price: "₹18,999"
  }
];

function ProjectsListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = sampleProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleWhatsAppContact = (project: any) => {
    const message = `Hi, I am interested in the "${project.title}" project. Can you share more details?`;
    const whatsappUrl = `https://wa.me/918000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Available Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our collection of ready-made final year projects. Each project comes with complete source code, documentation, and support.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px] bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="AI/ML">AI/ML</SelectItem>
              <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
              <SelectItem value="NLP">NLP</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="CSE Core">CSE Core</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500 text-white">{project.category}</Badge>
                </div>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl mb-2 line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Technologies:</p>
                    <p className="text-sm font-medium text-blue-300 line-clamp-2">{project.technology}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">{project.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewDetails(project)}
                      className="border-white/20 text-white hover:bg-white/10 hover:text-white flex-1"
                    >
                      View Details
                    </Button>
                    <InteractiveHoverButton 
                      text="Buy Now"
                      onClick={() => handleWhatsAppContact(project)}
                      className="text-xs flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        />
      )}
    </section>
  );
}

export default ProjectsListing;
