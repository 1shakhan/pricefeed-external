import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/shared/Header.tsx';
import { Footer } from './components/shared/Footer.tsx';
import { FloatingWhatsApp } from './components/external/FloatingWhatsApp.tsx';
import ExternalAnalyticsPage from './pages/ExternalAnalyticsPage';
import InternalAnalyticsPage from './pages/InternalAnalyticsPage';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<ExternalAnalyticsPage />} />
          <Route path="/internal-analytics" element={<InternalAnalyticsPage />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
