import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingContent from './app/components/loadingContent';
import SessionStatus from './app/containers/signIn/SessionStatus';

interface CompProps {
  children: any;
}

export const ProtectedRoute: React.FC<CompProps> = ({ children }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const getStatus = SessionStatus();

  useEffect(() => {
    if (getStatus === false) {
      return navigate({ pathname: '../home' });
    }
    if (getStatus === true) {
      return setIsLoading(false);
    }
    return setIsLoading(true);
  }, [getStatus, navigate]);

  return isLoading ? <LoadingContent /> : children;
};
