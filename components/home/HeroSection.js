// components/home/HeroSection.js
import Link from 'next/link';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        Building Financial Algorithms with an Engineer &pos; s Precision
      </h1>
      <p className={styles.subheading}>
        An Electrical Engineering student with CCNA-certified networking expertise and a passion for developing quantitative trading strategies in C#.
      </p>
      <Link href="/projects" className={styles.ctaButton}>
        Explore My Projects
      </Link>
    </section>
  );
};

export default HeroSection;