import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Topic = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line prefer-const
  let { id } = useParams();
  // eslint-disable-next-line no-console
  console.log('Topic id', id);
  return (
    <Grid sx={{ marginBottom: '100px', marginTop: '20px' }}>
      <Helmet>
        <title>{t('seoTopicsPageTitle')}</title>
        <meta name="application-name" content={t('seoTopicsPageTitle')} />
        <meta name="description" content={t('seoTopicsPageDescription')} />
        <meta name="keywords" content={t('seoTopicsPageDKeywords')} />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta
          property="og:description"
          content={t('seoTopicsPageDescription')}
        />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={t('seoTopicsPageTitle')} />
        <meta property="og:url" content={t('seoOgUrl')} />
      </Helmet>
      <Grid container xs={12}>
        <Grid xs={8}>
          <Grid xs={12}>
            <Grid xs={12}>Topic Title</Grid>
            <Grid xs={12}>Trend Topics Cards</Grid>
          </Grid>
          <Grid xs={12}>Subscribe</Grid>
        </Grid>
        <Grid xs={4}>
          <Grid xs={12}>Other Topics</Grid>
          <Grid xs={12}>Subscribe</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Topic;
