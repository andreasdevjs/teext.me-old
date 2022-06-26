import { Box,Text, Image } from '@chakra-ui/react';
import LogoTeextme from '../../Assets/Images/teextme-logo.png';

function Footer() {
  return (
    <Box textAlign={'center'} padding={'20px'}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Image height={'20px'} src={LogoTeextme} marginRight={'5px'} />
        <Text fontSize={'20px'} fontFamily='GilroyBold' fontWeight='bold'>teext.me</Text>
      </Box>
    </Box>
  );
}

export default Footer;