import React, { useState } from 'react';
import { Box, Text, FormControl,FormLabel, Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';

const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <React.Fragment>
      <Box px={10} maxWidth='600px' margin='0 auto'>

        <FormControl mb={4}>
          <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='email'>Email</FormLabel>
          <Input size='lg' focusBorderColor='#f2a900' id='email' type='email' placeholder='satoshi@bitcoin.org' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='password'>Password</FormLabel>
          <InputGroup size='lg'>
            <Input size='lg' focusBorderColor='#f2a900' id='password' type={showPassword ? 'text' : 'password'} placeholder='********' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
            <InputRightElement fontFamily='GilroySemiBold' width='4.5rem'>
              <Button h='1.75rem' size='xs' onClick={handleShowPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button mt={4} width='100%' size='lg' backgroundColor='#f2a900' color='white' textShadow='0px 0px 10px #00000080' _hover={{ bg: '#f2a900' }} fontFamily='GilroySemiBold'>
          Enter
        </Button>

        <Text textAlign='center' fontWeight='light' fontSize='14px' mt={6} opacity={0.8} cursor='pointer' color='white'>Don't have an account? <u>Create one here</u></Text>

      </Box>
    </React.Fragment>
  );
}

export default LoginForm;