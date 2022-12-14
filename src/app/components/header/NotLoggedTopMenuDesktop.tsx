import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Box, Menu, Typography, useTheme } from '@mui/material';

const NotLoggedTopMenuDesktop = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [anchorToolsMenus, setToolsMenu] = useState<null | HTMLElement>(null);

  const handleOpenToolsMenus = (event: React.MouseEvent<HTMLElement>) => {
    setToolsMenu(event.currentTarget);
  };

  const handleCloseToolsMenus = () => {
    setToolsMenu(null);
  };

  return (
    <>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: theme.palette.white.main,
          whiteSpace: 'nowrap',
        }}
      >
        <Box sx={{ marginRight: '20px' }}>
          <Typography>{t('home')}</Typography>
        </Box>
      </Link>

      <Box sx={{ flexGrow: 0 }}>
        <Box
          sx={{ marginRight: '20px', cursor: 'pointer' }}
          onClick={handleOpenToolsMenus}
        >
          <Typography>{t('toolsMenu')}</Typography>
        </Box>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorToolsMenus}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorToolsMenus)}
          onClose={handleCloseToolsMenus}
        >
          <Link
            to="/tools/injectCookies"
            style={{
              textDecoration: 'none',
              color: theme.palette.primary.main,
              whiteSpace: 'nowrap',
            }}
          >
            <Box sx={{ marginLeft: '10px', marginRight: '10px' }}>
              <Typography>{t('injectCookies')}</Typography>
            </Box>
          </Link>
        </Menu>
      </Box>

      <Link
        to="/signin"
        style={{
          textDecoration: 'none',
          color: theme.palette.white.main,
          whiteSpace: 'nowrap',
        }}
      >
        <Box sx={{ marginRight: '20px' }}>
          <Typography>{t('signinTitle')}</Typography>
        </Box>
      </Link>
      <Link
        to="/signup"
        style={{
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <Box>
          <Button
            variant="outlined"
            // eslint-disable-next-line no-shadow
            sx={(theme) => ({
              color: theme.palette.white.main,
              borderColor: theme.palette.white.main,
              '&:hover': {
                backgroundColor: theme.palette.white.main,
                color: theme.palette.primary.main,
              },
            })}
          >
            {t('signupTitle')}
          </Button>
        </Box>
      </Link>
    </>
  );
};

export default NotLoggedTopMenuDesktop;
