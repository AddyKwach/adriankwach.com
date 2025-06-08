// components/projects/ProjectCard.js
import Link from 'next/link';
import styles from './ProjectCard.module.css';

// We accept props (title, description, tags, link) to make the card reusable
const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <Link href={link} className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;