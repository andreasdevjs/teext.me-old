import React from 'react';
import { Image, Box } from '@chakra-ui/react';

import './FloatingLightningButton.css';

function FloatingLightningButton() {

  return (
    <React.Fragment>
      <Box className='floatin-lightning-button'>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightning_Network.svg' width={20}/>
      </Box>
    </React.Fragment>
  )
}

export default FloatingLightningButton;

