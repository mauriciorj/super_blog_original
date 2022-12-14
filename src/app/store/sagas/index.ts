import { all } from 'redux-saga/effects';

import homeSaga from '../../containers/posts/saga';
import userBillingSaga from '../../containers/admin/userBilling/saga';
import userProfileSaga from '../../containers/admin/userProfile/saga';

export function* appSaga() {
  yield all([homeSaga(), userBillingSaga(), userProfileSaga()]);
}
