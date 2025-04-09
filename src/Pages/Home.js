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
import GetVisits from '../Components/GetVisits';

function Home() {
  return (
    <div className="page-wrapper">
    <GetVisits />
    <Notifications />
    <NavigationBar />
    <HeroSection />
    <WorldCurrencies />
    <CountHolder />
    <ConversionCaller />
    <NewsHolder isHome={true} />
    <Footer />
    
    </div>
  );
}

export default Home;