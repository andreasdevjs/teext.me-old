import React from 'react';

import HomeHero from '../../Components/HomeHero/HomeHero';
import Stars from '../../Components/Stars/Stars';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';

import { Box } from '@chakra-ui/react';

import './Home.css';

const Home = () => {
  return (
    <>
      <Box className="home-full-screen-section">
        <FloatingLightningButton />
        <Stars />
        <HomeHero />
      </Box>
    </>
  );
}

export default Home;