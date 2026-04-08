import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Benefits.module.css';

export const Benefits: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.benefits}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className="material-symbols-outlined">insights</span>
          </div>
          <h3 className={styles.title}>{t('benefits.accuracy.title')}</h3>
          <p className={styles.desc}>{t('benefits.accuracy.desc')}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className="material-symbols-outlined">web_asset</span>
          </div>
          <h3 className={styles.title}>{t('benefits.native.title')}</h3>
          <p className={styles.desc}>{t('benefits.native.desc')}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className="material-symbols-outlined">bolt</span>
          </div>
          <h3 className={styles.title}>{t('benefits.speed.title')}</h3>
          <p className={styles.desc}>{t('benefits.speed.desc')}</p>
        </div>
      </div>
    </section>
  );
};
