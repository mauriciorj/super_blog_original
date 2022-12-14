import { combineReducers } from 'redux';
import homeReducer from '../../containers/posts/reducer';
import loginReducer from '../../containers/admin/userProfile/reducer';
import subscriptionsReducer from '../../containers/admin/userBilling/reducer';

const appReducers = combineReducers({
  loginDetails: loginReducer,
  posts: homeReducer,
  subscriptions: subscriptionsReducer,
});

export default appReducers;
