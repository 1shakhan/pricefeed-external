import React from 'react';
import styles from './StoreBadge.module.css';

type StoreBadgeProps = {
  store: 'app-store' | 'google-play';
  href?: string;
  theme?: 'dark' | 'light';
  size?: 'default' | 'compact';
};

const GooglePlayGlyph: React.FC = () => (
  <svg aria-hidden="true" className={styles.googleIcon} viewBox="0 0 28 31" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.17 1.86c-.5.56-.79 1.42-.79 2.56v22.15c0 1.14.29 2 .8 2.56l.12.11L14.7 16.83v-2.67L2.3 1.75z" fill="#00C3FF" />
    <path d="m18.83 20.94-4.13-4.11v-2.67l4.13-4.1.1.06 4.9 2.8c1.4.8 1.4 2.12 0 2.92l-4.9 2.8z" fill="#FFCE00" />
    <path d="M18.93 20.88 14.7 16.66 2.17 29.14c.8.88 2.14.99 3.66.12l13.1-7.48" fill="#32D74B" />
    <path d="M18.93 10.11 5.83 2.63c-1.52-.87-2.86-.76-3.66.12L14.7 15.5l4.23-5.4z" fill="#FF5F57" />
  </svg>
);

const AppStoreGlyph: React.FC = () => (
  <svg aria-hidden="true" className={styles.appleIcon} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.97 4.72c1.27-1.54 2.13-3.67 1.9-5.72-1.84.07-4.07 1.23-5.39 2.78-1.18 1.35-2.22 3.5-1.95 5.56 2.05.16 4.15-1.03 5.44-2.62Z" fill="currentColor" />
    <path d="M18.84 15.64c.03-3.11 2.57-4.6 2.69-4.67-1.47-2.14-3.74-2.43-4.54-2.46-1.93-.2-3.77 1.15-4.75 1.15s-2.49-1.12-4.1-1.09c-2.1.03-4.04 1.22-5.12 3.1-2.18 3.77-.56 9.36 1.57 12.45 1.04 1.51 2.29 3.2 3.92 3.14 1.57-.07 2.16-1.02 4.06-1.02 1.91 0 2.44 1.02 4.09.99 1.69-.03 2.76-1.53 3.79-3.05 1.19-1.74 1.68-3.43 1.71-3.52-.04-.02-3.28-1.25-3.32-5.02Z" fill="currentColor" />
  </svg>
);

export const StoreBadge: React.FC<StoreBadgeProps> = ({
  store,
  href = '#',
  theme = 'dark',
  size = 'default',
}) => {
  const isAppStore = store === 'app-store';
  const themeClass = theme === 'light' ? styles.light : styles.dark;
  const sizeClass = size === 'compact' ? styles.compact : '';

  return (
    <a
      aria-label={isAppStore ? 'Download on the App Store' : 'Get it on Google Play'}
      className={`${styles.badge} ${themeClass} ${sizeClass}`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <span className={styles.iconWrap}>
        {isAppStore ? <AppStoreGlyph /> : <GooglePlayGlyph />}
      </span>
      <span className={styles.text}>
        <span className={styles.eyebrow}>
          {isAppStore ? 'Download on the' : 'Get it on'}
        </span>
        <span className={styles.title}>
          {isAppStore ? 'App Store' : 'Google Play'}
        </span>
      </span>
    </a>
  );
};
