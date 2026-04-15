import React from 'react';
import { Hero } from '../components/external/Hero.tsx';
import { Benefits } from '../components/external/Benefits.tsx';
import { Functionality } from '../components/external/Functionality.tsx';
import { Ecosystem } from '../components/external/Ecosystem.tsx';
import { Pricing } from '../components/external/Pricing.tsx';
import { LeadForm } from '../components/external/LeadForm.tsx';
import styles from '../App.module.css';

const ExternalAnalyticsPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Benefits />
      <Functionality />
      <Ecosystem />
      <Pricing />
      <LeadForm />
    </main>
  );
};

export default ExternalAnalyticsPage;
