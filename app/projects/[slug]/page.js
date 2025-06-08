// app/projects/[slug]/page.js
import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import styles from './ProjectPage.module.css';
import Link from 'next/link';

// This function finds the project data based on the URL's slug
function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

// The page component receives `params` which contains the slug
export default async function ProjectPage({ params }) {
  const project = getProject(params.slug);

  // If no project is found for the slug, show a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/projects" className={styles.backLink}>← Back to Projects</Link>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <p className={styles.description}>{project.description}</p>
      {/* We can add more details like images or code snippets here later */}
    </div>
  );
}