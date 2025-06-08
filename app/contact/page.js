// app/contact/page.js
import styles from './ContactPage.module.css';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.subtitle}>
        I &apos; m open to discussing new opportunities, collaborations, or just a chat about quantitative finance. Feel free to reach out.
      </p>

      <div className={styles.socialLinks}>
        <Link href="https://github.com/AddyKwach" target="_blank" className={styles.socialLink}>
          <GitHubIcon className={styles.icon} />
          <span>GitHub</span>
        </Link>
        <Link href="https://www.linkedin.com/in/adrian-kwach-749a32226/" target="_blank" className={styles.socialLink}>
          <LinkedInIcon className={styles.icon} />
          <span>LinkedIn</span>
        </Link>
      </div>

      {/* This form uses Formspree for a simple, free backend.
          1. Go to formspree.io and create a new form.
          2. Replace the placeholder URL below with your own Formspree URL.
      */}
      <form 
        action="https://formspree.io/f/xldnjeap" 
        method="POST"
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}