import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  IconButton,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LoggedTopMenuMobile from './loggedTopMenuMobile';

interface DesktopProps {
  handleMobileMenuOpen: any;
  isUserLogged: Boolean | null;
}

const NavBarMobile: React.FC<DesktopProps> = ({
  handleMobileMenuOpen,
  isUserLogged,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  return (
    <AppBar
      position="static"
      sx={{
        position: 'relative',
        paddingLeft: matches ? '0px' : '20px',
        paddingRight: matches ? '0px' : '20px',
      }}
    >
      <Toolbar sx={{ padding: '0px' }}>
        <Grid item xs={6} display="flex" alignItems="center">
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
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {isUserLogged ? (
            <LoggedTopMenuMobile handleMobileMenuOpen={handleMobileMenuOpen} />
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMobile;
