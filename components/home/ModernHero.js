// components/home/ModernHero.js
"use client"; // Animations require this client directive

import Image from 'next/image';
import styles from './ModernHero.module.css';
import { motion } from 'framer-motion'; // We import the 'motion' component

const ModernHero = () => {
  return (
    // We change <section> to <motion.section> to enable animations
    <motion.section 
      className={styles.hero}
      // The whole section will fade in when the page loads
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.textContainer}>
        {/* Each element below has its own staggered animation */}
        <motion.span 
          className={styles.greeting}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm
        </motion.span>

        <motion.h1 
          className={styles.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Adrian
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          An Electrical &amp; Electronic Engineering Student
        </motion.p>
      </div>

      <div className={styles.imageContainer}>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Image
            src="/profile-pic.jpg"
            alt="Adrian Kwach"
            width={400}
            height={400}
            className={styles.profileImage}
            priority
          />
        </motion.div>
      </div>
      
    </motion.section>
  );
};

export default ModernHero;