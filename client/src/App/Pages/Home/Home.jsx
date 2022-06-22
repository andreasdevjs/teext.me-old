import React from 'react';

import HomeHero from '../../Components/HomeHero/HomeHero';
import Stars from '../../Components/Stars/Stars';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';

import './Home.css';

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-full-screen-section">
        <FloatingLightningButton />
        <Stars />
        <HomeHero />
      </div>
    </React.Fragment>
  );
}

export default Home;