import React, { useState } from 'react';
import { Modal, useMediaQuery, useTheme } from '@mui/material';

import NavBarMobile from './navBarMobile';
import NavBarDesktop from './navBarDesktop';
import MobileModalMenu from './mobileModalMenu';

import SessionStatus from '../../containers/signIn/SessionStatus';

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const getStatus = SessionStatus();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const isUserLogged = getStatus;

  const RenderMobileMenu = React.forwardRef((props, ref) => (
    <MobileModalMenu
      ref={ref}
      {...props}
      isMobileMenuOpen={isMobileMenuOpen}
      handleMobileMenuClose={handleMobileMenuClose}
      isUserLogged={isUserLogged}
    />
  ));

  return (
    <div style={{ flexGrow: 1 }}>
      {!matches ? (
        <NavBarMobile
          handleMobileMenuOpen={handleMobileMenuOpen}
          isUserLogged={isUserLogged}
        />
      ) : (
        <NavBarDesktop isUserLogged={isUserLogged} />
      )}
      <Modal
        disablePortal
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={{
          display: 'flex',
          alignContent: 'flex-start',
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.white.main,
          position: 'absolute',
        }}
        disableScrollLock
      >
        <RenderMobileMenu />
      </Modal>
    </div>
  );
};

export default Header;
