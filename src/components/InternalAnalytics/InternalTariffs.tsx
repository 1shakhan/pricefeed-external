import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalTariffs.module.css';
import { Icon } from '../Icon';

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
              <div 
                key={tariff.key} 
                className={`${styles.tariffCard} ${tariff.featured ? styles.tariffFeatured : ''}`}
              >
                {tariff.featured && (
                  <div className={styles.featuredBadge}>
                    {data.badge || t('pricing.recommended')}
                  </div>
                )}
                
                <div className={styles.tariffHeader}>
                  <h3 className={tariff.featured ? styles.tariffTitleFeatured : styles.tariffTitle}>
                    {data.title}
                  </h3>
                  <div className={styles.priceWrapper}>
                    <span className={tariff.featured ? styles.tariffPriceFeatured : styles.tariffPrice}>
                      {data.price}
                    </span>
                    {data.unit && <span className={styles.priceUnit}>{data.unit}</span>}
                    {data.discount && <span className={styles.discountBadge}>{data.discount}</span>}
                  </div>
                  {data.oldPrice && (
                    <div className={styles.oldPrice}>
                      {t('pricing.instead')} {data.oldPrice}
                    </div>
                  )}
                </div>

                <ul className={styles.tariffFeatures}>
                  {(t('internalAnalytics.tariffs.features', { returnObjects: true }) as string[]).map((feature, i) => (
                    <li key={i} className={styles.tariffFeature}>
                      <Icon className={styles.checkIcon} name="check_circle" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={tariff.featured ? styles.btnPrimary : styles.btnSecondary}>
                  {t('internalAnalytics.tariffs.connect')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

