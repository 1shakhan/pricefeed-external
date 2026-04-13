import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Pricing.module.css';
import { TariffCard } from './TariffCard';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const commonFeatures = [
    ...(t('pricing.features', { returnObjects: true }) as string[]),
    t('pricing.unlimited')
  ];

  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('pricing.title')}</h2>
          <p className={styles.subtitle}>{t('pricing.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {/* 3 Months Plan */}
          <TariffCard
            title={t('pricing.plan3.title')}
            price={t('pricing.plan3.price').replace(' ₸', '')}
            period={t('pricing.months').replace('а', ' мес')}
            features={commonFeatures}
          />

          {/* 1 Month Plan (Recommended) */}
          <TariffCard
            title={t('pricing.plan1.title')}
            price={t('pricing.plan1.price').replace(' ₸', '')}
            period={t('pricing.month')}
            badge={t('pricing.recommended')}
            features={commonFeatures}
            isRecommended={true}
          />

          {/* 6 Months Plan */}
          <TariffCard
            title={t('pricing.plan6.title')}
            price={t('pricing.plan6.price').replace(' ₸', '')}
            period="6 мес"
            features={commonFeatures}
          />
        </div>
      </div>
    </section>
  );
};
