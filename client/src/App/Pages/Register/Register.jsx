import React from 'react';
import { Box, Heading, Kbd } from '@chakra-ui/react';

import './Register.css';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';
import LogoHeader from '../../Components/LogoHeader/LogoHeader';

const Register = () => {

  return (
    <React.Fragment>
      <LogoHeader />
      <Box className='register-page'>
        <FloatingLightningButton />
        <Box>

          <Box mb={[5, 10]}>
            <Heading color='white' as='h1' fontFamily='GilroyBold' lineHeight={1.1} textAlign='center' fontSize={['30px', '55px']}  px={4} mb={2} >
              Create an account
            </Heading>

            <Heading color='white' as='h4' fontFamily='GilroyBold' lineHeight={1.1} textAlign='center' fontSize={['16px', '30px']}>
              <Kbd color='#0c0d13'>It's free</Kbd>
            </Heading>
          </Box>

          <RegisterForm />
          
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Register;