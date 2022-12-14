import React from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Grid, Typography } from '@mui/material';

const LoadingContent = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        {t('logo')}
      </Typography>
      <CircularProgress
        color="primary"
        size={70}
        style={{ marginBottom: '30px' }}
      />
    </Grid>
  );
};

export default LoadingContent;
