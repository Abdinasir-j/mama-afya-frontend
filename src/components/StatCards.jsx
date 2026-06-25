import styles from './StatCards.module.css';

export default function StatCards({ stats }) {
  return (
    <div className={styles.grid}>
      {/* High Risk */}
      <div className={`${styles.card} ${styles.cardHigh}`}>
        <div className={styles.cardTop}>
          <span className={`label-md ${styles.labelHigh}`}>
            <span className="material-symbols-outlined fill" style={{ fontSize: 18 }}>emergency</span>
            High Risk
          </span>
          <span className={`stats-display ${styles.countHigh}`}>{stats.high}</span>
        </div>
        <p className={`body-md ${styles.cardSub}`}>Requires immediate review</p>
      </div>

      {/* Monitor */}
      <div className={`${styles.card} ${styles.cardMedium}`}>
        <div className={styles.cardTop}>
          <span className={`label-md ${styles.labelMedium}`}>
            <span className="material-symbols-outlined fill" style={{ fontSize: 18 }}>warning</span>
            Monitor
          </span>
          <span className={`stats-display ${styles.countMedium}`}>{stats.medium}</span>
        </div>
        <p className={`body-md ${styles.cardSub}`}>Review within 24 hours</p>
      </div>

      {/* Routine */}
      <div className={`${styles.card} ${styles.cardLow}`}>
        <div className={styles.cardTop}>
          <span className={`label-md ${styles.labelLow}`}>
            <span className="material-symbols-outlined fill" style={{ fontSize: 18 }}>check_circle</span>
            Routine
          </span>
          <span className={`stats-display ${styles.countLow}`}>{stats.low}</span>
        </div>
        <p className={`body-md ${styles.cardSub}`}>Standard check-ins</p>
      </div>
    </div>
  );
}
