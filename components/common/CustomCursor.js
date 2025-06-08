// components/common/CustomCursor.js
"use client"; // This component uses browser-only APIs and hooks

import { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', updateMousePosition);

    // Logic for hover effect
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.querySelectorAll('a, button, input, textarea').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.querySelectorAll('a, button, input, textarea').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorClasses = `${styles.cursor} ${isHovering ? styles.hovering : ''}`;

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;