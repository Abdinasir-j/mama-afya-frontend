import styles from './PatientRow.module.css';

const riskConfig = {
  high: {
    rowClass: 'rowHigh',
    nameClass: 'nameHigh',
    symptomClass: 'symptomHigh',
    badgeClass: 'badgeHigh',
    actionLabel: 'View Transcript',
    actionIcon: 'forum',
    actionClass: 'actionSecondary',
  },
  medium: {
    rowClass: 'rowMedium',
    nameClass: 'nameMedium',
    symptomClass: 'symptomMedium',
    badgeClass: 'badgeNeutral',
    actionLabel: 'Review',
    actionIcon: 'visibility',
    actionClass: 'actionPrimary',
  },
  low: {
    rowClass: 'rowLow',
    nameClass: 'nameLow',
    symptomClass: 'symptomLow',
    badgeClass: 'badgeNeutral',
    actionLabel: 'Send Reminder',
    actionIcon: 'send',
    actionClass: 'actionPrimary',
  },
};

export default function PatientRow({ patient }) {
  const cfg = riskConfig[patient.riskLevel];

  return (
    <div className={`${styles.row} ${styles[cfg.rowClass]}`}>
      {/* Core info grid */}
      <div className={styles.infoGrid}>
        {/* Name */}
        <div className={styles.cell}>
          <p className={`label-sm ${styles.colHeader}`}>Mother&apos;s Name</p>
          <p className={`headline-sm ${styles[cfg.nameClass]}`}>{patient.name}</p>
        </div>

        {/* Gestational week */}
        <div className={styles.cell}>
          <p className={`label-sm ${styles.colHeader}`}>Gestational Week</p>
          <p className="body-md" style={{ color: 'var(--color-on-surface)', fontWeight: 500 }}>
            Week {patient.gestationalWeek}
          </p>
        </div>

        {/* Symptom */}
        <div className={styles.cell}>
          <p className={`label-sm ${styles.colHeader}`}>Primary Symptom</p>
          <p className={`body-md ${styles[cfg.symptomClass]}`} style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 500 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{patient.symptomIcon}</span>
            {patient.symptom}
          </p>
        </div>

        {/* Alert source */}
        <div className={styles.cell}>
          <p className={`label-sm ${styles.colHeader}`}>Alert Source</p>
          <span className={`label-md ${styles.badge} ${styles[cfg.badgeClass]}`}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{patient.alertSourceIcon}</span>
            {patient.alertSource}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button className={`${styles.actionBtn} ${styles[cfg.actionClass]}`}>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{patient.actionIcon || cfg.actionIcon}</span>
          {cfg.actionLabel}
        </button>
        <button className={styles.moreBtn} aria-label="More options">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
    </div>
  );
}
