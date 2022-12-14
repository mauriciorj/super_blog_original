import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LeftMenuItems from './menuItems';

const LeftMenuDesktop = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      height="100%"
      sx={{ borderRight: `1px solid ${theme.palette.greyAccessible.light}` }}
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
    </Grid>
  );
};

export default LeftMenuDesktop;
