
import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Hide cursor when it's outside of the window
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const updateLinkHoverStatus = () => {
      const hoveredElements = document.querySelectorAll("a:hover, button:hover, .cursor-pointer:hover");
      setLinkHovered(hoveredElements.length > 0);
    };

    addEventListeners();
    const intervalId = setInterval(updateLinkHoverStatus, 100);

    return () => {
      removeEventListeners();
      clearInterval(intervalId);
    };
  }, []);

  const cursorClasses = `
    fixed pointer-events-none z-50 flex items-center justify-center transition-transform duration-150
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${clicked ? 'scale-75' : ''}
    ${linkHovered ? 'scale-150' : ''}
  `;

  const cursorInnerClasses = `
    w-6 h-6 bg-transparent border-2 border-primary rounded-full
    ${clicked ? 'w-5 h-5' : ''}
    ${linkHovered ? 'bg-primary bg-opacity-25' : ''}
  `;

  const cursorOuterClasses = `
    fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-40
    border border-primary border-opacity-40
    ${hidden ? 'opacity-0' : 'opacity-100 mix-blend-difference'}
    transition-all duration-300 ease-out
    ${clicked ? 'scale-75' : ''}
    ${linkHovered ? 'scale-150 mix-blend-difference' : ''}
  `;

  return (
    <>
      <div 
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)"
        }}
      >
        <div className={cursorInnerClasses}></div>
      </div>
      <div 
        className={cursorOuterClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)"
        }}
      ></div>
    </>
  );
};

export default Cursor;
