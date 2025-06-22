
import { PhoneCall, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const message = "Hi! I would like to know more about your final year projects.";
    const whatsappUrl = `https://wa.me/918000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = "Inquiry about Final Year Projects";
    const body = "Hi! I would like to know more about your final year projects.";
    const mailtoUrl = `mailto:projects@yourcompany.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Final Year Projects Hub
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for high-quality final year projects. We specialize in 
              AI/ML, Cybersecurity, CSE, and NLP projects that help students achieve excellent grades.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppContact}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <PhoneCall className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleEmailContact}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Browse Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Request Project
                </button>
              </li>
              <li>
                <button 
                  onClick={handleWhatsAppContact}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI/ML Projects</li>
              <li>Cybersecurity Projects</li>
              <li>NLP Projects</li>
              <li>Data Science Projects</li>
              <li>CSE Core Projects</li>
              <li>Custom Development</li>
              <li>Project Support</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Final Year Projects Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
