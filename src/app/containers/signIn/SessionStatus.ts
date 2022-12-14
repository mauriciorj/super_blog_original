import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccountContext } from './Account';
import { makeSelectUserInfo } from '../admin/userProfile/selector';
import { setUserInfo } from '../admin/userProfile/actions';

const SessionStatus = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<Boolean | null>(null);
  const { getSession } = useContext(AccountContext);

  const getUserInfo = useSelector(makeSelectUserInfo());

  useEffect(() => {
    getSession()
      .then((result: any) => {
        setStatus(true);
        if (!getUserInfo) {
          dispatch(setUserInfo(result?.idToken?.payload?.email));
        }
      })
      .catch(() => {
        setStatus(false);
      });
  }, []);

  return status;
};

export default SessionStatus;
