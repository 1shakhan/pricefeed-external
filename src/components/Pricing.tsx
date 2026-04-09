import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Pricing.module.css';
import { Icon } from './Icon';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const renderFeatures = () => {
    const features: string[] = t('pricing.features', { returnObjects: true }) as string[];
    const detailedFeatures: string[] = t('pricing.detailedFeatures', { returnObjects: true }) as string[];

    return (
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <Icon className={styles.featureIcon} name="check_circle" />
            <span>{feature}</span>
          </li>
        ))}

        <li className={styles.featureItem}>
          <Icon className={styles.featureIcon} name="check_circle" />
          <div>
            <p className={styles.detailedTitle}>{t('pricing.detailedTitle')}</p>
            <ul className={styles.detailedList}>
              {detailedFeatures.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>
        </li>

        <li className={styles.featureItem}>
          <Icon className={styles.featureIcon} name="check_circle" />
          <span>{t('pricing.unlimited')}</span>
        </li>
      </ul>
    );
  };

  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('pricing.title')}</h2>
          <p className={styles.subtitle}>{t('pricing.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {/* 3 Months Plan */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('pricing.plan3.title')}</h3>
            <div className={styles.priceContainer}>
              <span className={styles.price}>{t('pricing.plan3.price')}</span>
              <span className={styles.discount}>-16%</span>
            </div>
            <p className={styles.cardDesc}>{t('pricing.plan3.desc')}</p>

            {renderFeatures()}

            <button className={styles.btnSecondary}>{t('pricing.select')}</button>
          </div>

          {/* 1 Month Plan (Recommended) */}
          <div className={`${styles.card} ${styles.cardRecommended}`}>
            <div className={styles.recommendedBadge}>
              {t('pricing.recommended')}
            </div>
            <h3 className={styles.cardTitleRecommended}>{t('pricing.plan1.title')}</h3>
            <div className={styles.priceContainer}>
              <span className={styles.priceRecommended}>{t('pricing.plan1.price')}</span>
              <span className={styles.period}>/ {t('pricing.month')}</span>
            </div>
            <p className={styles.cardDesc}>{t('pricing.plan1.desc')}</p>

            {renderFeatures()}

            <button className={styles.btnPrimary}>{t('pricing.try')}</button>
          </div>

          {/* 6 Months Plan */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{t('pricing.plan6.title')}</h3>
            <div className={styles.priceContainer}>
              <span className={styles.price}>{t('pricing.plan6.price')}</span>
              <span className={styles.discount}>-30%</span>
            </div>
            <p className={styles.cardDesc}>{t('pricing.plan6.desc')}</p>

            {renderFeatures()}

            <button className={styles.btnSecondary}>{t('pricing.select')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
