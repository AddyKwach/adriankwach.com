// components/layout/Header.js

// This directive tells Next.js that this component uses interactivity (state)
// and should be rendered on the client-side.
"use client"; 

import { useState } from 'react'; // <-- 1. Import useState
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  // 2. Set up the state for our mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">ADRIAN KWACH</Link>
        </div>

        {/* 3. This is our desktop navigation */}
        <nav className={styles.navDesktop}>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/venture">Venture</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* 4. This is the hamburger menu button for mobile */}
        <button 
          className={styles.menuButton} 
          onClick={() => setMenuOpen(!menuOpen)} // Toggles the menu state
        >
          {/* This SVG creates the three lines (or an 'X' if the menu is open) */}
          <svg viewBox="0 0 100 80" width="25" height="25" fill="#FFF">
            <rect width="100" height="10" rx="8"></rect>
            <rect y="30" width="100" height="10" rx="8"></rect>
            <rect y="60" width="100" height="10" rx="8"></rect>
          </svg>
        </button>
      </div>

      {/* 5. This is the mobile navigation menu that appears when toggled */}
      {menuOpen && (
        <nav className={styles.navMobile}>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/venture" onClick={() => setMenuOpe(false)}>Venture</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;