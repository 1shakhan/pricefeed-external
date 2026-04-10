import React from 'react';
import { InternalHero } from '../components/InternalAnalytics/InternalHero';
import { InternalAdvantages } from '../components/InternalAnalytics/InternalAdvantages';
import { InternalBento } from '../components/InternalAnalytics/InternalBento';
import { InternalEcosystem } from '../components/InternalAnalytics/InternalEcosystem';
import { InternalTariffs } from '../components/InternalAnalytics/InternalTariffs';
import { InternalCTA } from '../components/InternalAnalytics/InternalCTA';
import styles from '../App.module.css';

const InternalAnalyticsPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <InternalHero />
      <InternalAdvantages />
      <InternalBento />
      <InternalEcosystem />
      <InternalTariffs />
      <InternalCTA />
    </main>
  );
};

export default InternalAnalyticsPage;
