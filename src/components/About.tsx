
import React, { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  percentage: number;
};

const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', percentage: 90 },
  { name: 'React & React Native', percentage: 85 },
  { name: 'CSS/Tailwind/SCSS', percentage: 90 },
  { name: 'UI/UX Design', percentage: 75 },
  { name: 'Node.js', percentage: 80 },
  { name: 'Animation & 3D', percentage: 70 },
];

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
      
      // Animate skill bars when they come into view
      const skillBars = document.querySelectorAll('.skill-progress');
      if (skillsRef.current) {
        const skillsTop = skillsRef.current.getBoundingClientRect().top;
        const skillsVisible = 150;
        
        if (skillsTop < window.innerHeight - skillsVisible) {
          skillBars.forEach((bar, index) => {
            const skill = skills[index];
            (bar as HTMLElement).style.width = `${skill.percentage}%`;
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          About Me
        </h2>
        
        <div ref={aboutRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal fade-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent animate-morph"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Profile" 
                  className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          <div className="reveal fade-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Who am I?</h3>
            <p className="text-foreground/80 mb-6">
              I'm a passionate Front-end Developer and UI/UX Designer with over 5 years of experience creating 
              beautiful, functional, and performant web applications. I specialize in crafting engaging user 
              experiences through clean code and creative problem-solving.
            </p>
            <p className="text-foreground/80 mb-8">
              My approach combines technical expertise with an eye for design, allowing me to build applications 
              that are not only visually stunning but also intuitive and accessible. I'm constantly exploring new 
              technologies and techniques to push the boundaries of what's possible on the web.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">JavaScript</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">Tailwind CSS</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">Animation</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">UI/UX Design</span>
            </div>
          </div>
        </div>
        
        <div ref={skillsRef} className="mt-24 reveal fade-bottom">
          <h3 className="text-2xl font-semibold mb-8 text-center">My Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-foreground/90">{skill.name}</span>
                  <span className="text-primary">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '0%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
