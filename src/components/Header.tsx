import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import { Icon } from './Icon';
import { StoreBadge } from './StoreBadge';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage?.split('-')[0] ?? 'ru';

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
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
            <a href="#benefits" className={styles.active}>{t('nav.features')}</a>
            <a href="#pricing">{t('nav.pricing')}</a>
            <a href="#functionality">{t('nav.howItWorks')}</a>
            <a href="#lead">{t('nav.reviews')}</a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.apps}>
            <StoreBadge size="compact" store="app-store" theme="light" />
            <StoreBadge size="compact" store="google-play" theme="light" />
          </div>
          <button className={styles.loginBtn}>{t('nav.login')}</button>
          <a className={styles.applyBtn} href="#lead">{t('nav.apply')}</a>
          <label className={styles.lang} htmlFor="language-select">
            <span className={styles.langControl}>
              <select
                className={styles.langSelect}
                id="language-select"
                onChange={handleLanguageChange}
                value={currentLanguage}
              >
                <option value="ru">Русский</option>
                <option value="kk">Қазақша</option>
                <option value="en">English</option>
              </select>
              <Icon className={styles.langIcon} name="expand_more" />
            </span>
          </label>
        </div>
      </nav>
    </header>
  );
};
