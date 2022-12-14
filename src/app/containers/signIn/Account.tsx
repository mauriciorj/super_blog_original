import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../../utils/userPool';

const AccountContext: any = createContext(null);

const Account = (props: any) => {
  const getSession = async () =>
    new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((error: any, session: any) => {
          if (error) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username: string, Password: string) =>
    new Promise((resolve, reject) => {
      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      const user = new CognitoUser({
        Username,
        Pool,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (result) => {
          resolve(result);
        },
        onFailure: (result) => {
          reject(result);
        },
        newPasswordRequired: (result: any) => {
          resolve(result);
        },
      });
    });

  const logOut = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      return true;
    }
    return true;
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AccountContext.Provider
      value={{ authenticate, getSession, logOut } as any}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
