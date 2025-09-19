import React from 'react';
import A from './components/A';
import Mockup from './components/B';
import StatsCarousel from './components/C';
import LogosCarousel from './components/D';
import Footer from './components/E';

const App: React.FC = () => {
  return (
    <>
      <A />
      <Mockup />
      <StatsCarousel />
      <LogosCarousel />
      <Footer />
    </>
  );
};

export default App;

