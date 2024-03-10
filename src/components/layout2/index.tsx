import React, { useEffect } from 'react';
// @ts-ignore
import WOW from 'wowjs';
import Analytics from './Analytics';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Insight from './Insight';
import MiddleSection from './MiddleSection';

const LayoutTwo = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      scrollContainer: '.wrapper',
    });
    wow.init();
  }, []);
  return (
    <div className="bg-gray-dark2 pt-10 pb-20 h-screen">
      <div className="bg-white w-68% m-auto rounded-3xl pt-1 h-[45rem] wrapper">
        <Header className="" />
        <Hero />
        <Analytics />
        <MiddleSection />
        <Dashboard />
        <Insight />
        <Footer />
      </div>
    </div>
  );
};
export default LayoutTwo;
