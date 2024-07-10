// src/App.js
import React from 'react';
import GlobalStyles from './styles/GlobalStyles.js';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
