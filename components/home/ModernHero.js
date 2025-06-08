// components/home/ModernHero.js
import Image from 'next/image';
import styles from './ModernHero.module.css';

const ModernHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <span className={styles.greeting}>Hi, I'm</span>
        <h1 className={styles.name}>Adrian</h1>
        <p className={styles.subtitle}>
           Electrical &amp; Electronic Engineering Student
        </p>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/profile-pic.jpg"
            alt="Adrian Kwach"
            width={400}
            height={400}
            className={styles.profileImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;