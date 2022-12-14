import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
// import { shadows } from '@mui/system';
import { Link } from 'react-router-dom';
import ChangeLng from '../../intl/changeLng';

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { t } = useTranslation();

  const handlerChangeLng = (lng: string) => {
    ChangeLng(lng);
  };

  const desktop = (
    <>
      <Grid item md={3} xs={10}>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.white.main, fontWeight: '600' }}
        >
          Menu
        </Typography>
        <Box sx={{ marginLeft: '15px', marginTop: '5px' }}>
          <Link
            to="/signup"
            style={{ color: theme.palette.white.main, textDecoration: 'none' }}
          >
            {t('signupTitle')}
          </Link>
        </Box>
        <Box sx={{ marginTop: '5px' }}>
          <Link
            to="/signin"
            style={{
              color: theme.palette.white.main,
              textDecoration: 'none',
              marginTop: '5px',
            }}
          >
            <Box sx={{ marginLeft: '15px' }}>{t('signinTitle')}</Box>
          </Link>
        </Box>
        <Box sx={{ marginTop: '5px' }}>
          <Link
            to="/tools/injectCookies"
            style={{ color: theme.palette.white.main, textDecoration: 'none' }}
          >
            <Box sx={{ marginLeft: '15px' }}>{t('injectCookies')}</Box>
          </Link>
        </Box>
      </Grid>
      <Grid item md={3} xs={10}>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.white.main, fontWeight: '600' }}
        >
          {t('language')}
        </Typography>
        <Box
          sx={{
            color: theme.palette.white.main,
            marginLeft: '15px',
            cursor: 'pointer',
          }}
          onClick={() => handlerChangeLng('en-US')}
        >
          {t('lngEnglish')}
        </Box>
        <Box
          sx={{
            color: theme.palette.white.main,
            marginLeft: '15px',
            marginTop: '5px',
            cursor: 'pointer',
          }}
          onClick={() => handlerChangeLng('pt-BR')}
        >
          {t('lngPortuguese')}
        </Box>
      </Grid>
      <Grid item md={3} xs={10}>
        <Box sx={{ cursor: 'pointer' }}>
          <Link
            to="/contactUs"
            style={{ color: theme.palette.white.main, textDecoration: 'none' }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.white.main,
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              {t('contactUs')}
            </Typography>
          </Link>
        </Box>
        <Link
          to={`mailto:${t('contactEmail')}`}
          style={{ color: theme.palette.white.main, textDecoration: 'none' }}
        >
          <Box sx={{ marginLeft: '15px' }}>{t('contactEmail')}</Box>
        </Link>
        <Box sx={{ marginTop: '10px' }}>
          <Link
            to="/help-center"
            style={{ color: theme.palette.white.main, textDecoration: 'none' }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.white.main, fontWeight: '600' }}
            >
              {t('helpCenterTitle')}
            </Typography>
          </Link>
        </Box>
      </Grid>
    </>
  );

  const mobile = (
    <>
      <Grid item xs={6}>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.white.main, fontWeight: '600' }}
          >
            Menu
          </Typography>
          <Box sx={{ marginLeft: '15px', marginTop: '5px' }}>
            <Link
              to="/signup"
              style={{
                color: theme.palette.white.main,
                textDecoration: 'none',
              }}
            >
              {t('signupTitle')}
            </Link>
          </Box>
          <Box sx={{ marginTop: '5px' }}>
            <Link
              to="/signin"
              style={{
                color: theme.palette.white.main,
                textDecoration: 'none',
                marginTop: '5px',
              }}
            >
              <Box sx={{ marginLeft: '15px' }}>{t('signinTitle')}</Box>
            </Link>
          </Box>
          <Box sx={{ marginTop: '5px' }}>
            <Link
              to="/tools/injectCookies"
              style={{
                color: theme.palette.white.main,
                textDecoration: 'none',
              }}
            >
              <Box sx={{ marginLeft: '15px' }}>{t('injectCookies')}</Box>
            </Link>
          </Box>
        </Box>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.white.main, fontWeight: '600' }}
          >
            {t('injectCookies')}
          </Typography>
          <Box
            sx={{
              color: theme.palette.white.main,
              marginLeft: '15px',
              cursor: 'pointer',
            }}
            onClick={() => handlerChangeLng('en-US')}
          >
            {t('language')}
          </Box>
          <Box
            sx={{
              color: theme.palette.white.main,
              marginLeft: '15px',
              marginTop: '5px',
              cursor: 'pointer',
            }}
            onClick={() => handlerChangeLng('pt-BR')}
          >
            {t('lngPortuguese')}
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Grid item md={3} xs={10}>
          <Box
            style={{
              cursor: 'pointer',
            }}
          >
            <Link
              to="/contactUs"
              style={{
                color: theme.palette.white.main,
                textDecoration: 'none',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.white.main, fontWeight: '600' }}
              >
                {t('contactUs')}
              </Typography>
            </Link>
          </Box>
          <Link
            to={`mailto:${t('contactEmail')}`}
            style={{ color: theme.palette.white.main, textDecoration: 'none' }}
          >
            <Box sx={{ marginLeft: '15px' }}>{t('contactEmail')}</Box>
          </Link>
          <Box sx={{ marginTop: '10px' }}>
            <Link
              to="/help-center"
              style={{
                color: theme.palette.white.main,
                textDecoration: 'none',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.white.main, fontWeight: '600' }}
              >
                {t('helpCenterTitle')}
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Box>
    </>
  );

  return (
    <Grid
      item
      xs={12}
      // eslint-disable-next-line no-shadow
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        marginBottom: '20px',
        paddingLeft: '24px',
        paddingTop: '20px',
      })}
    >
      <Grid item xs={12}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: theme.palette.white.main,
          }}
        >
          <Typography variant="h5" sx={{ color: theme.palette.white.main }}>
            {t('logo')}
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row',
        }}
      >
        {matches ? desktop : mobile}
      </Grid>
    </Grid>
  );
};

export default Footer;
