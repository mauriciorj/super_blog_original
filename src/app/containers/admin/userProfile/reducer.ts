import produce from 'immer';
import { handleActions } from 'redux-actions';
import {
  clearErrors,
  resetState,
  setUserInfoError,
  setUserInfoSuccess,
  setIsLoading,
  setIsTaskingLoading,
  updateUserProfileError,
  updateUserProfileSuccess,
} from './actions';

export const initialState = {
  error: false,
  errorMessage: null,
  loading: false,
  taskingLoading: false,
  userInfo: null,
  infoUpdated: false,
};

const questionReducer = handleActions(
  {
    [clearErrors as any]: produce((state = initialState) => ({
      ...state,
      error: false,
      errorMessage: false,
      loading: false,
      infoUpdated: false,
    })),
    [setUserInfoError as any]: produce((state = initialState, { payload }) => ({
      ...state,
      error: true,
      errorMessage: payload,
      loading: false,
      infoUpdated: false,
    })),
    [setUserInfoSuccess as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        error: false,
        errorMessage: null,
        userInfo: payload,
        taskingLoading: false,
        infoUpdated: false,
      })
    ),
    [setIsLoading as any]: produce((state = initialState, { payload }) => ({
      ...state,
      loading: payload,
    })),
    [setIsTaskingLoading as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        taskingLoading: payload,
      })
    ),
    [resetState as any]: produce((state = initialState) => ({
      ...state,
      error: false,
      errorMessage: null,
      userInfo: null,
      taskingLoading: false,
      infoUpdated: false,
    })),
    [updateUserProfileSuccess as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        error: false,
        errorMessage: null,
        userInfo: payload,
        taskingLoading: false,
        infoUpdated: true,
      })
    ),
    [updateUserProfileError as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        error: true,
        errorMessage: payload,
        loading: false,
        infoUpdated: false,
      })
    ),
  },
  initialState
);

export default questionReducer;
