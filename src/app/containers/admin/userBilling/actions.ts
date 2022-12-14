import { createActions } from 'redux-actions';

export const {
  getUserHotmartSubscription,
  getUserHotmartSubscriptionError,
  getUserHotmartSubscriptionSuccess,
} = createActions(
  'GET_USER_HOTMART_SUBSCRIPTION',
  'GET_USER_HOTMART_SUBSCRIPTION_ERROR',
  'GET_USER_HOTMART_SUBSCRIPTION_SUCCESS'
);
