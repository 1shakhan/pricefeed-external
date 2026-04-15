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
      <div className={styles.ripple} />
      <div className={styles.ripple2} />
      <div className={styles.iconWrapper}>
        <img 
          src="https://pricefeed.kz/assets/feedback-cards/wa.svg" 
          alt="WhatsApp" 
          className={styles.iconImg} 
        />
      </div>
    </a>
  );
};
