import React from 'react';
import Titulo from './components/Titulo';
import A from './components/A';
import Mockup from './components/B';
import StatsCarousel from './components/C';
import LogosCarousel from './components/D';
import Footer from './components/E';

const App: React.FC = () => {
  return (
    <>
      <Titulo />
      <A />
      <Mockup />
      <StatsCarousel />
      <LogosCarousel />
      <Footer />
    </>
  );
};

export default App;

