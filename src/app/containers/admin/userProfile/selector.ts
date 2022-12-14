import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectState = (state: any) => state || initialState;

export const makeSelectUserError = () =>
  createSelector(selectState, (globalState) => globalState.loginDetails.error);

export const makeSelectUserErrorMessage = () =>
  createSelector(
    selectState,
    (globalState) => globalState.loginDetails.errorMessage
  );

export const makeSelectUserInfo = () =>
  createSelector(
    selectState,
    (globalState) => globalState.loginDetails.userInfo
  );

export const makeSelectUserInfoEmail = () =>
  createSelector(
    selectState,
    (globalState) => globalState.loginDetails?.userInfo?.email
  );

export const makeSelectUserInfoHotmartSubscribeCode = () =>
  createSelector(
    selectState,
    (globalState) => globalState.loginDetails?.userInfo?.hotmartSubscribeCode
  );

export const makeSelectUserInfoLoading = () =>
  createSelector(
    selectState,
    (globalState) => globalState.loginDetails.loading
  );

export const makeSelectUserInfoUpdated = () =>
  createSelector(
    selectState,
    (globalState) => globalState.loginDetails.infoUpdated
  );

export const makeSelectUserInfoLanguage = () =>
  createSelector(
    selectState,
    (globalState) => globalState.loginDetails.userInfo?.language
  );

export const makeSelectUserTaskingLoading = () =>
  createSelector(
    selectState,
    (globalState) => globalState.loginDetails.taskingLoading
  );
