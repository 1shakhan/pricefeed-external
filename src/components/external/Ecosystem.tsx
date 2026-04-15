import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Ecosystem.module.css';
import { Icon, type IconName } from '../shared/Icon.tsx';

export const Ecosystem: React.FC = () => {
  const { t } = useTranslation();

  const features: Array<{ id: string; icon: IconName }> = [
    { id: 'unit', icon: 'account_balance_wallet' },
    { id: 'preorders', icon: 'pending_actions' },
    { id: 'warehouse', icon: 'inventory_2' },
    { id: 'price', icon: 'sell' },
    { id: 'gold', icon: 'currency_exchange' }
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
            <div key={feature.id} className={styles.card}>
              <div className={styles.cardContent}>
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
