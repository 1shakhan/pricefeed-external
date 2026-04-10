import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalAdvantages.module.css';

const InternalAdvantages: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.advantages} id="advantages">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('internalAnalytics.advantages.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('internalAnalytics.advantages.subtitle')}</p>
        </div>
        <div className={styles.advantagesGrid}>
          <div className={styles.advantageCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.materialIcons}>admin_panel_settings</span>
            </div>
            <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.control.title')}</h3>
            <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.control.desc')}</p>
          </div>
          <div className={styles.advantageCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.materialIcons}>precision_manufacturing</span>
            </div>
            <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.precision.title')}</h3>
            <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.precision.desc')}</p>
          </div>
          <div className={styles.advantageCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.materialIcons}>bolt</span>
            </div>
            <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.automation.title')}</h3>
            <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.automation.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalAdvantages;
