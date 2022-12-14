import { createActions } from 'redux-actions';

export const {
  clearErrors,
  resetState,
  setUserInfo,
  setUserInfoSuccess,
  setUserInfoError,
  updateUserProfile,
  updateUserProfileError,
  updateUserProfileSuccess,
  setIsLoading,
  setIsTaskingLoading,
} = createActions(
  'CLEAR_ERRORS',
  'RESET_STATE',
  'SET_USER_INFO',
  'SET_USER_INFO_SUCCESS',
  'SET_USER_INFO_ERROR',
  'UPDATE_USER_PROFILE',
  'UPDATE_USER_PROFILE_ERROR',
  'UPDATE_USER_PROFILE_SUCCESS',
  'SET_IS_LOADING',
  'SET_IS_TASKING_LOADING'
);
