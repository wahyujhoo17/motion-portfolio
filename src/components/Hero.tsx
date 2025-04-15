
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Particle animation setup
    const container = containerRef.current;
    if (!container) return;
    
    const createParticle = () => {
      const particle = document.createElement('div');
      
      // Random position, size, and animation duration
      const size = Math.random() * 8 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const animDuration = Math.random() * 15 + 10;
      
      // Apply styles
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.left = `${posX}%`;
      particle.style.bottom = `${posY}%`;
      particle.style.background = 'rgba(139, 92, 246, 0.2)';
      particle.style.animation = `float ${animDuration}s ease-in-out infinite`;
      particle.style.zIndex = '1';
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, animDuration * 1000);
    };
    
    // Create particles at intervals
    const interval = setInterval(() => {
      createParticle();
    }, 1000);
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
      createParticle();
    }
    
    return () => clearInterval(interval);
  }, []);
  
  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const shapeElements = document.querySelectorAll('.shape');
      
      shapeElements.forEach((element, index) => {
        const factor = (index + 1) * 20;
        const moveX = (x - 0.5) * factor;
        const moveY = (y - 0.5) * factor;
        
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div ref={containerRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Animated shapes */}
      <div className="shape absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="shape absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent/15 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
      <div className="shape absolute top-1/3 left-1/3 w-20 h-20 bg-primary/20 rounded-full filter blur-xl animate-rotate-slow"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Creative Developer <br /> & Designer
        </h1>
        
        <p className="animate-fade-in animation-delay-300 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
          I craft elegant, animated, and interactive digital experiences that bring brands and products to life.
        </p>
        
        <div className="animate-fade-in animation-delay-500 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <a href="#about" className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors duration-300">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
