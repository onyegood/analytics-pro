import React, { useEffect } from 'react';
// @ts-ignore
import WOW from 'wowjs';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Analytics from './components/layout/Analytics';
import MiddleSection from './components/layout/MiddleSection';
import Dashboard from './components/layout/Dashboard';
import Insight from './components/layout/Insight';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div className="rounded-md">
      <Header />
      <Hero />
      <Analytics />
      <MiddleSection />
      <Dashboard />
      <Insight />
      <Footer />
    </div>
  );
}

export default App;
