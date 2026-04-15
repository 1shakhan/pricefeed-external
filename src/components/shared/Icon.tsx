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
  | 'attach_money'
  | 'menu'
  | 'close';

interface IconProps {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ name, className, style }) => {
  const baseStyle: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' };
  const mergedStyle = style ? { ...baseStyle, ...style } : baseStyle;

  return (
    <span 
      aria-hidden="true" 
      className={`material-symbols-outlined ${className || ''}`}
      style={mergedStyle}
    >
      {name}
    </span>
  );
};
