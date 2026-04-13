import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './InternalHero.module.css';

export const InternalHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <Trans i18nKey="internalAnalytics.hero.title">
                Оцифруйте ваш магазин на Kaspi: <span className={styles.highlight}>точная юнит-экономика</span> и аналитика продаж
              </Trans>
            </h1>
            <p className={styles.subtitle}>
              {t('internalAnalytics.hero.subtitle')}
            </p>
            <div className={styles.ctaGroup}>
              <a href="#tariffs" className={styles.btnPrimary}>
                {t('internalAnalytics.hero.ctaConsult')}
              </a>
              <button className={styles.btnSecondary}>
                {t('internalAnalytics.hero.ctaDemo')}
              </button>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageContainer}>
              <img
                src="/external.png"
                alt="Internal Analytics Infographic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
