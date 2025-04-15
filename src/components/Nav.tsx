
import React, { useState, useEffect } from 'react';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { text: 'Home', href: '#hero' },
    { text: 'About', href: '#about' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#hero" className="text-2xl font-bold text-primary cursor-pointer">
          Portfolio
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="link-underline text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {link.text}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button className="text-foreground hover:text-primary cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
