import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppBar, Grid, Toolbar, Typography, useTheme } from '@mui/material';
import LoggedTopMenuDesktop from './loggedTopMenuDesktop';
import NotLoggedTopMenuDesktop from './NotLoggedTopMenuDesktop';

interface DesktopProps {
  isUserLogged: Boolean | null;
}

const NavBarDesktop: React.FC<DesktopProps> = ({ isUserLogged }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <AppBar
      position="static"
      sx={{
        position: 'relative',
        paddingLeft: '0px',
        paddingRight: '0px',
      }}
    >
      <Toolbar sx={{ padding: '0px' }}>
        <Grid item xs={4} display="flex" alignItems="center">
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: theme.palette.white.main,
            }}
          >
            <Typography variant="h6">{t('logo')}</Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={8}
          display="flex"
          alignItems="center"
          justifyContent="end"
        >
          {isUserLogged ? (
            <LoggedTopMenuDesktop />
          ) : (
            <NotLoggedTopMenuDesktop />
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarDesktop;
