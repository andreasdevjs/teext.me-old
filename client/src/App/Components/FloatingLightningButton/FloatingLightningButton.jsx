import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '../../Redux/features/menu/menuSlice';
import { Image, Box } from '@chakra-ui/react';

import './FloatingLightningButton.css';

function FloatingLightningButton() {

  const { isOpen } = useSelector(state => state.menu);
  const dispatch = useDispatch();

  const toggleFunction = () => {
    if(isOpen === false) {
      dispatch(openMenu());
    } else {
      dispatch(closeMenu());
    }
  }

  return (
    <React.Fragment>
      <Box className='floatin-lightning-button'>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightning_Network.svg' width={20} onClick={toggleFunction} className={isOpen ? "img-rotate" : ""} />
      </Box>
    </React.Fragment>
  )
}

export default FloatingLightningButton;

