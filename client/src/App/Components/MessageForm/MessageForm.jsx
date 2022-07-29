import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Textarea, Button, Text } from '@chakra-ui/react';

import MessageQRModal from '../MessageQRModal/MessageQRModal';

function MessageForm() {

  let [message, setMessage] = useState('');
  let [disableTextarea, setDisableTextarea] = useState(false);
  let { username } = useParams(); 
  let [response, setResponse] = useState(true);

  let handleTextareaMessage = (e) => {
    let textMessage = e.target.value;
    if(textMessage.length > 500) return;
    setMessage(textMessage);
  }

  //1. getUserPrice();
  //2. if not real user show message errow
  //3. show price of sats based on user price
  //4. save message on localstorage for the moment until is paid or close the browser
  //5. checkIfPaymentHasBeenMade(); // Llamada api cada 20 seg

  const handleSubmitMessage = () => {
    setDisableTextarea(true);
    const messageData = { username, message };
    console.log(messageData);
    // sendMessage(message):
    // if ok, open modal
    setResponse(true);
  }

  return (
    <>
      <Box maxWidth={['300px', '600px']}>
        <Heading textAlign='center' as='h2' color='white' fontFamily='GilroyBold' fontSize={['30px', '60px']}>Send a message to</Heading>
        <Heading textAlign='center' as='h3' color='white' fontFamily='GilroyBold' fontSize={['22px', '40px']} className='neon'>{username}</Heading>
        <Box mt={3} textAlign='center' display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
          <Text fontSize='14px' opacity={0.5} color='white' mr={1}>price <b>5000</b> sats <i className="fak fa-satoshisymbol-solidcir"></i></Text>
        </Box>
        <Textarea maxLength={500} disabled={disableTextarea} resize='vertical' rows={6} mt={10} color='white'  value={message} onChange={handleTextareaMessage} focusBorderColor='#f2a900' placeholder='Your request, message or whatever'  />
        <Text mt={'10px'} fontSize={'12px'} color={'white'} opacity={'0.5'} display={'block'} textAlign={'right'}>{message.length}/500</Text>
        <Button onClick={handleSubmitMessage} mt={10} width='100%' size='lg' backgroundColor='#f2a900' color='white' _hover={{ bg: '#f2a900' }} fontFamily='GilroySemiBold'>
          Pay and Send
        </Button>
        <Text color='white' opacity={0.5} fontSize='11px' textAlign='center' mt={3}>the price is set by the user</Text>
      </Box>

      {
        response ? <MessageQRModal /> : ''
      }
    </>
  )
}

export default MessageForm