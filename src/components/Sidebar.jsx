import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const navItems = [
  { icon: 'dashboard',     label: 'Dashboard', to: '/' },
  { icon: 'person_search', label: 'Patients',  to: '/patients' },
  { icon: 'event',         label: 'Schedule',  to: '/schedule' },
  { icon: 'inventory_2',   label: 'Inventory', to: '/inventory' },
  { icon: 'analytics',     label: 'Reports',   to: '/reports' },
];

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && (
        <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      )}

      <aside className={`${styles.sidebar} ${mobileOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.sidebarHeader}>
          <div className={styles.avatar}>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <div>
            <p className={`headline-sm ${styles.portalTitle}`}>CHW Portal</p>
            <p className={`label-md ${styles.portalSub}`}>Community Health Worker</p>
          </div>
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {navItems.map(item => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
              }
              onClick={() => onClose?.()}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="label-md">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className={styles.sidebarFooter}>
          <a href="#" className={styles.navItem} onClick={e => e.preventDefault()}>
            <span className="material-symbols-outlined">logout</span>
            <span className="label-md">Sign Out</span>
          </a>
        </div>
      </aside>
    </>
  );
}
