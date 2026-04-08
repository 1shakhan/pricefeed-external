import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className={styles.badge}>{t('hero.badge')}</span>
          <h1 className={styles.title}>{t('hero.title')}</h1>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>

          <div className={styles.actions}>
            <div className={styles.giftcard}>
              <div className={styles.giftcardIcon}>
                <span className="material-symbols-outlined">card_giftcard</span>
              </div>
              <div className={styles.giftcardText}>
                <p className={styles.giftcardTitle}>{t('hero.giftcardTitle')}</p>
                <p className={styles.giftcardSubtitle}>{t('hero.giftcardSubtitle')}</p>
              </div>
            </div>

            <button className={styles.cta}>{t('hero.cta')}</button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0ujuRGGjDMgkWmsU53luD5o9btJV_kJkRHOF9Rw8wCHEtb76zE0KDyaCVy5Y11nffA_tooQ8lI74fpxazxMYUbpAerFPFsHw_lKd5hJiBH8oK6ngrH9i1gMi-yoLMicwAxexD7fwqvSMFIlCOwM07ZqJdVvLtZqVJUhjLKU7bxYL72l6BrRYe5rdX6r7FZCYxyRD3Znuwk3z18PHql4Y6qT0LMlnVqhHCO_O32cMNPg5DLWmwkkVAwn9kO4uFYcp7i_UdR6xvZH7EJg"
              alt="PriceFeed sales and turnover analytics"
            />
          </div>
          <div className={styles.blurEffect}></div>
        </div>
      </div>
    </section>
  );
};
