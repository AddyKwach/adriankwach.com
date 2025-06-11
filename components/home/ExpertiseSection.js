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

  // We now create the slides with animation props inside the map function
  const slides = expertiseData.map((item, index) => (
    <motion.div
      key={index}
      // This creates the "fade in and slide up" effect
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // This staggers the animation for each card
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
      {/* This is our new panel wrapper */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>My Expertise</h2>
        <p className={styles.subtitle}>
          I design and implement resilient solutions that drive efficiency and innovation in Tech & Financial markets by Leveraging my expertise in network architecture, embedded systems and software development.
        </p>
        <div className={styles.carouselContainer}>
          <Carousel slides={slides} options={emblaOptions} />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;