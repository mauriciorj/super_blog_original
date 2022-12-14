import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Box,
  Divider,
  Fade,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';

interface MobileProps {
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: any;
  ref: any;
  isUserLogged: Boolean | null;
}

const MobileModalMenu: React.FC<MobileProps> = ({
  isMobileMenuOpen,
  handleMobileMenuClose,
  ref,
  isUserLogged,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const notLoggedMenu = (
    <Grid item xs={12} sx={{ paddingTop: '20px', paddingLeft: '20px' }}>
      <Typography variant="h6">{t('headerMenu')}</Typography>
      <Grid>
        <Link
          to="/signup"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              marginLeft: '10px',
              marginBottom: '5px',
              marginTop: '10px',
            }}
          >
            <Button variant="outlined">{t('signupTitle')}</Button>
          </Box>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <Box sx={{ marginLeft: '20px', marginBottom: '5px' }}>
            <Typography>{t('home')}</Typography>
          </Box>
        </Link>
        <Link
          to="/signin"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <Box sx={{ marginLeft: '20px', marginBottom: '5px' }}>
            <Typography>{t('signinTitle')}</Typography>
          </Box>
        </Link>
        <Box>
          <Box>
            <Box>
              <Typography>{t('toolsMenu')}</Typography>
            </Box>
          </Box>
          <Box>
            <Link
              to="/tools/injectCookies"
              style={{
                textDecoration: 'none',
                color: theme.palette.greyAccessible.main,
              }}
            >
              <Box sx={{ marginLeft: '20px', marginBottom: '5px' }}>
                <Typography>{t('injectCookies')}</Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

  const loggedMenu = (
    <Grid item xs={12} sx={{ paddingTop: '20px', paddingLeft: '20px' }}>
      <Typography variant="h6">{t('headerMenu')}</Typography>
      <Grid>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <Box sx={{ marginLeft: '20px', marginBottom: '5px' }}>
            <Typography>{t('home')}</Typography>
          </Box>
        </Link>
        <Box>
          <Box>
            <Box>
              <Typography>{t('toolsMenu')}</Typography>
            </Box>
          </Box>
          <Box>
            <Link
              to="/tools/injectCookies"
              style={{
                textDecoration: 'none',
                color: theme.palette.greyAccessible.main,
              }}
            >
              <Box sx={{ marginLeft: '20px', marginBottom: '5px' }}>
                <Typography>{t('injectCookies')}</Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <Fade in={isMobileMenuOpen} ref={ref}>
      <Grid
        container
        xs={12}
        sx={{
          display: 'flex',
          alignContent: 'flex-start',
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.white.main,
          position: 'absolute',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingLeft: '35px',
            paddingRight: '13px',
            paddingTop: '15px',
          }}
        >
          <Grid item xs={6} sx={{ paddingTop: '5px' }}>
            <Typography variant="h6">{t('logo')}</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'end' }}>
            <Button onClick={handleMobileMenuClose}>
              <Typography variant="h6">X</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '10px' }}>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            minHeight: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {isUserLogged ? loggedMenu : notLoggedMenu}
          <Grid
            item
            xs={12}
            sx={{
              position: 'fixed',
              bottom: '10px',
              width: '100%',
              margin: '0 auto',
            }}
          >
            <Grid item xs={12} sx={{ marginTop: '10px' }}>
              <Divider />
            </Grid>
            <Grid
              sx={{
                marginTop: '15px',
                paddingLeft: '20px',
              }}
            >
              <Link
                to={`mailto:${t('contactEmail')}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                <Typography variant="subtitle1" color="text.primary">
                  {t('contactLabel')}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default MobileModalMenu;
