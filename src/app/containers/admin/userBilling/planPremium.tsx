import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Chip,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TodayIcon from '@mui/icons-material/Today';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import LoadingButton from '../../../components/loadingButton';
import { getUserHotmartSubscription } from './actions';
import { makeSelectUserSubscriptionsDetails } from './selectors';

const PlanPremium = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  const subscriptionDetails = useSelector(makeSelectUserSubscriptionsDetails());

  // const navigate = useNavigate();
  const isLoading = false;
  const subscriptionPlan = 'Premium';
  const nextPayment = '19-10-1982';

  useEffect(() => {
    if (subscriptionDetails) {
      dispatch(getUserHotmartSubscription());
    }
  }, []);

  return (
    <Grid item xs={12} sx={{ paddingTop: '30px' }}>
      <Box sx={{ width: '100%', paddingLeft: '20px', marginTop: '30px' }}>
        <Typography variant="h5" color="textPrimary" fontWeight={100}>
          {t('userBillingSubscriptionTitle')}
        </Typography>
        <Divider sx={{ width: matches ? '50%' : '100%' }} />
      </Box>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection={matches ? 'row' : 'column'}
        justifyContent="left"
        alignItems={matches ? 'center' : 'flex-start'}
        sx={{ paddingLeft: '20px', marginTop: '30px' }}
      >
        <Box sx={{ display: 'flex' }}>
          <CurrencyExchangeIcon fontSize="small" />
          <Typography
            variant="subtitle1"
            color="textPrimary"
            fontWeight={100}
            sx={{ marginLeft: '5px' }}
          >
            {t('userBillingSubscriptionPlan')}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            fontWeight={800}
            sx={{ marginLeft: '5px', marginRight: '5px' }}
          >
            {subscriptionPlan}
          </Typography>
        </Box>
        <Box>
          <Chip
            icon={<UpgradeIcon />}
            size="small"
            variant="outlined"
            label={t('userBillingSubscriptionUpgradePlan')}
            color="success"
            sx={{ marginTop: matches ? '0px' : '10px' }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        sx={{ paddingLeft: '20px', marginTop: '20px' }}
      >
        <TodayIcon fontSize="small" />
        <Typography
          variant="subtitle1"
          color="textPrimary"
          fontWeight={100}
          sx={{ marginLeft: '5px' }}
        >
          {t('userBillingSubscriptionNextPayment')}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textPrimary"
          fontWeight={800}
          sx={{ marginLeft: '5px' }}
        >
          {nextPayment}
        </Typography>
      </Grid>
      <Box
        sx={{ marginTop: '30px', paddingLeft: '20px', marginBottom: '50px' }}
      >
        <Divider
          sx={{ width: matches ? '50%' : '100%', marginBottom: '20px' }}
        />
        <LoadingButton
          submitCta={t('userBillingCancelSubscriptionCta')}
          submitCtaLoading={t('userBillingCancelSubscriptionCta')}
          type="submit"
          variant="outlined"
          isLoading={isLoading}
          disabled={false}
          color="error"
        />
      </Box>
    </Grid>
  );
};

export default PlanPremium;
