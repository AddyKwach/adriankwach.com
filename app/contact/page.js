// app/contact/page.js
"use client";

import styles from './ContactPage.module.css';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

export default function ContactPage() {
  return (
    // Wrap the main div with motion.div
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.subtitle}>
        I'm open to discussing new opportunities, collaborations, or just a chat about quantitative finance. Feel free to reach out.
      </p>

      <div className={styles.socialLinks}>
        <Link href="https://github.com" target="_blank" className={styles.socialLink}>
          <GitHubIcon className={styles.icon} />
          <span>GitHub</span>
        </Link>
        <Link href="https://linkedin.com" target="_blank" className={styles.socialLink}>
          <LinkedInIcon className={styles.icon} />
          <span>LinkedIn</span>
        </Link>
      </div>

      <form 
        action="https://formspree.io/f/your_form_id" 
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
    </motion.div>
  );
}