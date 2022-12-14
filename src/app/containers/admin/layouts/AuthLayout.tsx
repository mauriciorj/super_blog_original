import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import LeftMenuMobile from './leftMenuMobile';
import LeftMenuDesktop from './leftMenuDesktop';
import AlertBanner from '../../../components/alertBanner';
import { makeSelectUserInfo } from '../userProfile/selector';
import { ErrorBoundaryComponent } from '../../../components/errorBoundary';

export const AuthLayout = (Component: any) => {
  const ComponentWithLayout = (props: any) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [state, setState] = useState(false);
    const [isShowAlertBanner, setIsShowAlertBanner] = useState<boolean>(false);
    const [bannerMissingInfos, setBannerMissingInfos] = useState<any>(null);

    const getUserInfo = useSelector(makeSelectUserInfo());

    const toggleDrawer =
      (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState(open);
      };

    useEffect(() => {
      if (getUserInfo) {
        if (
          !getUserInfo.firstName ||
          !getUserInfo.day ||
          !getUserInfo.month ||
          !getUserInfo.year
        ) {
          setBannerMissingInfos({
            firstName: getUserInfo.firstName,
            day: getUserInfo.day,
            month: getUserInfo.month,
            year: getUserInfo.year,
          });
          setIsShowAlertBanner(true);
        } else {
          setIsShowAlertBanner(false);
        }
      }
    }, [getUserInfo]);

    return (
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
          {isShowAlertBanner && bannerMissingInfos && (
            <AlertBanner bannerMissingInfos={bannerMissingInfos} />
          )}
          {!matches && (
            <Grid
              item
              xs={12}
              sx={{ background: theme.palette.greyAccessible.light }}
            >
              <Box
                sx={{
                  paddingTop: '3px',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  borderRadius: '5px',
                  marginRight: '10px',
                }}
                onClick={toggleDrawer?.(true)}
              >
                <MenuIcon />
              </Box>
            </Grid>
          )}
          <Grid
            container
            item
            xs={12}
            display="flex"
            flexWrap="nowrap"
            sx={{ minHeight: '60vh' }}
          >
            <React.Fragment key="left">
              <LeftMenuMobile state={state} toggleDrawer={toggleDrawer} />
            </React.Fragment>
            <Grid
              item
              xs={matches ? 3 : 1}
              sx={{
                marginRight: matches ? '20px' : '0px',
              }}
            >
              {matches && <LeftMenuDesktop />}
            </Grid>
            <Grid item xs={matches ? 8 : 10}>
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
