// components/layout/Header.js
"use client"; 

import { useState, useEffect } from 'react'; 
import Link from 'next/link';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';

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

  const headerClassName = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  const menuVariants = {
    hidden: { 
      opacity: 0,
      scaleY: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.2 }
    },
  };

  return (
    <header className={headerClassName}>
      {/* This new div handles the background and frosted glass effect */}
      <div className={styles.headerBackground} />

      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">ADRIAN KWACH</Link>
        </div>

        <nav className={styles.navDesktop}>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
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
      
      <AnimatePresence>
        {menuOpen && (
          <motion.nav 
            className={styles.navMobile}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;