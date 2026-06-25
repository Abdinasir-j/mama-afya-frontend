import styles from './PlaceholderPage.module.css';

export default function Inventory() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--color-primary)' }}>inventory_2</span>
        <h2 className={`headline-lg ${styles.title}`}>Inventory</h2>
        <p className={`body-lg ${styles.sub}`}>Medical supplies, drug stock levels, and reorder tracking will appear here.</p>
        <span className={`label-md ${styles.badge}`}>Coming Soon</span>
      </div>
    </main>
  );
}
