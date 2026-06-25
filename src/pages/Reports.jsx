import styles from './PlaceholderPage.module.css';

export default function Reports() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--color-primary)' }}>analytics</span>
        <h2 className={`headline-lg ${styles.title}`}>Reports</h2>
        <p className={`body-lg ${styles.sub}`}>Community health metrics, analytics dashboards, and PDF/CSV exports will appear here.</p>
        <span className={`label-md ${styles.badge}`}>Coming Soon</span>
      </div>
    </main>
  );
}
