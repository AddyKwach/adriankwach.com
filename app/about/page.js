// app/about/page.js
"use client";

import Link from 'next/link';
import styles from './AboutPage.module.css';
import { motion } from 'framer-motion'; // Import motion

export default function AboutPage() {
  return (
    // Wrap the main div with motion.div
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>About Me</h1>
      
      <div className={styles.section}>
        <h2 className={styles.subtitle}>My Story</h2>
        <p>
          I am currently pursuing a degree in Electrical Engineering, where I have built a strong foundation in logical problem-solving, systems analysis, and technical precision. This engineering mindset is the lens through which I view all challenges, including those in the financial markets.
        </p>
        <p>
          My curiosity led me to the world of networking, where I earned my CCNA certification, proving my ability to understand and build complex, mission-critical systems. This experience in network architecture directly translates to my passion for building robust and efficient trading algorithms.
        </p>
        <p>
          Today, my primary focus is on quantitative finance. I leverage my technical skills to develop and backtest trading strategies, primarily in C#, with the goal of finding repeatable, data-driven edges in the market. I am actively working towards my CFA to deepen my understanding of financial principles and ethics.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Core Skills</h2>
        <ul className={styles.skillsList}>
          <li><strong>Programming:</strong> C#, JavaScript, Python</li>
          <li><strong>Quantitative Analysis:</strong> Algorithmic Trading, Backtesting, OLS Regression</li>
          <li><strong>Networking:</strong> CCNA Certified, TCP/IP, Network Architecture</li>
          <li><strong>Finance Tools:</strong> cTrader API, MetaTrader</li>
          <li><strong>Development:</strong> Next.js, React, Git, Vercel</li>
        </ul>
      </div>

      <div className={styles.ctaSection}>
        <p>Interested in learning more or discussing a potential opportunity?</p>
        <Link href="/adriankwach-cv.pdf" target="_blank" className={styles.ctaButton}>
          Download My CV
        </Link>
      </div>
    </motion.div>
  );
}