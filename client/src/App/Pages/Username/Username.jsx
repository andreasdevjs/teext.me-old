import React from 'react';
import { Box } from '@chakra-ui/react';

import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';
import LogoHeader from '../../Components/LogoHeader/LogoHeader';
import MessageForm from '../../Components/MessageForm/MessageForm';

import './Username.css';

function Username() {

  return (
    <Box className='username-page'>
      <FloatingLightningButton />
      <LogoHeader />
      <MessageForm />
    </Box>
  );
}


export default Username;
