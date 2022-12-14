import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectState = (state: any) => state || initialState;

export const makeSelectUserSubscriptionsDetails = () =>
  createSelector(
    selectState,
    (globalState) => globalState.subscriptions.details
  );

export const makeSelectUserSubscriptionsError = () =>
  createSelector(selectState, (globalState) => globalState.subscriptions.error);
