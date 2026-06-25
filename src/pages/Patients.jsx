import styles from './PlaceholderPage.module.css';

export default function Patients() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--color-primary)' }}>person_search</span>
        <h2 className={`headline-lg ${styles.title}`}>Patients</h2>
        <p className={`body-lg ${styles.sub}`}>Full patient records, ANC visit history, and pregnancy timelines will appear here.</p>
        <span className={`label-md ${styles.badge}`}>Coming Soon</span>
      </div>
    </main>
  );
}
