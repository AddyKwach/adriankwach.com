// components/home/SkillsSection.js
"use client";

// Import the new Marquee component and remove unused imports
import Marquee from "react-fast-marquee";
import styles from './SkillsSection.module.css';

// Icon imports (these stay the same)
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

const iconComponents = [
    { name: "React", Icon: ReactIcon },
    { name: "C#", Icon: CSharpIcon },
    { name: "C++", Icon: CppIcon },
    { name: "Python", Icon: PythonIcon },
    { name: "Kali Linux", Icon: KaliLinuxIcon },
    { name: "MATLAB", Icon: MatlabIcon },
    { name: "AutoCAD", Icon: AutocadIcon },
];

const SkillsSection = () => {
    // We no longer need useRef, duplicatedIcons, or marqueeVariants
    
    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.title}>Skillsets & Tools</h2>
            <div className={styles.skillsGrid}>
                {skills.map((skill) => (
                    <div key={skill.category} className={styles.skillItem}>
                        <strong>{skill.category}:</strong> {skill.name}
                    </div>
                ))}
            </div>

            {/* --- REPLACED with the Marquee component --- */}
            <div className={styles.carouselWrapper}>
                <Marquee
                    pauseOnHover={true}
                    speed={50} // Adjust speed as you like
                >
                    {iconComponents.map((item, index) => (
                        <div key={index} className={styles.skillCarouselIcon} title={item.name}>
                            <item.Icon />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default SkillsSection;