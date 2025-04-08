// App.jsx
import React from 'react';
import Notifications from '../Components/Notifications';
import NavigationBar from '../Components/NavigationBar';
import HeroSection from '../Components/HeroSection';
import WorldCurrencies from '../Components/WorldCurrencies';
import CountHolder from '../Components/CountHolder';
import ConversionCaller from '../Components/ConversionCaller';
import NewsHolder from '../Components/NewsHolder';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="page-wrapper">
    <Notifications />
    <NavigationBar />
    <HeroSection />
    <WorldCurrencies />
    <CountHolder />
    <ConversionCaller />
    <NewsHolder />
    <Footer />
        
    </div>
  );
}

export default Home;