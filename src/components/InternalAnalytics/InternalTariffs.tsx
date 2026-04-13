import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalTariffs.module.css';
import { TariffCard } from '../TariffCard';

export const InternalTariffs: React.FC = () => {
  const { t } = useTranslation();

  const tariffs = [
    {
      key: 'month1',
      featured: false,
    },
    {
      key: 'month3',
      featured: true,
    },
    {
      key: 'month6',
      featured: false,
    },
  ];

  const features = t('internalAnalytics.tariffs.features', { returnObjects: true }) as string[];

  return (
    <section className={styles.tariffs} id="tariffs">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('internalAnalytics.tariffs.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('internalAnalytics.tariffs.subtitle')}</p>
        </div>
        <div className={styles.tariffsGrid}>
          {tariffs.map((tariff) => {
            const data = t(`internalAnalytics.tariffs.${tariff.key}`, { returnObjects: true }) as any;
            return (
              <TariffCard
                key={tariff.key}
                title={data.title}
                price={data.price.replace(' ₸', '')}
                period={data.unit?.replace('/ ', '')}
                badge={tariff.featured ? (data.badge || t('pricing.recommended')) : undefined}
                features={features}
                isRecommended={tariff.featured}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
