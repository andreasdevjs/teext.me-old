import React, { useState } from 'react';
import { Box, Text, FormControl,FormLabel,FormHelperText, Input, InputGroup, Button, InputLeftAddon, InputRightElement } from '@chakra-ui/react';

const RegisterForm = () => {

  const [username, setUsername] = useState('username');
  const handleUsernameChange = (event) => setUsername(event.target.value);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <React.Fragment>
      <Box px={10} maxWidth='600px' margin='0 auto'>

        <FormControl isRequired mb={4}>
          <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='username'>Username</FormLabel>
          <InputGroup size='lg'>
            <InputLeftAddon fontWeight='bold' children='teext.me/' />
            <Input size='lg' focusBorderColor='#f2a900' id='username' type='text' onChange={handleUsernameChange} placeholder='username' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
          </InputGroup>
          <FormHelperText><b>teext.me/{username}</b> will be your link to share</FormHelperText>
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='email'>Email address</FormLabel>
          <Input size='lg' focusBorderColor='#f2a900' id='email' type='email' placeholder='satoshi@bitcoin.org' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='password'>Password</FormLabel>
          <InputGroup size='lg'>
            <Input size='lg' focusBorderColor='#f2a900' id='password' type={showPassword ? 'text' : 'password'} placeholder='********' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
            <InputRightElement fontFamily='GilroySemiBold' width='4.5rem'>
              <Button h='1.75rem' size='xs' onClick={handleShowPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          
          <FormHelperText>Your best password</FormHelperText>
        </FormControl>

        <Button mt={4} width='100%' size='lg' backgroundColor='#f2a900' color='white' textShadow='0px 0px 10px #00000080' _hover={{ bg: '#f2a900' }} fontFamily='GilroySemiBold'>
          Create account
        </Button>

        <Text textAlign='center' fontWeight='light' fontSize='14px' mt={6} opacity={0.8} cursor='pointer' color='white'>Already have an account? <u>Login here</u></Text>

      </Box>
    </React.Fragment>
  );
}

export default RegisterForm;