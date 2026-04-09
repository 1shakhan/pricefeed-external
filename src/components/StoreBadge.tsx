import React from 'react';
import styles from './StoreBadge.module.css';

type StoreBadgeProps = {
  store: 'app-store' | 'google-play';
  href?: string;
  theme?: 'dark' | 'light';
  size?: 'default' | 'compact';
};

export const StoreBadge: React.FC<StoreBadgeProps> = ({
  store,
  href = '#',
  size = 'default',
}) => {
  const isAppStore = store === 'app-store';
  const sizeClass = size === 'compact' ? styles.compact : '';

  return (
    <a
      aria-label={isAppStore ? 'Download on the App Store' : 'Get it on Google Play'}
      className={`${styles.badge} ${sizeClass}`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <img
        alt={isAppStore ? 'Download on the App Store' : 'Get it on Google Play'}
        className={styles.storeImage}
        src={
          isAppStore
            ? 'https://pricefeed.kz/assets/custom-logo/appStore.svg'
            : 'https://pricefeed.kz/assets/custom-logo/googlePlay.svg'
        }
      />
    </a>
  );
};
