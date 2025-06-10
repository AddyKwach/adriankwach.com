// app/venture/page.js
"use client";

import Link from 'next/link';
import styles from './VenturePage.module.css';
import { motion } from 'framer-motion'; // Import motion

export default function VenturePage() {
  return (
    // Wrap the main div with motion.div
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>QuantTech Indicators</h1>
      <p className={styles.tagline}>
        Data-Driven Tools for the Modern Trader.
      </p>
      
      <div className={styles.section}>
        <h2 className={styles.subtitle}>The Vision</h2>
        <p>
          Our mission is to empower retail and professional traders with institutional-grade technical indicators and quantitative tools. We believe that access to high-quality, data-driven insights should be democratized. Inspired by leaders in the field like Luc-Algo, we aim to build a suite of products that provide a tangible edge in the market.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Current Offerings</h2>
        <p>
          We are currently developing a suite of proprietary indicators, including the Market Structure Shift Indicator. These tools will be available through a flexible monthly subscription model, providing traders with ongoing updates and support.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Future Roadmap</h2>
        <p>
          This is just the beginning. Our long-term vision includes expanding into a full-featured platform for traders, with plans to introduce:
        </p>
        <ul className={styles.roadmapList}>
          <li>Proprietary trading firm challenges.</li>
          <li>Advanced backtesting environments.</li>
          <li>Eventual brokerage services to minimize transaction costs for our users.</li>
        </ul>
      </div>

      <div className={styles.ctaSection}>
        <h2 className={styles.subtitle}>Get Involved</h2>
        <p>
          We are in the early stages of development and looking for early adopters, beta testers, and potential partners. If you're interested in shaping the future of trading tools, we'd love to hear from you.
        </p>
        <Link href="mailto:youremail@example.com" className={styles.ctaButton}>
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}