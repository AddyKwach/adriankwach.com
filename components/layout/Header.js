// components/layout/Header.js
"use client"; 

// 1. Import useEffect, which lets us interact with browser events
import { useState, useEffect } from 'react'; 
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // 2. Add a new state to track if the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Set up an effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if user has scrolled more than 10px, false otherwise
      setIsScrolled(window.scrollY > 10);
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    // 4. Conditionally apply the 'scrolled' class based on our state
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">ADRIAN KWACH</Link>
        </div>

        <nav className={styles.navDesktop}>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/venture">Venture</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button 
          className={styles.menuButton} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg viewBox="0 0 100 80" width="25" height="25" fill="#FFF">
            <rect width="100" height="10" rx="8"></rect>
            <rect y="30" width="100" height="10" rx="8"></rect>
            <rect y="60" width="100" height="10" rx="8"></rect>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.navMobile}>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/venture" onClick={() => setMenuOpen(false)}>Venture</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;