import produce from 'immer';
import { handleActions } from 'redux-actions';
import {
  getUserHotmartSubscriptionError,
  getUserHotmartSubscriptionSuccess,
} from './actions';

export const initialState = {
  details: {},
  error: false,
};

const subscriptionsReducer = handleActions(
  {
    [getUserHotmartSubscriptionError as any]: produce(
      (state = initialState) => ({
        ...state,
        error: true,
      })
    ),
    [getUserHotmartSubscriptionSuccess as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        details: payload,
        error: false,
      })
    ),
  },
  initialState
);

export default subscriptionsReducer;
