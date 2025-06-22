
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface Project {
  id: number;
  title: string;
  category: string;
  technology: string;
  description: string;
  image: string;
  price: string;
}

interface ProjectDetailsModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  if (!isOpen) return null;

  const handleWhatsAppContact = () => {
    const message = `Hi, I am interested in the "${project.title}" project. Can you share more details?`;
    const whatsappUrl = `https://wa.me/918000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-slate-800 border-white/10 text-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </Button>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-blue-500 text-white">{project.category}</Badge>
            <span className="text-2xl font-bold text-green-400">{project.price}</span>
          </div>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <CardDescription className="text-gray-300 text-base">
              {project.description}
            </CardDescription>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <p className="text-blue-300 font-medium">{project.technology}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What You'll Get</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Complete source code with documentation</li>
              <li>• Project report and presentation</li>
              <li>• Installation and setup guide</li>
              <li>• Technical support via WhatsApp</li>
              <li>• Video demo of the working project</li>
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <InteractiveHoverButton 
              text="Buy Now"
              onClick={handleWhatsAppContact}
              className="flex-1"
            />
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-white/20 text-white hover:bg-white/10 flex-1"
            >
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectDetailsModal;
