import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import './Login.css';
import 'animate.css';

import LoginForm from '../../Components/LoginForm/LoginForm';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';


const Login = () => {

  return (
    <React.Fragment>
      <Box className='login-page'>
         <FloatingLightningButton />
        <Box>

          <Box mb={[5, 10]}>
            <Heading className='animate__animated animate__backInDown' color='white' as='h1' fontFamily='GilroyBold' lineHeight={1.1} textAlign='center' fontSize={['30px', '55px']}  px={4} mb={2} >
              Welcome back
            </Heading>
          </Box>

          <LoginForm />
          
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Login;