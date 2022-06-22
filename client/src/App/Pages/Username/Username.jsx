import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Textarea, Button, Text } from '@chakra-ui/react';

import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';

import './Username.css';

function Username() {

  let [value, setValue] = useState('');
  let { username } = useParams(); 

  let handleTextareaMessage = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  
  return (
    <Box className='username-page'>
      <FloatingLightningButton />

      <Box maxWidth={['300px', '600px']}>
        <Heading textAlign='center' as='h2' color='white' fontFamily='GilroyBold' fontSize={['30px', '60px']}>Send a message to</Heading>
        <Heading textAlign='center' as='h3' color='white' fontFamily='GilroyBold' fontSize={['22px', '40px']} className='neon'>{username}</Heading>
        <Box mt={3} textAlign='center' display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
          <Text fontSize='16px' opacity={0.5} color='white' mr={1}>price 5000 sats <i class="fak fa-satoshisymbol-solidcir"></i></Text>
        </Box>
        <Textarea resize='vertical' rows={6} mt={10} color='white'  value={value} onChange={handleTextareaMessage} focusBorderColor='#f2a900' placeholder='Your request, message or whatever'  />
        <Button mt={10} width='100%' size='lg' backgroundColor='#f2a900' color='white' textShadow='0px 0px 10px #00000080' _hover={{ bg: '#f2a900' }} fontFamily='GilroySemiBold'>
          Pay and Send
        </Button>
        <Text color='white' opacity={0.5} fontSize='11px' textAlign='center' mt={2}>the price is set by each user</Text>
      </Box>

    </Box>
  );
}


export default Username;
