import React from 'react';
import { Box, Heading } from "@chakra-ui/react";

function PageHeader(props) {
  return (
    <Box bg='radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)' py={10}>
      <Heading textAlign='center' fontSize='25px' color='white' fontFamily='GilroyBold'>{props.pageName}</Heading>
      <Box borderBottom='5px solid #f2a900' width='200px' margin='0 auto' mt='5px'></Box>
    </Box>
  );
}

export default PageHeader;
