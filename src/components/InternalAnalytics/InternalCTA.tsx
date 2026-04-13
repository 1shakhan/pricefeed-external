import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InternalCTA.module.css';
import { Icon } from '../Icon';

export const InternalCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.ctaSection} id="cta">
      <div className="container">
        <div className={styles.ctaGrid}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>{t('internalAnalytics.cta.title')}</h2>
            <p className={styles.ctaSubtitle}>{t('internalAnalytics.cta.subtitle')}</p>
            
            <div className={styles.testimonial}>
              <p className={styles.testimonialText}>
                {t('internalAnalytics.cta.testimonial')}
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>SA</div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{t('internalAnalytics.cta.author')}</p>
                  <p className={styles.authorRole}>{t('internalAnalytics.cta.role')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaFormWrapper}>
            <div className={styles.ctaForm}>
              <h3 className={styles.formTitle}>{t('internalAnalytics.cta.formTitle')}</h3>
              <p className={styles.formDesc}>{t('internalAnalytics.cta.formDesc')}</p>
              
              <a
                href="https://pricefeed.kz/cabinet/sign-in"
                className={styles.formBtn}
              >
                {t('internalAnalytics.cta.formBtn')}
                <Icon className={styles.btnArrow} name="arrow_forward" />
              </a>
              
              <p className={styles.formNote}>{t('internalAnalytics.cta.note')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
