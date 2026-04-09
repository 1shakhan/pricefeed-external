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
  | 'check_circle';

type IconProps = {
  name: IconName;
  className?: string;
};

const iconPaths: Record<IconName, React.ReactNode> = {
  expand_more: <path d="m7 10 5 5 5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  card_giftcard: (
    <>
      <path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21 7H3v5h18V7Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 20V7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 7H9.5a2.5 2.5 0 1 1 0-5c2 0 2.5 2.5 2.5 5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 7h2.5a2.5 2.5 0 1 0 0-5c-2 0-2.5 2.5-2.5 5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </>
  ),
  insights: (
    <>
      <path d="M5 19V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M12 19V5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M19 19v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </>
  ),
  web_asset: (
    <>
      <rect height="14" rx="2" ry="2" width="18" x="3" y="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  category: (
    <>
      <rect height="7" rx="1.5" width="7" x="4" y="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect height="7" rx="1.5" width="7" x="13" y="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect height="7" rx="1.5" width="7" x="4" y="13" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect height="7" rx="1.5" width="7" x="13" y="13" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  trending_up: <path d="m4 16 6-6 4 4 6-8M14 6h6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  search: (
    <>
      <circle cx="11" cy="11" fill="none" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-4.35-4.35" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </>
  ),
  calculate: (
    <>
      <rect height="18" rx="2" width="14" x="5" y="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 19h8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </>
  ),
  extension: (
    <>
      <path d="M12.5 7.5H18a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2h-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M11.5 16.5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 7.5a2.5 2.5 0 1 1 5 0v1H9v-1a2.5 2.5 0 1 1 1-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M14 16.5a2.5 2.5 0 1 1-5 0v-1h6v1a2.5 2.5 0 1 1-1 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </>
  ),
  account_balance_wallet: (
    <>
      <path d="M4 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M4 9h14a2 2 0 0 1 2 2v2h-5a2 2 0 0 1 0-4h5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="15" cy="11" fill="currentColor" r="1" />
    </>
  ),
  pending_actions: (
    <>
      <path d="M8 7V4h12v16H4V7h4Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 4v4h4" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="m9 13 2 2 4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </>
  ),
  inventory_2: (
    <>
      <path d="M4 8h16l-2 11H6L4 8Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="M3 5h18v3H3z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10 12h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </>
  ),
  sell: (
    <>
      <path d="m12 3 8 8-7.5 7.5a2.12 2.12 0 0 1-3 0L3 12V3h9Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <circle cx="7.5" cy="7.5" fill="none" r="1.5" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  currency_exchange: (
    <>
      <path d="M7 7h10M7 17h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="m13 4 4 3-4 3M11 14l-4 3 4 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </>
  ),
  arrow_forward: <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  check_circle: (
    <>
      <circle cx="12" cy="12" fill="none" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="m8.5 12 2.5 2.5 4.5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </>
  ),
};

export const Icon: React.FC<IconProps> = ({ name, className }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {iconPaths[name]}
  </svg>
);
