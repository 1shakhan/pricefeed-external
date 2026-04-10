import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalEcosystem.module.css';
import { Icon, type IconName } from '../Icon';

interface EcosystemItem {
  title: string;
  desc: string;
}

export const InternalEcosystem: React.FC = () => {
  const { t } = useTranslation();
  
  const items = t('internalAnalytics.more.items', { returnObjects: true }) as EcosystemItem[];

  const icons: IconName[] = [
    'insights',
    'trending_up',
    'inventory_2',
    'sell',
    'currency_exchange',
    'extension'
  ];

  return (
    <section className={styles.ecosystem} id="ecosystem">
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{t('internalAnalytics.more.title')}</h2>
          <p className={styles.subtitle}>{t('internalAnalytics.more.subtitle')}</p>
          
          <div className={styles.grid}>
            {items.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.itemIcon}>
                  <Icon name={icons[index] || 'check_circle'} />
                </div>
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
