// components/layout/Header.js
"use client"; 

import { useState, useEffect } from 'react'; 
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // This line dynamically adds the ".scrolled" class when needed
  const headerClassName = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClassName}>
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