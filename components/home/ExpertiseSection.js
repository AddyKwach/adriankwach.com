// components/home/ExpertiseSection.js
"use client"; // Required for animations

import styles from './ExpertiseSection.module.css';
import Carousel from '../common/Carousel';
import ExpertiseCard from '../expertise/ExpertiseCard';
import { motion } from 'framer-motion';

// Import the icons
import NetworkIcon from '../icons/NetworkIcon';
import QuantIcon from '../icons/QuantIcon';
import EmbeddedIcon from '../icons/EmbeddedIcon';
import CodeIcon from '../icons/CodeIcon';

const expertiseData = [
  { icon: NetworkIcon, title: "Network Systems", description: "Designing and optimizing robust network infrastructures for high performance and security." },
  { icon: QuantIcon, title: "Quantitative Modeling", description: "Developing sophisticated algorithms and Technical Market Indicators for data-driven insights." },
  { icon: EmbeddedIcon, title: "Embedded Systems", description: "Building intelligent hardware-software integrations for real-world applications." },
  { icon: CodeIcon, title: "Software Development", description: "Crafting high-quality, maintainable code in C#, Python, and other languages for scalable solutions." }
];

const ExpertiseSection = () => {
  const emblaOptions = { loop: true, align: 'center' };

  // The animation for the cards inside the carousel is already set up
  const slides = expertiseData.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <ExpertiseCard 
        Icon={item.icon}
        title={item.title}
        description={item.description}
      />
    </motion.div>
  ));

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.contentWrapper}>
        {/* --- MODIFIED: Added motion.h2 and animation props --- */}
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          My Expertise
        </motion.h2>

        {/* --- MODIFIED: Added motion.p and animation props --- */}
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          I design and implement resilient solutions that drive efficiency and innovation in Tech & Financial markets by Leveraging my experience in network architecture, embedded systems and software development.
        </motion.p>

        <div className={styles.carouselContainer}>
          <Carousel slides={slides} options={emblaOptions} />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;