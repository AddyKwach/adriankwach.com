// components/layout/Footer.js
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2025 Adrian Kwach. All Rights Reserved.</p>
        <div className={styles.links}>
          <Link href="https://github.com/AddyKwach" target="_blank" rel="noopener noreferrer">GitHub</Link>
          <Link href="https://www.linkedin.com/in/adrian-kwach-749a32226" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;