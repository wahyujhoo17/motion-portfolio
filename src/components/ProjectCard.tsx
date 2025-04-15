
import React, { useState } from 'react';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 150}ms`;
  
  return (
    <div 
      className="reveal fade-bottom group"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-secondary/30 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
        <div className="relative overflow-hidden aspect-video">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/30 text-primary/90 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded-lg transform transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100 delay-300 cursor-pointer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
