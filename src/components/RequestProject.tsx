
import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Rocket } from "lucide-react";

function RequestProject() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    department: "",
    projectIdea: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I want to request a custom project:
    
Name: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Department: ${formData.department}
Project Idea: ${formData.projectIdea}
Requirements: ${formData.requirements}`;

    const whatsappUrl = `https://wa.me/918000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleChatDirectly = () => {
    const whatsappUrl = `https://wa.me/918000000000?text=Hi, I want to discuss a custom project.`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="request" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        {!showForm ? (
          // Initial view with just buttons and info
          <div className="text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Request Your Custom Project
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Can't find what you're looking for? Tell us your requirements and we'll create a custom project just for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <RainbowButton 
                  onClick={() => setShowForm(true)}
                  className="text-lg px-8 py-4 h-auto"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Request Custom Project
                </RainbowButton>
                
                <RainbowButton 
                  onClick={handleChatDirectly}
                  className="text-lg px-8 py-4 h-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat Directly
                </RainbowButton>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-3">Quick Turnaround</h3>
                <p className="text-gray-300">Most projects delivered within 7-15 days</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="text-4xl mb-4">💯</div>
                <h3 className="text-xl font-semibold text-white mb-3">100% Original</h3>
                <p className="text-gray-300">Completely original code written from scratch</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Full Support</h3>
                <p className="text-gray-300">Complete documentation and technical support</p>
              </div>
            </div>
          </div>
        ) : (
          // Form view
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Request Your Custom Project
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you with a personalized quote.
              </p>
            </div>

            <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Custom Project Request</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you with a personalized quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-white">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-white">Department/Branch *</Label>
                    <Input
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="e.g., Computer Science, IT, ECE"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="projectIdea" className="text-white">Project Idea/Domain *</Label>
                    <Input
                      id="projectIdea"
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="e.g., AI-powered chatbot, E-commerce website, Mobile app"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="requirements" className="text-white">Detailed Requirements</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Please describe your project requirements, expected features, timeline, and any specific technologies you'd like to use..."
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-center pt-6">
                    <RainbowButton type="submit" className="text-lg px-8 py-3">
                      <Rocket className="w-5 h-5 mr-2" />
                      Submit Request
                    </RainbowButton>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}

export default RequestProject;
