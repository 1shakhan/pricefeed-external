import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalBento.module.css';
import { Icon } from '../shared/Icon.tsx';

export const InternalBento: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.bentoSection} id="features">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('internalAnalytics.bento.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('internalAnalytics.bento.subtitle')}</p>
        </div>
        
        <div className={styles.bentoGrid}>
          {/* Unit Economics - Large Card */}
          <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
            <Icon name="insights" className={styles.cardIcon} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.unit.title')}</h3>
              <p className={styles.cardDesc}>{t('internalAnalytics.bento.unit.desc')}</p>
            </div>
          </div>
          
          {/* Store Summary - Medium Card */}
          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <Icon name="bar_chart" className={styles.cardIcon} />
            <div className={styles.cardContent}>
              <div className={styles.badge}>{t('internalAnalytics.bento.summary.badge')}</div>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.summary.title')}</h3>
              <ul className={styles.featureList}>
                {(t('internalAnalytics.bento.summary.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <Icon className={styles.checkIcon} name="check_circle" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* ABC Analysis - Small Card */}
          <div className={styles.bentoCard}>
            <Icon name="trending_up" className={styles.cardIcon} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.abc.title')}</h3>
              <p className={styles.cardDesc}>{t('internalAnalytics.bento.abc.desc')}</p>
            </div>
          </div>
          
          {/* Margin - Small Card */}
          <div className={styles.bentoCard}>
            <Icon name="calculate" className={styles.cardIcon} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.margin.title')}</h3>
              <p className={styles.cardDesc}>{t('internalAnalytics.bento.margin.desc')}</p>
            </div>
          </div>
          
          {/* Advanced Features - Medium Card */}
          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <Icon name="bolt" className={styles.cardIcon} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.advanced.title')}</h3>
              <ul className={styles.featureList}>
                {(t('internalAnalytics.bento.advanced.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <Icon className={styles.checkIcon} name="bolt" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className={styles.whatsappNote}>{t('internalAnalytics.bento.advanced.whatsappNote')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
