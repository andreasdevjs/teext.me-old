import React from 'react';
import { connect } from 'react-redux';
import { closeMainMenu } from '../../Redux/Actions/menu.actions';

import { Box, Image } from '@chakra-ui/react';

import CitarmeLogo from '../../Assets/Images/citarme-logo-v1.svg';

const Header = ({ menu, closeMainMenu}) => {
  return (
    <Box textAlign="center" pb={5} pt={7}>
      <Image margin='0 auto' src={CitarmeLogo} width={['200px', '400px']} />
    </Box>
  );
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps, { closeMainMenu })(Header);