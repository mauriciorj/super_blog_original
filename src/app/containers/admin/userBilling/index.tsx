/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { getUserHotmartSubscription } from './actions';
import { makeSelectUserSubscriptionsDetails } from './selectors';
import PlanFree from './planFree';

const UserBilling = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const subscriptionDetails = useSelector(makeSelectUserSubscriptionsDetails());

  console.log('subscriptionDetails', subscriptionDetails);

  useEffect(() => {
    if (subscriptionDetails) {
      dispatch(getUserHotmartSubscription());
    }
  }, []);

  return (
    <Grid item xs={12} sx={{ paddingTop: '30px' }}>
      <Helmet>
        <title>{t('seoUserBillingPageTitle')}</title>
        <meta name="description" content={t('seoUserBillingPageDescription')} />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="googlebot-news" content="noindex, nofollow" />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Helmet>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" color="textPrimary" fontWeight={600}>
          {t('userBillingTitle')}
        </Typography>
      </Box>
      {!subscriptionDetails && <PlanFree />}
    </Grid>
  );
};

export default UserBilling;
