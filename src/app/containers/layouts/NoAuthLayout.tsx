import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { ErrorBoundaryComponent } from '../../components/errorBoundary';

export const NoAuthLayout = (Component: any) => {
  const ComponentWithLayout = (props: any) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
      <Grid container item xs={12}>
        <Grid container item xs={12}>
          <Header />
        </Grid>
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
          <Grid container item xs={12} sx={{ minHeight: '60vh' }}>
            {matches ? <Grid item xs={1}></Grid> : null}
            <Grid
              item
              xs={matches ? 10 : 12}
              sx={{
                paddingLeft: matches ? '0px' : '10px',
                paddingRight: matches ? '0px' : '10px',
              }}
            >
              <Component {...props} />
            </Grid>
          </Grid>
        </ErrorBoundary>
        <Grid
          container
          item
          xs={12}
          sx={() => ({ backgroundColor: theme.palette.primary.main })}
        >
          <Footer />
        </Grid>
      </Grid>
    );
  };
  return ComponentWithLayout;
};
