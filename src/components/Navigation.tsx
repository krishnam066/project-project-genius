
import { useState } from "react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Home, PhoneCall, ArrowDown } from "lucide-react";

function Navigation() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const tabs = [
    { title: "Home", icon: Home },
    { title: "Browse Projects", icon: ArrowDown },
    { type: "separator" as const },
    { title: "Request Project", icon: PhoneCall },
  ];

  const handleTabChange = (index: number | null) => {
    setActiveTab(index);
    if (index === 0) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (index === 1) {
      // Scroll to projects section
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    } else if (index === 3) {
      // Scroll to request section
      const requestSection = document.getElementById('request');
      requestSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <ExpandableTabs 
        tabs={tabs} 
        onChange={handleTabChange}
        className="backdrop-blur-md bg-white/10 border-white/20"
      />
    </div>
  );
}

export default Navigation;
