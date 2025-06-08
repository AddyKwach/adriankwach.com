// This is app/projects/page.js (The Projects Page)

import ProjectCard from '@/components/projects/ProjectCard';
import styles from './ProjectsPage.module.css';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div>
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
    </div>
  );
}