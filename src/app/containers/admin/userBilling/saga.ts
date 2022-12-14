/* eslint-disable camelcase */
import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import {
  getUserHotmartSubscription,
  getUserHotmartSubscriptionError,
  getUserHotmartSubscriptionSuccess,
} from './actions';
import {
  HOTMART_GET_TOKEN,
  HOTMART_SUBSCRIBER_PURCHASE,
} from '../../../utils/constants';
import { getAxios, postAxios } from '../../../utils/axios';
import { makeSelectUserInfoHotmartSubscribeCode } from '../userProfile/selector';

export interface UserTokenResponse {
  data: any;
  status: number;
}

export interface UserBillResponse {
  status: number;
  data: {
    page_info: any;
    items: any;
  };
}

export function* getUserHotmartSubscriptionEvent() {
  try {
    // TODO: get the id from user infos
    // if there is no ID it's because the user has no subscription
    const getHotmartSubscribeCode: string = yield select(
      makeSelectUserInfoHotmartSubscribeCode()
    );
    if (!getHotmartSubscribeCode) {
      // eslint-disable-next-line no-console
      console.log('temp', getHotmartSubscribeCode);
      yield put(getUserHotmartSubscriptionSuccess(false));
      return;
    }
    const id = 'B2HNQAXJ';

    // Fetch the token information from localStore
    let getAccessToken = localStorage.getItem('ht_at');
    const getExpiryDate = localStorage.getItem('ht_at_expiryDate');

    // Check if the token is expired
    const today = new Date().toISOString();
    const isTokenExpired = getExpiryDate ? today > getExpiryDate : true;

    // Make a call for a new token if there is no token defined or it's expired
    if (!getAccessToken || isTokenExpired) {
      const response: UserTokenResponse = yield call(postAxios, {
        url: HOTMART_GET_TOKEN,
        data: {},
        headers: { Authorization: process.env.REACT_APP_HOTMART_CLIENT_BASIC },
      });
      const {
        status,
        data: { access_token, expires_in },
      } = response;

      // If the call return an error
      if (status > 300) {
        yield put(getUserHotmartSubscriptionError());
      }

      // Calculare the expire date
      const now = new Date();
      const expiryDate = new Date(
        now.getTime() + expires_in * 1000
      ).toISOString();

      // Store the new token and expire date
      localStorage.setItem('ht_at', access_token);
      localStorage.setItem('ht_at_expiryDate', expiryDate);

      // Set the new token to be dispatch to reduz store
      getAccessToken = access_token;
    }

    // If there is a token dispatch it to the redux store
    if (getAccessToken) {
      const getSubscription: UserBillResponse = yield call(getAxios, {
        // TODO: remove the cors
        url: `https://cors-anywhere.herokuapp.com/${HOTMART_SUBSCRIBER_PURCHASE(
          id
        )}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${getAccessToken}`,
        },
      });
      if (getSubscription.status > 300) {
        yield put(getUserHotmartSubscriptionError());
      } else {
        yield put(getUserHotmartSubscriptionSuccess(getSubscription.data));
      }
    }
  } catch (error) {
    yield put(getUserHotmartSubscriptionError());
  }
}

export default function* userBillingSaga() {
  yield takeLatest(
    getUserHotmartSubscription().type,
    getUserHotmartSubscriptionEvent
  );
}
