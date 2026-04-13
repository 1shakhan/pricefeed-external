import React from 'react';

export type IconName =
  | 'expand_more'
  | 'card_giftcard'
  | 'insights'
  | 'web_asset'
  | 'bolt'
  | 'category'
  | 'trending_up'
  | 'search'
  | 'calculate'
  | 'extension'
  | 'account_balance_wallet'
  | 'pending_actions'
  | 'inventory_2'
  | 'sell'
  | 'currency_exchange'
  | 'arrow_forward'
  | 'check_circle'
  | 'admin_panel_settings'
  | 'precision_manufacturing'
  | 'dashboard'
  | 'bar_chart'
  | 'construction'
  | 'whatsapp'
  | 'lightning_clock'
  | 'attach_money';

interface IconProps {
  name: IconName;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  if (name === 'whatsapp') {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.66 20.15 9.3 19.78 8.12 19.09L7.84 18.92L4.7 19.75L5.53 16.69L5.35 16.39C4.6 15.2 4.21 13.82 4.21 12.41C4.21 12.41 4.21 12.41 4.21 12.4C4.21 8.1 7.73 4.58 12.03 4.58C12.04 4.58 12.04 4.58 12.05 4.58M8.75 7.31C8.59 7.31 8.33 7.37 8.11 7.61C7.89 7.85 7.27 8.43 7.27 9.61C7.27 10.79 8.13 11.93 8.25 12.09C8.37 12.25 9.9 14.6 12.27 15.62C12.83 15.87 13.27 16.01 13.61 16.12C14.17 16.3 14.69 16.27 15.1 16.21C15.55 16.14 16.48 15.65 16.67 15.12C16.86 14.59 16.86 14.14 16.8 14.05C16.75 13.96 16.6 13.91 16.38 13.8C16.16 13.69 15.08 13.16 14.88 13.09C14.68 13.01 14.54 12.97 14.4 13.19C14.25 13.41 13.84 13.89 13.71 14.05C13.59 14.2 13.46 14.22 13.24 14.11C13.02 14 12.31 13.77 11.47 13.02C10.82 12.44 10.38 11.73 10.25 11.51C10.13 11.29 10.24 11.17 10.35 11.06C10.45 10.96 10.57 10.8 10.68 10.68C10.8 10.56 10.84 10.47 10.91 10.33C10.98 10.19 10.95 10.06 10.9 9.95C10.85 9.84 10.4 8.74 10.22 8.3C10.03 7.85 9.85 7.91 9.71 7.91C9.58 7.91 9.43 7.91 9.28 7.91C9.13 7.91 8.9 7.85 8.75 7.31Z" />
      </svg>
    );
  }

  if (name === 'bolt') {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 48 48"
        height="1em"
        width="1em"
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <path d="M26 4L10 26h14l-2 18 16-22h-14l2-18z" fill="#FFD100" />
      </svg>
    );
  }

  if (name === 'lightning_clock') {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 48 48"
        height="1em"
        width="1em"
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <path d="M26 4L10 26h14l-2 18 16-22h-14l2-18z" fill="#FFD100" />
        <circle cx="36" cy="36" r="10" fill="#C7D2FE" />
        <path d="M36 30v6l4 2" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  return (
    <span 
      aria-hidden="true" 
      className={`material-symbols-outlined ${className || ''}`}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {name}
    </span>
  );
};
