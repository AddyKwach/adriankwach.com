// components/home/SkillsSection.js
"use client";

import { useEffect, useRef, Fragment } from 'react';
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

const iconGroups = [
  [{ name: "React", Icon: ReactIcon }],
  [{ name: "C#", Icon: CSharpIcon }, { name: "C++", Icon: CppIcon }, { name: "Python", Icon: PythonIcon }],
  [{ name: "Kali Linux", Icon: KaliLinuxIcon }],
  [{ name: "MATLAB", Icon: MatlabIcon }, { name: "AutoCAD", Icon: AutocadIcon }]
];

const SkillsSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children.length === iconGroups.flat().length) {
      const strip = carouselRef.current;
      const children = Array.from(strip.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        strip.appendChild(clone);
      });
    }
  }, []);

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
        <div className={styles.skillCarouselStrip} ref={carouselRef}>
          {iconGroups.map((group, groupIndex) => (
            <Fragment key={groupIndex}>
              {group.map(({ name, Icon }) => {
                // --- THIS IS THE DEBUGGING CODE ---
                console.log(`Checking icon: ${name}. Is it a function?`, typeof Icon === 'function');
                if (typeof Icon !== 'function') {
                  return <div key={name} style={{color: 'red', margin: '0 20px'}}>Error: Invalid component for {name}</div>
                }
                // --- END DEBUGGING CODE ---
                
                return (
                  <div key={name} className={styles.skillCarouselIcon} title={name}>
                    <Icon />
                  </div>
                );
              })}
              {groupIndex < iconGroups.length - 1 && <div className={styles.separator}></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;