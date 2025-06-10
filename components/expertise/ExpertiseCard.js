// components/expertise/ExpertiseCard.js
import styles from './ExpertiseCard.module.css';

const ExpertiseCard = ({ Icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />  {/* This is now active again */}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ExpertiseCard;