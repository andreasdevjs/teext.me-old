import React, { useState } from 'react';
import { Box, Text, FormControl,FormLabel,FormHelperText, Input, InputGroup, Button, InputLeftAddon, InputRightElement } from '@chakra-ui/react';


const RegisterForm = () => {

  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = registerFormData;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const onInputChange = (e) => {
    setRegisterFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(username, email, password)
  }

  return (
    <React.Fragment>
      <Box px={10} maxWidth={['400px', '600px']}  margin='0 auto'>

        <form onSubmit={handleRegistration}>

          <FormControl isRequired mb={4}>
            <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='username'>Username</FormLabel>
            <InputGroup size='lg'>
              <InputLeftAddon fontWeight='bold' children='teext.me/' />
              <Input name='username' value={username} onChange={onInputChange} maxLength={'25'} size='lg' focusBorderColor='#f2a900' id='username' type='text' placeholder='username' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
            </InputGroup>
            <Text fontSize={'14px'} marginTop={'8px'} color={'#718096'}><b>teext.me/{username ? username : 'username'}</b> will be your link to share</Text>
          </FormControl>

          <FormControl isRequired mb={4}>
            <FormLabel fontFamily='GilroySemiBold' color='white' htmlFor='email'>Email</FormLabel>
            <Input name='email' value={email} onChange={onInputChange} size='lg' focusBorderColor='#f2a900' id='email' type='email' placeholder='satoshi@bitcoin.org' _placeholder={{ opacity: 0.8, color: 'gray.500' }} color='white' />
            <FormHelperText>We'll never share your email.</FormHelperText>
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
            
            <FormHelperText>Your best password</FormHelperText>
          </FormControl>

          <Button type={'submit'} mt={4} width='100%' size='lg' backgroundColor='#f2a900' color='white' _hover={{ bg: '#f2a900' }} _active={{ bg: '#b58530' }} fontFamily='GilroySemiBold'>
            Create account
          </Button>

        </form>

        <Text textAlign='center' fontWeight='light' fontSize='14px' mt={6} opacity={0.8} cursor='pointer' color='white'>Already have an account? <u>Login here</u></Text>

      </Box>
    </React.Fragment>
  );
}

export default RegisterForm;