import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Mockup from './components/Mockup';
import StatsCarousel from './components/StatsCarousel';
import LogosCarousel from './components/LogosCarousel';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Mockup />
      <StatsCarousel />
      <LogosCarousel />
      <Footer />
    </>
  );
};

export default App;

