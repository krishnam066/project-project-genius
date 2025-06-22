
import { useState } from "react";
import { PopoverForm, PopoverFormButton, PopoverFormSuccess } from "@/components/ui/popover-form";

type FormState = "idle" | "loading" | "success";

function RequestProject() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    projectIdea: "",
    requirements: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    
    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
      
      // Create WhatsApp message
      const message = `Hi! I would like to request a custom project.
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Department: ${formData.department}
Project Idea: ${formData.projectIdea}
Requirements: ${formData.requirements}

Please contact me to discuss further details.`;

      const whatsappUrl = `https://wa.me/918000000000?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }, 1500);

    setTimeout(() => {
      setOpen(false);
      setFormState("idle");
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        projectIdea: "",
        requirements: ""
      });
    }, 3300);
  };

  return (
    <section id="request" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request Your Custom Project
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Have a specific project idea in mind? We create custom final year projects tailored to your requirements and college guidelines.
          </p>
          
          <div className="flex justify-center">
            <PopoverForm
              title="Request Custom Project"
              open={open}
              setOpen={setOpen}
              width="420px"
              height="500px"
              showCloseButton={formState !== "success"}
              showSuccess={formState === "success"}
              openChild={
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                      Department/Branch *
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Electronics & Communication">Electronics & Communication</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="projectIdea" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Idea/Area *
                    </label>
                    <input
                      type="text"
                      id="projectIdea"
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleInputChange}
                      placeholder="e.g., Machine Learning, Web Development, Mobile App"
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Describe your project requirements, features needed, technologies preferred..."
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <PopoverFormButton
                      loading={formState === "loading"}
                      text="Submit Request"
                    />
                  </div>
                </form>
              }
              successChild={
                <PopoverFormSuccess
                  title="Request Submitted!"
                  description="Thank you for your request. We'll contact you within 24 hours to discuss your project."
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestProject;
