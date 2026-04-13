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
            <Icon className={styles.cardIconBg} name="category" />
            <div>
              <h4 className={styles.cardTitle}>{t('functionality.category.title')}</h4>
              <p className={styles.cardDesc}>{t('functionality.category.desc')}</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.colSpan3}`}>
            <Icon className={styles.cardIconBg} name="trending_up" />
            <div>
              <h4 className={styles.cardTitle}>{t('functionality.calculator.title')}</h4>
              <p className={styles.cardDesc}>{t('functionality.calculator.desc')}</p>
            </div>
          </div>

          <div className={`${styles.smallCard} ${styles.colSpan2}`}>
            <Icon className={styles.cardIconBg} name="search" />
            <h4 className={styles.smallCardTitle}>{t('functionality.search.title')}</h4>
            <p className={styles.smallCardDesc}>{t('functionality.search.desc')}</p>
          </div>

          <div className={`${styles.smallCard} ${styles.colSpan2}`}>
            <Icon className={styles.cardIconBg} name="calculate" />
            <h4 className={styles.smallCardTitle}>{t('functionality.cards.title')}</h4>
            <p className={styles.smallCardDesc}>{t('functionality.cards.desc')}</p>
          </div>

          <div className={`${styles.blueCard} ${styles.colSpan2}`}>
            <Icon className={styles.cardIconBg} name="extension" />
            <h4 className={styles.smallCardTitle}>{t('functionality.extension.title')}</h4>
            <p className={styles.blueCardDesc}>{t('functionality.extension.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
