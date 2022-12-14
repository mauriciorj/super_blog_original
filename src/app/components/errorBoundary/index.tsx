import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';

export const ErrorBoundaryComponent = () => {
  const { t } = useTranslation();
  return (
    <Grid
      item
      xs={12}
      display="flex"
      justifyContent="center"
      sx={{ minHeight: '60vh' }}
    >
      <Grid
        item
        xs={10}
        md={6}
        sx={{ marginTop: '100px', marginLeft: '20px', marginRight: '20px' }}
      >
        <Typography variant="h2">{t('errorBoundaryTitle')}</Typography>
        <Typography variant="h4" sx={{ marginTop: '30px' }}>
          {t('errorBoundaryDescription')}
        </Typography>
      </Grid>
    </Grid>
  );
};
