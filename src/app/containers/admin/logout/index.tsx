import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../../signIn/Account';
import { resetState } from '../userProfile/actions';

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { logOut } = useContext(AccountContext);

  const logOutHandler = () => {
    dispatch(resetState());
    logOut();
    navigate({ pathname: '../' });
  };

  useEffect(() => {
    logOutHandler();
  }, []);

  return <>Loading</>;
};

export default LogOut;
