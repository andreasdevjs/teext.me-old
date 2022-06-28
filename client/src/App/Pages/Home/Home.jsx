import React from 'react';

import HomeHero from '../../Components/HomeHero/HomeHero';
import Stars from '../../Components/Stars/Stars';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';
import LogoHeader from '../../Components/LogoHeader/LogoHeader';
import LogoFooter from '../../Components/LogoFooter/LogoFooter';

import { Box } from '@chakra-ui/react';

import './Home.css';

const Home = () => {
  return (
    <>
      <LogoHeader />
      <Box className="home-full-screen-section">
        <FloatingLightningButton />
        <Stars />
        <HomeHero />
      </Box>
      <LogoFooter />
    </>
  );
}

export default Home;