import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Heading } from "@chakra-ui/react";

import './Menu.css';

function Menu() {

  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  } 

  return (
    <Box className='main-navigation-wrapper'>
      <Box className='menu-navigation' width={['300px', '500px']}>
        <Box>
          <Heading onClick={() => { handleNavigation(''); }} display='inline-block' as='h4' fontSize={['30px', '50px']} textAlign='left' mb={3} color='white' cursor='pointer' fontFamily='GilroySemiBold' className='menu-item'>Home</Heading>
        </Box>
        <Box>
          <Heading onClick={() => { handleNavigation('account'); }} display='inline-block' as='h4' fontSize={['30px', '50px']} textAlign='left' mb={3} color='white' cursor='pointer' fontFamily='GilroySemiBold' className='menu-item'>Account</Heading>
        </Box>
        <Box>
          <Heading onClick={() => { handleNavigation('how-it-works'); }} display='inline-block' as='h4' fontSize={['30px', '50px']} textAlign='left' mb={3} color='white' cursor='pointer' fontFamily='GilroySemiBold' className='menu-item'>How it works</Heading>
        </Box>
        <Box>
          <Heading onClick={() => { handleNavigation('SatoshiNakamoto'); }} display='inline-block' as='h4' fontSize={['30px', '50px']} textAlign='left' mb={3} color='white' cursor='pointer' fontFamily='GilroySemiBold' className='menu-item'>Example</Heading>
        </Box>
        <Box>
          <Heading onClick={() => { handleNavigation('faq'); }} display='inline-block' as='h4' fontSize={['30px', '50px']} textAlign='left' mb={3} color='white' cursor='pointer' fontFamily='GilroySemiBold' className='menu-item'>FAQ</Heading>
        </Box>
        <Box>
          <Heading onClick={() => { handleNavigation('register'); }} display='inline-block' as='h4' fontSize={['30px', '50px']} textAlign='left' mb={3} color='white' cursor='pointer' fontFamily='GilroySemiBold' className='menu-item'>Register/Login</Heading>
        </Box>
        <Box>
          <Heading onClick={() => { handleNavigation('lightning-network'); }} display='inline-block' as='h4' fontSize={['30px', '50px']} textAlign='left' mb={3} color='#f2a900' cursor='pointer' fontFamily='GilroySemiBold' className='menu-item'>Lightning Network ⚡</Heading>
        </Box>
      </Box>
   </Box>
  )
}

export default Menu;