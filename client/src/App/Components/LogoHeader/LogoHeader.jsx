import React from 'react';

import { Box, Image } from '@chakra-ui/react';

import ImageLogoHeader from '../../Assets/Images/teextme-logo.svg';

const LogoHeader = ({ menu, closeMainMenu}) => {
  return (
    <Box p={3} position={'fixed'} textAlign={'center'} top={0} width={'100%'}>
      <Image margin={'0 auto'} width={'25px'} src={ImageLogoHeader} />
    </Box>
  );
}


export default LogoHeader;