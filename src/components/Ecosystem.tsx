import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Ecosystem.module.css';
import { Icon, type IconName } from './Icon';

export const Ecosystem: React.FC = () => {
  const { t } = useTranslation();

  const features: Array<{ id: string; icon: IconName; size: 'large' | 'medium' | 'small' | 'wide' }> = [
    { id: 'unit', icon: 'account_balance_wallet', size: 'large' },
    { id: 'preorders', icon: 'pending_actions', size: 'medium' },
    { id: 'warehouse', icon: 'inventory_2', size: 'small' },
    { id: 'price', icon: 'sell', size: 'small' },
    { id: 'gold', icon: 'currency_exchange', size: 'wide' }
  ];

  return (
    <section className={styles.ecosystem} id="ecosystem">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('ecosystem.title')}</h2>
          <p className={styles.subtitle}>{t('ecosystem.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={`${styles.card} ${styles[feature.size]} ${styles[feature.id]}`}>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} name={feature.icon} />
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.cardTitle}>{t(`ecosystem.${feature.id}.title`)}</h3>
                  <p className={styles.cardDesc}>{t(`ecosystem.${feature.id}.desc`)}</p>
                </div>
              </div>
              <Icon className={styles.bgIcon} name={feature.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
