
import React from 'react';
import ProjectCard, { Project } from './ProjectCard';

const projects: Project[] = [
  {
    title: "Modern E-commerce Platform",
    description: "A fully responsive e-commerce platform with animations, product filtering, and seamless checkout experience.",
    tags: ["React", "Tailwind CSS", "Animation", "E-commerce"],
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Interactive dashboard with real-time data visualization, animations, and responsive design for all devices.",
    tags: ["TypeScript", "React", "Charts", "Animation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Travel Experience App",
    description: "Mobile-first travel application with smooth transitions, parallax effects, and interactive maps.",
    tags: ["JavaScript", "React Native", "Maps API", "UI/UX"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Creative Portfolio",
    description: "A designer's portfolio with creative animations, 3D elements, and custom scroll effects.",
    tags: ["React", "Three.js", "GSAP", "Animation"],
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Fitness Tracking App",
    description: "Interactive fitness application with progress animations, workout tracking, and custom charts.",
    tags: ["React", "Charts", "SVG Animations", "Mobile App"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Modern social media management platform with real-time updates and interactive UI elements.",
    tags: ["TypeScript", "React", "Real-time Data", "Dashboard"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          My Projects
        </h2>
        
        <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work, featuring interactive web applications with smooth animations and intuitive user interfaces.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
