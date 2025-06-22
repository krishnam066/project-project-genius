
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["innovative", "cutting-edge", "professional", "custom", "ready-made"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleBrowseProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestProject = () => {
    const requestSection = document.getElementById('request');
    requestSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
              🎓 Final Year Projects Made Easy <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular text-white">
              <span className="text-blue-400">Get Your</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-white">Project Done Easily</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-3xl text-center">
              Specializing in AI/ML, Cybersecurity, CSE, and NLP projects for students. 
              Choose from our ready-made solutions or request a custom project tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <GradientButton 
              onClick={handleBrowseProjects}
              className="gap-4"
            >
              Browse Available Projects <ArrowRight className="w-4 h-4" />
            </GradientButton>
            <GradientButton 
              variant="variant"
              onClick={handleRequestProject} 
              className="gap-4"
            >
              Request Your Own Project <PhoneCall className="w-4 h-4" />
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
