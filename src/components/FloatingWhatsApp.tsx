import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FloatingWhatsApp.module.css';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useTranslation();
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=77772842986&text=${encodeURIComponent(
    t('whatsapp.message')
  )}&type=phone_number&app_absent=0`;

  return (
    <a
      aria-label="WhatsApp"
      className={styles.floatingBtn}
      href={whatsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <svg fill="white" height="32" viewBox="0 0 24 24" width="32">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.768-5.764-5.768zm3.393 8.21c-.146.409-.844.75-1.161.797-.282.041-.652.067-1.047-.058-.242-.078-.553-.182-1.002-.379-1.915-.841-3.155-2.793-3.251-2.92-.095-.126-.777-.991-.777-1.89s.484-1.341.656-1.512c.171-.171.373-.214.498-.214.125 0 .25 0 .356.006.113.006.265-.043.415.32.155.373.529 1.29.575 1.385.046.096.076.208.012.336s-.096.224-.191.336c-.095.112-.2.25-.286.336-.1.101-.205.211-.088.411.117.2.521.861 1.116 1.391.765.682 1.408.894 1.609.994.2.1.32.083.438-.053.118-.136.512-.597.649-.8.136-.203.273-.171.46-.101s1.18.558 1.384.66c.205.101.341.15.39.235.049.085.049.492-.097.901z"></path>
      </svg>
    </a>
  );
};
