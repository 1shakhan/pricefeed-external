import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalBento.module.css';

const InternalBento: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.bentoSection} id="features">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('internalAnalytics.bento.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('internalAnalytics.bento.subtitle')}</p>
        </div>
        <div className={styles.bentoGrid}>
          {/* Unit Economics Card */}
          <div className={`${styles.bentoCard} ${styles.largeCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <span className={styles.materialIcons}>calculate</span>
              </div>
              <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.unit.title')}</h3>
              <p className={styles.cardDesc}>{t('internalAnalytics.bento.unit.desc')}</p>
            </div>
            <div className={styles.cardVisual}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneNotch}></div>
                <div className={styles.phoneContent}>
                  <div className={styles.skeletonLine} style={{ width: '75%' }}></div>
                  <div className={styles.skeletonLine} style={{ width: '50%' }}></div>
                  <div className={styles.skeletonBox}>12 400 ₸</div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className={styles.bentoCard}>
            <div className={styles.badge}>{t('internalAnalytics.bento.summary.badge')}</div>
            <div className={styles.cardIcon}>
              <span className={styles.materialIcons}>dashboard</span>
            </div>
            <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.summary.title')}</h3>
            <ul className={styles.featureList}>
              {(t('internalAnalytics.bento.summary.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={`${styles.materialIcons} ${styles.checkIcon}`}>check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* ABC Analysis Card */}
          <div className={styles.bentoCard}>
            <div className={styles.cardIcon}>
              <span className={styles.materialIcons}>bar_chart</span>
            </div>
            <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.abc.title')}</h3>
            <p className={styles.cardDesc}>{t('internalAnalytics.bento.abc.desc')}</p>
          </div>

          {/* Margin Card */}
          <div className={`${styles.bentoCard} ${styles.overflowHidden}`}>
            <div className={styles.cardIcon}>
              <span className={styles.materialIcons}>trending_up</span>
            </div>
            <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.margin.title')}</h3>
            <p className={styles.cardDesc}>{t('internalAnalytics.bento.margin.desc')}</p>
            <div className={styles.relativeIcon}>
              <span className={styles.materialIcons} style={{ fontSize: '120px' }}>attach_money</span>
            </div>
          </div>

          {/* Advanced Card */}
          <div className={styles.bentoCard}>
            <div className={styles.cardIcon}>
              <span className={styles.materialIcons}>construction</span>
            </div>
            <h3 className={styles.cardTitle}>{t('internalAnalytics.bento.advanced.title')}</h3>
            <div className={styles.tagGroup}>
              {(t('internalAnalytics.bento.advanced.features', { returnObjects: true }) as string[]).map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.whatsappNote}>
              {t('internalAnalytics.bento.advanced.whatsappNote')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalBento;
