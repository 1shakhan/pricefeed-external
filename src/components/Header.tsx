import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6.5C4 5.11929 5.11929 4 6.5 4H15C22.1797 4 28 9.8203 28 17C28 24.1797 22.1797 30 15 30H4V6.5Z" fill="#0052CC"></path>
              <path d="M12 11V23" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
              <path d="M12 11H18C20.2091 11 22 12.7909 22 15C22 17.2091 20.2091 19 18 19H12" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
            </svg>
            <span>PriceFeed</span>
          </div>
          <div className={styles.links}>
            <a href="#" className={styles.active}>{t('nav.features')}</a>
            <a href="#">{t('nav.pricing')}</a>
            <a href="#">{t('nav.howItWorks')}</a>
            <a href="#">{t('nav.reviews')}</a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.apps}>
            <img alt="App Store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9tXsWTirRfgZrzXPKY4nHBwwyYA4sgwCPRCNmpjW9wz12V8qMGbU5vRpoSPaH3PpR8_ET0dDOldMoUqhlCYC6iD3MlJ4k7FV8BrvMlEMsMYvqVD4TcYQf3wq2xDk7GH4UHZCwKYABWtKvHRBnfjtPFDD36mKnk6P9rVdJmWF9pyIxqcIXc_qmpVlxorNTyUQJqggYN0tzGD_M6_9nXZ12YlNCw5uxK6wRW_J-8ObuGercrpF5fG9k-OtkCR62ZLbS82tra68QS19B" />
            <img alt="Google Play" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXRUgni82yJ0Xk8sA9-y-MNfteq2TyadOmbWKl6CvTL8J9ZeMw0Wcry7-bxiOonw0NKhwkYIv6jHKx03xIpp1qV43jzjvn7BZyB2rT0XaeUpyjZRR2vP3Thh4qPxlJ8SRNcbFr-ZqCrgePNjuitVX4fO4D-domr2vz23ZSZ-1a11OR5B2vw9RgfaIMsCKqZkWdgK3jlKfGmfoQzIZRySn7DcZaK4m1ahauQwHOx1QPSx-B1WeBYm3fqHao4Tav0fkUl3k_gsHrf8_4" />
          </div>
          <button className={styles.loginBtn}>{t('nav.login')}</button>
          <button className={styles.applyBtn}>{t('nav.apply')}</button>
          <div className={styles.lang} onClick={toggleLanguage}>
            <span>{t('nav.language')}</span>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
