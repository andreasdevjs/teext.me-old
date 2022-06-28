import React from 'react';

import { Box, Text } from '@chakra-ui/react';

const LogoFooter = ({ menu, closeMainMenu}) => {
  return (
    <Box p={2} position={'fixed'} textAlign={'center'} bottom={0} width={'100%'}>
      <Text textShadow={'1px 1px 30px #00000030'} color={'white'} fontSize={'12px'} fontFamily='GilroyBold' fontWeight='bold'>teext.me</Text>
    </Box>
  );
}


export default LogoFooter;