import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalAdvantages.module.css';
import { Icon } from '../shared/Icon.tsx';

export const InternalAdvantages: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.advantages} id="advantages">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('internalAnalytics.advantages.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('internalAnalytics.advantages.subtitle')}</p>
        </div>
        <div className={styles.advantagesGrid}>
          <div className={styles.advantageCard}>
            <div className={styles.iconWrapper}>
              <Icon className={styles.materialIcons} name="admin_panel_settings" />
            </div>
            <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.control.title')}</h3>
            <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.control.desc')}</p>
          </div>
          <div className={styles.advantageCard}>
            <div className={styles.iconWrapper}>
              <Icon className={styles.materialIcons} name="precision_manufacturing" />
            </div>
            <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.precision.title')}</h3>
            <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.precision.desc')}</p>
          </div>
          <div className={styles.advantageCard}>
            <div className={styles.iconWrapper}>
              <Icon className={styles.materialIcons} name="bolt" />
            </div>
            <h3 className={styles.advantageTitle}>{t('internalAnalytics.advantages.automation.title')}</h3>
            <p className={styles.advantageDesc}>{t('internalAnalytics.advantages.automation.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
