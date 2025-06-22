
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "AI/ML Projects",
    description: "Machine Learning algorithms, Deep Learning models, Computer Vision, and AI-powered applications ready for implementation.",
    icon: "🧠",
    id: "ai-ml"
  },
  {
    title: "Cybersecurity",
    description: "Network security systems, Penetration testing tools, Encryption algorithms, and Security audit applications.",
    icon: "🛡️",
    id: "cybersecurity"
  },
  {
    title: "NLP Projects",
    description: "Natural Language Processing, Text Analysis, Chatbots, Sentiment Analysis, and Language Translation systems.",
    icon: "🧾",
    id: "nlp"
  },
  {
    title: "Data Science",
    description: "Data Analytics, Visualization dashboards, Statistical modeling, and Big Data processing solutions.",
    icon: "📊",
    id: "data-science"
  },
  {
    title: "CSE Core Projects",
    description: "Web Development, Mobile Apps, Database Management, System Design, and Software Engineering projects.",
    icon: "💻",
    id: "cse-core"
  },
  {
    title: "Others",
    description: "IoT projects, Blockchain applications, Game development, and other innovative technology solutions.",
    icon: "➕",
    id: "others"
  }
];

interface GridItemProps {
  area: string;
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

const GridItem = ({ area, icon, title, description, onClick }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none cursor-pointer", area)} onClick={onClick}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/20 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-slate-800/50 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-white/20 bg-slate-700/50 p-2">
              <span className="text-2xl">{icon}</span>
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

function ProjectCategories() {
  const handleCategoryClick = (categoryId: string) => {
    const projectsSection = document.getElementById('projects-listing');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
    
    // Filter projects by category after scrolling
    setTimeout(() => {
      const event = new CustomEvent('filterByCategory', { detail: categoryId });
      window.dispatchEvent(event);
    }, 500);
  };

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
        
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[50rem] xl:grid-rows-2 max-w-7xl mx-auto">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={categories[0].icon}
            title={categories[0].title}
            description={categories[0].description}
            onClick={() => handleCategoryClick(categories[0].id)}
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={categories[1].icon}
            title={categories[1].title}
            description={categories[1].description}
            onClick={() => handleCategoryClick(categories[1].id)}
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={categories[2].icon}
            title={categories[2].title}
            description={categories[2].description}
            onClick={() => handleCategoryClick(categories[2].id)}
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={categories[3].icon}
            title={categories[3].title}
            description={categories[3].description}
            onClick={() => handleCategoryClick(categories[3].id)}
          />
          <GridItem
            area="md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/13]"
            icon={categories[4].icon}
            title={categories[4].title}
            description={categories[4].description}
            onClick={() => handleCategoryClick(categories[4].id)}
          />
          <GridItem
            area="md:[grid-area:3/7/4/13] xl:[grid-area:2/5/3/8]"
            icon={categories[5].icon}
            title={categories[5].title}
            description={categories[5].description}
            onClick={() => handleCategoryClick(categories[5].id)}
          />
        </ul>
      </div>
    </section>
  );
}

export default ProjectCategories;
