// components/home/SkillsSection.js
"use client";

import { useRef, Fragment } from 'react'; // No longer need useEffect
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

// --- Define your skills data (for the text list) ---
const skills = [
  { name: 'C#, Python, C++, JavaScript', category: 'Programming Languages' },
  { name: 'Cisco IOS, OSPF, BGP, VLANs', category: 'Networking' },
  { name: 'Linux (Ubuntu), Windows Server', category: 'Operating Systems' },
  { name: 'Git, GitHub, Vercel', category: 'Version Control & DevOps' },
  { name: 'Pandas, NumPy, Scikit-learn', category: 'Data Analysis & ML' },
  { name: 'SQL (MySQL), Next.js, React', category: 'Web & Databases' },
];

// --- Define and group your carousel icons ---
const iconGroups = [
  [{ name: "React", Icon: ReactIcon }],
  [{ name: "C#", Icon: CSharpIcon }, { name: "C++", Icon: CppIcon }, { name: "Python", Icon: PythonIcon }],
  [ { name: "Kali Linux", Icon: KaliLinuxIcon }],
  [{ name: "MATLAB", Icon: MatlabIcon }, { name: "AutoCAD", Icon: AutocadIcon }]
];

const SkillsSection = () => {
  // We can keep the ref if needed for other things, but it's no longer used for duplication
  const carouselRef = useRef(null);

  // The useEffect hook for duplicating icons has been removed.

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
          {/* --- Render the icons the FIRST time --- */}
          {iconGroups.map((group, groupIndex) => (
            <Fragment key={`group1-${groupIndex}`}>
              {group.map(({ name, Icon }) => (
                <div key={`icon1-${name}`} className={styles.skillCarouselIcon} title={name}>
                  <Icon />
                </div>
              ))}
              {groupIndex < iconGroups.length - 1 && <div className={styles.separator}></div>}
            </Fragment>
          ))}
          {/* --- Render the icons a SECOND time to create the seamless loop --- */}
          {iconGroups.map((group, groupIndex) => (
            <Fragment key={`group2-${groupIndex}`}>
              {group.map(({ name, Icon }) => (
                <div key={`icon2-${name}`} className={styles.skillCarouselIcon} title={name}>
                  <Icon />
                </div>
              ))}
              {groupIndex < iconGroups.length - 1 && <div className={styles.separator}></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;