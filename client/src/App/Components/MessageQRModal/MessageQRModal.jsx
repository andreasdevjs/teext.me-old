import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const Overlay = () => ( <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>);

const paymentDone = true;

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <Text fontSize={'18px'} fontWeight={'bold'}>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      )}
    </div>
  );
};

function MessageQRModal() {
  return (
    <Modal isCentered size={'md'} isOpen={false}>
      <Overlay />
      <ModalContent margin={'20px'}>

        <ModalHeader>
          <Text textAlign={'center'}>{ paymentDone ? 'Make the payment' : 'Successful payment' }</Text>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          {
            paymentDone ? 
            (
              <Box>
                <Box textAlign={'center'}>
                  <Image margin={'0 auto'} height={'100%'} width={'100%'} src='https://chispacoin.com/wp-content/uploads/2020/11/f1671ee046b07df2b19b1b241c90df9e.png' />
                </Box>
                <Box textAlign={'center'}>
                  <Timer initialMinute={7} initialSeconds={0} />
                  <Text>You have 7 minutes to make the payment</Text>
                  <Text fontSize={'12px'} marginTop={'10px'}>Do not close the browser</Text>
                </Box>
              </Box> 
            ) :
            (
              <Box>
                <Box textAlign={'center'}>
                  <Image margin={'10px auto 20px auto'} height={'60px'} width={'60px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2048px-Yes_Check_Circle.svg.png' />
                </Box>
                <Box textAlign={'center'}>
                  <Text>Payment successfully completed!</Text>
                  <Text fontWeight={'bold'}>Your message has been sent</Text>
                  <Button mt={'20px'} size='sm'>Close</Button>
                </Box>
              </Box> 
            )
          }
        </ModalBody>

        <ModalFooter>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MessageQRModal