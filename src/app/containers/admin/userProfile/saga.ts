import { call, put, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';
import { UserInfoModel } from '../../../models/userInfoModel';
import {
  setUserInfo,
  setUserInfoError,
  setUserInfoSuccess,
  setIsLoading,
  setIsTaskingLoading,
  updateUserProfile,
  updateUserProfileError,
  updateUserProfileSuccess,
} from './actions';
import {
  ERROR_USER_PROFILE_UPDATE_GENERIC,
  ERROR_USER_PROFILE_UPDATE_NOT_ENOUGH_TIME,
  USER_URI,
} from '../../../utils/constants';

export interface UserProfileResponse {
  firstName: any;
  lastName: any;
  day: any;
  month: any;
  year: any;
  errorMsg?: string;
  item?: any;
  operation?: string;
  status?: string;
}

const patchUserProfileAPIUrl = () =>
  `${process.env.REACT_APP_AWS_API_ENDPOINT}/${USER_URI}`;

const getUserProfileAPIUrl = (payload: string) =>
  `${process.env.REACT_APP_AWS_API_ENDPOINT}/${USER_URI}?email=${payload}`;

const patchUserProfileAxios = (payload: any) =>
  axios
    .patch(patchUserProfileAPIUrl(), {
      ...payload,
    })
    .then((response) => response.data)
    .catch((error) => error);

const getUserInfoAxios = (url: string) =>
  axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => error);

export function* setUserInfoEvent({ payload }: any) {
  yield put(setIsLoading(true));
  try {
    const userInfo: UserProfileResponse = yield call(
      getUserInfoAxios,
      getUserProfileAPIUrl(payload)
    );
    // This model is not necessary any more but I'm keeping as example once it's not affecting the performance
    const getUserInfoModel = new (UserInfoModel as any)(userInfo);
    yield put(setUserInfoSuccess(getUserInfoModel));
  } catch (error) {
    yield put(setUserInfoError('Login User Error'));
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* updateUserProfileEvent({ payload }: any) {
  yield put(setIsTaskingLoading(true));
  try {
    const response: UserProfileResponse = yield call(
      patchUserProfileAxios,
      payload
    );
    const { status } = response;
    if (status === 'SUCCESS') {
      const userInfo: UserProfileResponse = yield call(
        getUserInfoAxios,
        getUserProfileAPIUrl(payload.email)
      );
      const getUserInfoModel = new (UserInfoModel as any)(userInfo);
      yield put(updateUserProfileSuccess(getUserInfoModel));
    } else {
      // eslint-disable-next-line no-lonely-if
      if (response?.errorMsg === 'Not enought time') {
        yield put(
          updateUserProfileError(ERROR_USER_PROFILE_UPDATE_NOT_ENOUGH_TIME)
        );
      } else {
        yield put(updateUserProfileError(ERROR_USER_PROFILE_UPDATE_GENERIC));
      }
    }
  } catch (error) {
    updateUserProfileError(ERROR_USER_PROFILE_UPDATE_NOT_ENOUGH_TIME);
  } finally {
    yield put(setIsTaskingLoading(false));
  }
}

export default function* userProfileSaga() {
  yield takeLatest(setUserInfo().type, setUserInfoEvent);
  yield takeLatest(updateUserProfile().type, updateUserProfileEvent);
}
