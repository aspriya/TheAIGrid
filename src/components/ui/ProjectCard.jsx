'use client';

import Button from './Button';
import Badge from './Badge';
import Card from './Card';

const ProjectCard = ({ 
  project = {},
  className = '',
  showCreator,
  currentUser,
  ...restProps 
}) => {
  // Default project data for demo purposes
  const defaultProject = {
    id: 1,
    title: "AI Customer Support Bot",
    description: "Revolutionary customer service AI that reduces response time by 90% and increases satisfaction scores.",
    category: "AI Assistant",
    status: "Seeking Partners",
    technologies: ["Next.js", "OpenAI", "TypeScript"],
    creator: {
      name: "John Doe",
      initials: "JD",
      role: "Creator"
    }
  };

  const projectData = { ...defaultProject, ...project };

  return (
    <Card 
      padding="none" 
      className={`group h-full flex flex-col bg-white/90 backdrop-blur-md border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] rounded-3xl overflow-hidden relative ${className}`}
    >
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Header Section - Badges */}
      <div className="relative z-10 p-6 pb-4 border-b border-gray-100/60">
        <div className="flex items-center gap-2">
          <span className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 text-xs md:text-sm font-semibold rounded-lg border border-blue-100">
            {projectData.category}
          </span>
          <span className="text-gray-300">•</span>
          <span className="inline-block px-3 py-1.5 bg-green-50 text-green-600 text-xs md:text-sm font-semibold rounded-lg border border-green-100">
            {projectData.status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-6 flex-1">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-snug mb-4">
          {projectData.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3 mb-5">
          {projectData.description}
        </p>
        
        {/* Tech stack with better visual separation */}
        <div className="pt-3 border-t border-gray-100/50">
          <div className="flex flex-wrap gap-2">
            {projectData.technologies.map((tech, index) => (
              <span 
                key={index}
                className="inline-block px-2.5 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded-md hover:bg-gray-200 transition-colors duration-200 border border-gray-200/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Section with enhanced separation */}
      <div className="relative z-10 mt-auto border-t-2 border-gray-100/80 bg-gradient-to-r from-gray-50/80 to-gray-50/60 backdrop-blur-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
              {projectData.creator.initials}
            </div>
            <div>
              <div className="text-sm md:text-base font-semibold text-gray-800">{projectData.creator.name}</div>
              <div className="text-xs md:text-sm text-gray-500">{projectData.creator.role}</div>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm md:text-base font-semibold transition-colors duration-200 hover:underline">
            View →
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
