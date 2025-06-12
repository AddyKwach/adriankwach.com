// components/home/SkillsSection.js
"use client";

import { useRef, Fragment } from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsSection.module.css';

// Import all necessary icons
import PythonIcon from '../icons/skills/PythonIcon';
import CSharpIcon from '../icons/skills/CsharpIcon';
import ReactIcon from '../icons/skills/ReactIcon';
import CppIcon from '../icons/skills/CppIcon';
import MatlabIcon from '../icons/skills/MatlabIcon';
import AutocadIcon from '../icons/skills/AutocadIcon';
import KaliLinuxIcon from '../icons/skills/KaliLinuxIcon';

const skills = [
  { name: 'C#, Python, C++, JavaScript', category: 'Programming Languages' },
  { name: 'Cisco IOS, OSPF, BGP, VLANs', category: 'Networking' },
  { name: 'Linux (Ubuntu), Windows Server', category: 'Operating Systems' },
  { name: 'Git, GitHub, Vercel', category: 'Version Control & DevOps' },
  { name: 'Pandas, NumPy, Scikit-learn', category: 'Data Analysis & ML' },
  { name: 'SQL (MySQL), Next.js, React', category: 'Web & Databases' },
];

// Combine icons and separators into a single array for easier mapping.
const iconComponents = [
  { name: "React", Icon: ReactIcon, isIcon: true },
  { isSeparator: false },
  { name: "C#", Icon: CSharpIcon, isIcon: true },
  { name: "C++", Icon: CppIcon, isIcon: true },
  { name: "Python", Icon: PythonIcon, isIcon: true },
  { isSeparator: false },
  { name: "Kali Linux", Icon: KaliLinuxIcon, isIcon: true },
  { isSeparator: false },
  { name: "MATLAB", Icon: MatlabIcon, isIcon: true },
  { name: "AutoCAD", Icon: AutocadIcon, isIcon: true },
];

const SkillsSection = () => {
  const carouselRef = useRef(null);

  // We duplicate the components here to create the seamless loop effect.
  const duplicatedIcons = [...iconComponents, ...iconComponents];

  // Framer Motion animation variants
  const marqueeVariants = {
    animate: {
      x: ['0%', '-50%'], // Animate from the start to the halfway point (the end of the first set of icons)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15, // Adjust this value to change the scroll speed
          ease: 'linear',
        },
      },
    },
  };

  return (
    <motion.section 
      className={styles.skillsSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className={styles.title}>Skillsets & Tools</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.category} className={styles.skillItem}>
            <strong>{skill.category}:</strong> {skill.name}
          </div>
        ))}
      </div>

      <div className={styles.carouselContainer}>
        <motion.div
          className={styles.skillCarouselStrip}
          ref={carouselRef}
          variants={marqueeVariants}
          animate="animate"
          whileHover={{ animationPlayState: 'paused' }} // Pause animation on hover
        >
          {/* Map over the duplicated list to render the icons and separators */}
          {duplicatedIcons.map((item, index) => (
            <Fragment key={index}>
              {item.isIcon ? (
                <div className={styles.skillCarouselIcon} title={item.name}>
                  <item.Icon />
                </div>
              ) : (
                <div className={styles.separator}></div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;