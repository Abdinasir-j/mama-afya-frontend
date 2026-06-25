import styles from './PlaceholderPage.module.css';

export default function Schedule() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--color-primary)' }}>event</span>
        <h2 className={`headline-lg ${styles.title}`}>Schedule</h2>
        <p className={`body-lg ${styles.sub}`}>Appointment calendar, ANC visit scheduling, and follow-up reminders will appear here.</p>
        <span className={`label-md ${styles.badge}`}>Coming Soon</span>
      </div>
    </main>
  );
}
