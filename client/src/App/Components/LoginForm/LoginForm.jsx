import React, { useState } from 'react';
import { Box, Text, FormControl,FormLabel, Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';

const LoginForm = () => {

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = loginFormData;

  const onInputChange = (e) => {
    setLoginFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logueando');
  }

  return (
    <React.Fragment>
      <Box px={10} maxWidth={['400px', '500px']}  margin='0 auto'>

        <form onSubmit={handleLogin}>

          <FormControl isRequired mb={4}>
            <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='email'>Email</FormLabel>
            <Input name='email' value={email} onChange={onInputChange} size='lg' focusBorderColor='#f2a900' id='email' type='email' placeholder='satoshi@bitcoin.org' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
          </FormControl>

          <FormControl isRequired mb={4}>
            <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='password'>Password</FormLabel>
            <InputGroup size='lg'>
              <Input name='password' value={password} onChange={onInputChange} size='lg' focusBorderColor='#f2a900' id='password' type={showPassword ? 'text' : 'password'} placeholder='********' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
              <InputRightElement fontFamily='GilroySemiBold' width='4.5rem'>
                <Button h='1.75rem' size='xs' onClick={handleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button type={'submit'} mt={4} width='100%' size='lg' backgroundColor='#f2a900' color='white' _hover={{ bg: '#f2a900' }} _active={{ bg: '#b58530' }} fontFamily='GilroySemiBold'>
            Enter
          </Button>

        </form>

        <Text textAlign='center' fontWeight='light' fontSize='14px' mt={6} opacity={0.8} cursor='pointer' color='white'>Don't have an account? <u>Create one now</u></Text>

      </Box>
    </React.Fragment>
  );
}

export default LoginForm;