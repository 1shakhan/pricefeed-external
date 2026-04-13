import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import styles from './TariffCard.module.css';

export interface TariffCardProps {
  title: string;
  price: string;
  currency?: string;
  period?: string;
  badge?: string;
  features: string[];
  isRecommended?: boolean;
}

export const TariffCard: React.FC<TariffCardProps> = ({
  title,
  price,
  currency = '₸',
  period,
  badge,
  features,
  isRecommended = false,
}) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const hasMoreFeatures = features.length > 3;
  const visibleFeatures = isExpanded ? features : features.slice(0, 3);

  return (
    <div className={`${styles.card} ${isRecommended ? styles.recommended : ''}`}>
      {badge && <div className={styles.badge}>{badge}</div>}
      
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{price}</span>
          <span className={styles.currency}>{currency}</span>
          {period && <span className={styles.period}> / {period}</span>}
        </div>
      </div>

      <div className={`${styles.features} ${isExpanded ? styles.expanded : ''}`}>
        {visibleFeatures.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <Icon name="check_circle" className={styles.checkIcon} />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {hasMoreFeatures && (
        <div className={styles.footer}>
          <button 
            className={styles.detailsBtn} 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? t('pricing.collapse') : t('ecosystem.more')}
          </button>
        </div>
      )}
    </div>
  );
};
