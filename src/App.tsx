import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Functionality } from './components/Functionality';
import { Ecosystem } from './components/Ecosystem';
import { Pricing } from './components/Pricing';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Functionality />
        <Ecosystem />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
