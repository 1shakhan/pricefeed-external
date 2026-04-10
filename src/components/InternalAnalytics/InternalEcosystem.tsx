import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalEcosystem.module.css';

const InternalEcosystem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.ecosystem} id="ecosystem">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('internalAnalytics.more.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('internalAnalytics.more.subtitle')}</p>
        </div>
        <div className={styles.ecosystemGrid}>
          {(t('internalAnalytics.more.items', { returnObjects: true }) as { title: string; desc: string }[]).map((item, i) => {
            const icons = ['account_balance_wallet', 'assignment', 'inventory_2', 'sell', 'cached', 'web'];
            return (
              <div key={i} className={styles.ecosystemCard}>
                <div className={styles.ecosystemIcon}>
                  <span className={styles.materialIcons}>{icons[i]}</span>
                </div>
                <h3 className={styles.ecosystemTitle}>{item.title}</h3>
                <p className={styles.ecosystemDesc}>{item.desc}</p>
                <a href="#" className={styles.learnMore}>
                  {t('ecosystem.more')} <span className={styles.arrow}>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternalEcosystem;
