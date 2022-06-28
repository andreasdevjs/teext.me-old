import { Button, Flex, FormControl, FormLabel, FormHelperText, Heading, Input, Switch, Stack } from '@chakra-ui/react';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';

import './Account.css';

function Account() {
  return (
    <>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg='radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)'>
        <Stack className='pepe' spacing={6} w={'full'} maxW={'md'} bg={'transparent'} rounded={'xl'} boxShadow={'lg'} p={6} >
          <Heading className='neon' color={'white'} fontFamily='GilroyBold' lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Your settings
          </Heading>
          <FormControl id="email">
            <FormLabel color={'white'} fontFamily='GilroySemiBold'>Email to receive messages</FormLabel>
            <Input color={'white'} focusBorderColor='#f2a900' placeholder="yourbestemail@example.com" _placeholder={{ color: 'gray.500' }} type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel color={'white'} fontFamily='GilroySemiBold'>Message price in sats</FormLabel>
            <Input color={'white'} focusBorderColor='#f2a900' placeholder="1000" _placeholder={{ color: 'gray.500' }} type="number" />
            <FormHelperText>The amount set is equivalent to <b>0.30€</b></FormHelperText>
          </FormControl>
          <FormControl display='flex' alignItems='center'>
            <FormLabel color={'white'} htmlFor='sms-alerts' mb='0'>
              Receive SMS alerts
            </FormLabel>
            <Switch isDisabled id='sms-alerts' />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button variant={'outline'} _hover={{ bg: 'transparent', borderColor: '#f2a900' }} fontFamily='GilroySemiBold'  w="full" color={'white'}>Cancel</Button>
            <Button backgroundColor='#f2a900' color='white' _hover={{ bg: '#f2a900' }} fontFamily='GilroySemiBold' w="full" >Save</Button>
          </Stack>
        </Stack>
      </Flex>
      <FloatingLightningButton />
    </>
  );
}

export default Account;