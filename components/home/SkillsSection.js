// components/home/SkillsSection.js
"use client";

import { useState, useEffect } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);
    
    // Detect mobile devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
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

            {/* Conditional rendering based on device type */}
            <div className={styles.carouselWrapper}>
                {isMobile ? (
                    // Fallback for mobile devices
                    <div className={styles.mobileIconGrid}>
                        {iconComponents.map((item, index) => (
                            <div key={index} className={styles.mobileIcon} title={item.name}>
                                <item.Icon />
                            </div>
                        ))}
                    </div>
                ) : (
                    // Desktop marquee
                    <Marquee
                        pauseOnHover={true}
                        speed={50}
                        gradient={false} // Disable gradient to avoid visibility issues
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
                        }}
                    >
                        {iconComponents.map((item, index) => (
                            <div key={index} className={styles.skillCarouselIcon} title={item.name}>
                                <item.Icon />
                            </div>
                        ))}
                    </Marquee>
                )}
            </div>
        </section>
    );
};

export default SkillsSection;