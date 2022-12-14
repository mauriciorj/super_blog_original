import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import Analytics from '../../utils/analytics';

const TopApps = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Analytics({ pageName: 'topApps' });
  }, []);

  return (
    <Grid sx={{ marginBottom: '100px', marginTop: '100px' }}>
      <Helmet>
        <title>{t('seoTopAppsPageTitle')}</title>
        <meta name="description" content={t('seoTopAppsPageDescription')} />
      </Helmet>
      <Helmet>
        <title>{t('seoContactUsPageTitle')}</title>
        <meta name="application-name" content={t('seoContactUsPageTitle')} />
        <meta name="description" content={t('seoContactUsPageDescription')} />
        <meta name="keywords" content={t('seoTopAppsPageKewords')} />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta
          property="og:description"
          content={t('seoContactUsPageDescription')}
        />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={t('seoContactUsPageTitle')} />
        <meta property="og:url" content={t('seoOgUrl')} />
      </Helmet>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column !important',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        LINKS
      </Grid>
    </Grid>
  );
};

export default TopApps;
