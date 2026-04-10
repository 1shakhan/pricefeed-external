import React from 'react';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Functionality } from '../components/Functionality';
import { Ecosystem } from '../components/Ecosystem';
import { Pricing } from '../components/Pricing';
import { LeadForm } from '../components/LeadForm';
import styles from '../App.module.css';

const MainPage: React.FC = () => {
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

export default MainPage;
