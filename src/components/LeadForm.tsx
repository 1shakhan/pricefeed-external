import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LeadForm.module.css';
import { Icon } from './Icon';

export const LeadForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.leadForm} id="lead">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('lead.title')}</h2>
          <p className={styles.subtitle}>{t('lead.subtitle')}</p>

          <div className={styles.quoteCard}>
            <p className={styles.quote}>"{t('lead.quote')}"</p>
            <div className={styles.authorContainer}>
              <div className={styles.avatar}>SA</div>
              <div>
                <p className={styles.author}>{t('lead.author')}</p>
                <p className={styles.role}>{t('lead.role')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>{t('lead.cardTitle')}</h3>
          <p className={styles.formDesc}>{t('lead.cardDesc')}</p>

          <div className={styles.actions}>
            <button className={styles.cta}>
              {t('lead.cta')}
              <Icon className={styles.ctaIcon} name="arrow_forward" />
            </button>
            <p className={styles.note}>{t('lead.note')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
