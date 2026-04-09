import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Functionality.module.css';
import { Icon } from './Icon';

export const Functionality: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.functionality} id="functionality">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('functionality.title')}</h2>
          <p className={styles.subtitle}>{t('functionality.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.colSpan3}`}>
            <div>
              <Icon className={styles.iconLarge} name="category" />
              <h4 className={styles.cardTitle}>{t('functionality.category.title')}</h4>
              <p className={styles.cardDesc}>{t('functionality.category.desc')}</p>
            </div>
            <img
              className={styles.cardImage}
              src="https://lh3.googleusercontent.com/aida/ADBb0ugzihRhzgZ4S0yLgEVJ9gaMDFidvuv2OwZdqg-Vbwbo_K6zoHVrn5Le0znAcTdPAvAWmdzy98NimtO57z2zWId6JHoLuPIpobblV2_pfWOslnLloxN6ilISzlbGi_L-q89TVgYLvAEUZ8wkM4EYDCm11MPgWrNDm2wS9jtyBLOPe93euTx5_pttd7yrWma6bKHrk1zMWnta81cv6QmH2BuZn103M9wpHxwY-HQy-uqK2UFxj1DE8xo_HrISAJhn3ZohChJSMbiCcYs"
              alt="Analytics by category"
            />
          </div>

          <div className={`${styles.card} ${styles.colSpan3}`}>
            <div>
              <Icon className={styles.iconLarge} name="trending_up" />
              <h4 className={styles.cardTitle}>{t('functionality.calculator.title')}</h4>
              <p className={styles.cardDesc}>{t('functionality.calculator.desc')}</p>
            </div>
            <img
              className={styles.cardImage}
              src="https://lh3.googleusercontent.com/aida/ADBb0ui1rVLuaFdoWwK9nk00EPscKigmk_VKdN4q95CfNkH6tCVCyJqNebanhIeS90b9zcyC218HVWnZrLDfPboXEGBbLablWZBeZSS8fuKBc3k8CN7f0OhW-_QGt2miPRYbg8YteDe2USVdRXddWgQOLmk-lYL7ZFDfvknwc8VPFfujdRJHwVycByixrWUTz9cCuFyclh4l1uZH3HzcNTg4Kl4F3FxQ8MO4kmPXoZx3_DoIlaEq-1xuZZuahQKf3n_6UUCQRmy0FKCosko"
              alt="Profitability calculator"
            />
          </div>

          <div className={`${styles.smallCard} ${styles.colSpan2}`}>
            <Icon className={styles.iconSmall} name="search" />
            <h4 className={styles.smallCardTitle}>{t('functionality.search.title')}</h4>
            <p className={styles.smallCardDesc}>{t('functionality.search.desc')}</p>
          </div>

          <div className={`${styles.smallCard} ${styles.colSpan2}`}>
            <Icon className={styles.iconSmall} name="calculate" />
            <h4 className={styles.smallCardTitle}>{t('functionality.cards.title')}</h4>
            <p className={styles.smallCardDesc}>{t('functionality.cards.desc')}</p>
          </div>

          <div className={`${styles.blueCard} ${styles.colSpan2}`}>
            <Icon className={styles.iconSmallWhite} name="extension" />
            <h4 className={styles.smallCardTitle}>{t('functionality.extension.title')}</h4>
            <p className={styles.blueCardDesc}>{t('functionality.extension.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
