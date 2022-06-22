import React from 'react';
import { Link as ReachLink } from 'react-router-dom';

import { Box, Heading, Button, Link } from '@chakra-ui/react';

import './HomeHero.css';

function HomeHero() {
  return (
    <React.Fragment>
      <Box textAlign='center'>

        <Heading as='h1' fontFamily='GilroyBold' lineHeight={1.1} textAlign='center' fontSize={['40px', '55px']}  px={4} mb={5} className="neon" >
          Defend your inbox against spam
        </Heading>

        <Heading as='h2' fontFamily='GilroySemiBold' textAlign='center' fontSize='22px' px={3} mb={10}>
          Get real and valuable inquiries in your inbox and earn bitcoin
        </Heading>
        
        <Link as={ReachLink} to='/register' style={{textDecoration: 'none'}}>
          <Button size='lg' backgroundColor='#f2a900' textShadow='0px 0px 10px #00000080' _hover={{ bg: '#f2a900' }} fontFamily='GilroySemiBold'>
            Create account
          </Button>
        </Link>
        
        <Heading fontFamily='GilroyBold' textAlign='center' as='h3' fontSize={['10px', '14px']} mt={10} opacity={1} display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
          Powered by <span className='ln-text'>Lightning Network</span> <span className="icon-Bitcoin-Lightning-Gold icon-lg"></span>
        </Heading>

      </Box>
    </React.Fragment>
  );
}

export default HomeHero;
