import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Drawer, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LeftMenuItems from './menuItems';

interface LeftMenuMobileProps {
  state: boolean;
  // eslint-disable-next-line no-unused-vars
  toggleDrawer?: (e: boolean) => any;
}

const LeftMenuMobile: React.FC<LeftMenuMobileProps> = ({
  state,
  toggleDrawer,
}) => {
  const { t } = useTranslation();

  return (
    <Drawer anchor="left" open={state} onClose={toggleDrawer?.(false)}>
      <Box
        sx={{
          width: 200,
        }}
        role="presentation"
        onClick={toggleDrawer?.(false)}
        onKeyDown={toggleDrawer?.(false)}
      >
        <Box
          sx={{
            paddingTop: '10px',
            paddingLeft: '10px',
            width: '100px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MenuIcon sx={{ marginRight: '10px' }} />
          <Typography variant="h5">{t('adminHeaderMenuTitle')}</Typography>
        </Box>
        <LeftMenuItems />
      </Box>
    </Drawer>
  );
};

export default LeftMenuMobile;
