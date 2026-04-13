import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './InternalHero.module.css';
import { ImagePlaceholder } from '../ImagePlaceholder';

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
              <ImagePlaceholder
                src="https://lh3.googleusercontent.com/aida/ADBb0uj0TZj2sQGjTAs1i_40rR6Lvj_2vaLrmHqZrXkCNqzuHy5Cs9ThYy1E_4BoCrlF_9SV0gvJkuFeIN-KLXFirCmWyqL_XCHV-ELXvicL9RJAu6Uia1uux7tktvZ-LwkFLauoQcfn5Fj2BGYEjAnkKmwYpq_YaFK2mD1DzrYUc9zpVZTYn0i9r_Dsil0EKhoV1joR8aB2jND1v8tgJ5P7HeRUcbFcMYVXwZxX5S1YJ1AfUmSjxYc42sDBJ5V2afftY3hKJgWeYjNdzIU"
                alt="Internal Analytics Infographic"
                aspectRatio="video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
