import React from 'react';
import ScrollReveal from 'scrollreveal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; // CSS file or use CSS-in-JS

import Header from './components/Header';
import AboutSection from './components/AboutSection';
import RoomSection from './components/RoomSection';
import ServiceSection from './components/ServiceSection';
import BannerSection from './components/BannerSection';
import ExploreSection from './components/ExploreSection';
import Footer from './components/Footer';
// import Home from './components/Home';

const App = () => {
  // Initialize ScrollReveal
  React.useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    ScrollReveal().reveal('.header__container p', { ...scrollRevealOption });
    ScrollReveal().reveal('.header__container h1', { ...scrollRevealOption, delay: 500 });
    // Add more ScrollReveal calls as needed
  }, []);

  return (
    
    <div className="App">
      <Header />
      <AboutSection />
      <RoomSection />
      <ServiceSection />
      <BannerSection />
      <ExploreSection />
      <Footer />
    </div>
  );
};

export default App;
