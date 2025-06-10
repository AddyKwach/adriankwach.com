// app/projects/page.js
"use client"; // Required for animations

import ProjectCard from '@/components/projects/ProjectCard';
import styles from './ProjectsPage.module.css';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion'; // Import motion

export default function ProjectsPage() {
  return (
    // Wrap the main div with motion.div and add animation props
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.pageSubtitle}>
        A selection of my work in quantitative finance and software development.
      </p>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </motion.div>
  );
}