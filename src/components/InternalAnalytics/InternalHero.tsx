import React from 'react';
import {useTranslation, Trans} from 'react-i18next';
import styles from './InternalHero.module.css';

export const InternalHero: React.FC = () => {
  const {t} = useTranslation();

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
              <a
                href={`https://api.whatsapp.com/send/?phone=77772842986&text=${encodeURIComponent(
                  t('whatsapp.message')
                )}&type=phone_number&app_absent=0`}
                className={styles.btnPrimary}
                rel="noreferrer"
                target="_blank"
              >
                {t('internalAnalytics.hero.ctaConsult')}
              </a>
              <a
                href={`https://api.whatsapp.com/send/?phone=77772842986&text=${encodeURIComponent(
                  t('whatsapp.message')
                )}&type=phone_number&app_absent=0`}
                className={styles.btnSecondary}
                rel="noreferrer"
                target="_blank"
              >
                {t('internalAnalytics.hero.ctaDemo')}
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageContainer}>
              <img src="/internal.png" alt="Internal Analytics Infographic"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
