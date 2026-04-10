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
  | 'attach_money';

type IconProps = {
  name: IconName;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({ name, className }) => (
  <span 
    aria-hidden="true" 
    className={`material-symbols-outlined ${className || ''}`}
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
  >
    {name}
  </span>
);
