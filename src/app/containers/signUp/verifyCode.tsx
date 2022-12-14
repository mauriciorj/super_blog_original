/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '../../utils/userPool';
import AuthForm from '../../components/authForm';

interface userDataProps {
  Username: string;
  Pool: any;
}

const VerifyCode = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [isShowEmailForm, setIsShowEmailForm] = useState(true);
  const [isLoadingResendCode, setIsLoadingResendCode] = useState(false);
  const [isShowUserNotConfirmAlert, setIsShowUserNotConfirmAlert] =
    useState(false);
  const [isCodeSentAlert, setIsCodeSentAlert] = useState(false);
  const [errorManager, setErrorManager] = useState({
    generalError: false,
    generalErrorMessage: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userNotConfirmed = searchParams.get('check') === 'userNotConfirmed';
    const codeSent = searchParams.get('check') === 'codeSent';

    if (searchParams.get('email') && !userNotConfirmed && !codeSent) {
      setIsShowEmailForm(false);
    }
    if (userNotConfirmed) {
      setIsShowEmailForm(false);
      setIsShowUserNotConfirmAlert(true);
    } else if (codeSent) {
      setIsShowEmailForm(false);
      setIsCodeSentAlert(true);
    }
  }, [searchParams]);

  const resendCode = (email: any) => {
    // navigate({
    //   search: `?${createSearchParams({ email } as any)}`,
    // });
    setIsLoadingResendCode(true);
    const getEmail = email || searchParams.get('email');
    const userData = {
      Username: getEmail,
      Pool: UserPool,
    };
    const cognitoUser = new CognitoUser(userData as userDataProps);

    // eslint-disable-next-line consistent-return
    cognitoUser.resendConfirmationCode((error, result) => {
      if (error) {
        return setErrorManager((prevState) => ({
          ...prevState,
          generalError: true,
          generalErrorMessage: t('generalErrorMessage,'),
        }));
      }
      setIsShowUserNotConfirmAlert(false);
      navigate({
        search: `?check=codeSent&email=${getEmail}`,
      });
    });
    setIsLoadingResendCode(false);
  };

  const onSubmit = (event: any) => {
    setIsLoading(true);
    const userData = {
      Username: searchParams.get('email'),
      Pool: UserPool,
    };
    const cognitoUser = new CognitoUser(userData as userDataProps);

    let code;
    Object.keys(event.target).forEach((item) => {
      if (event.target[item].name === 'code') {
        code = event.target[item].value;
      }
    });

    // eslint-disable-next-line prefer-arrow-callback
    cognitoUser.confirmRegistration(code as any, true, function (err, result) {
      if (err) {
        setIsLoading(false);
        return setErrorManager((prevState) => ({
          ...prevState,
          generalError: true,
          generalErrorMessage: t('emailErrorMessage'),
        }));
      }
      setIsLoading(false);
      return navigate({
        pathname: '../signin',
        search: `?${createSearchParams({ account: 'verified' })}`,
      });
    });
  };

  return (
    <Grid
      sx={{
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
        textAlign: 'center',
      }}
      data-testid="signUp-root"
    >
      <Helmet>
        <title>{t('seoVerifyCodePageTitle')}</title>
        <meta name="description" content={t('seoVerifyCodePageDescription')} />
      </Helmet>
      {isShowEmailForm ? (
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column !important',
          }}
        >
          <AuthForm
            key="emailForm"
            isLoading={isLoading}
            title={t('emailFormTitle')}
            onSubmit={(event: any) => {
              let email;
              Object.keys(event.target).forEach((item) => {
                if (event.target[item].name === 'email') {
                  email = event.target[item].value;
                }
              });
              resendCode(email);
            }}
            submitCtaLoading={t('sendLoadingCtaLabel')}
            submitCta={t('sendCtaLabel')}
            generalError={errorManager.generalError}
            generalErrorMessage={errorManager.generalErrorMessage}
            onGeneralError={() =>
              setErrorManager((prevState) => ({
                ...prevState,
                generalError: false,
              }))
            }
            formFields={[
              {
                type: 'email',
                id: 'email',
                label: t('emailInputLabel'),
                errorMessage: t('emailErrorMessage'),
                verify: true,
                verificationRules: {
                  min: 4,
                  max: 100,
                },
              },
            ]}
          />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          className="page"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column !important',
          }}
        >
          {!isShowUserNotConfirmAlert && !isCodeSentAlert && (
            <Box
              sx={{
                marginTop: '30px',
                marginBottom: '30px',
              }}
            >
              <Alert severity="success">
                <AlertTitle>{t('accountCreatedSuccessAlertTitle')}</AlertTitle>
                {t('accountCreatedSuccessAlertDescription')}
              </Alert>
            </Box>
          )}
          {isShowUserNotConfirmAlert && (
            <Box
              sx={{
                marginTop: '30px',
                marginBottom: '30px',
              }}
            >
              <Alert severity="error">
                <AlertTitle>{t('userNotConfirmedAlertTitle')}</AlertTitle>
                {t('userNotConfirmedAlertDescription')}
              </Alert>
            </Box>
          )}
          {isCodeSentAlert && (
            <Box
              sx={{
                marginTop: '30px',
                marginBottom: '30px',
              }}
            >
              <Alert severity="success">
                <AlertTitle>{t('codeSuccessAlertTitle')}</AlertTitle>
                {t('codeSuccessAlertDescription')}
              </Alert>
            </Box>
          )}
          <AuthForm
            key="codePasswordForm"
            isLoading={isLoading}
            title={t('verifyCodeFormTitle')}
            onSubmit={onSubmit}
            submitCtaLoading={t('submitCtaLoading')}
            submitCta={t('submitCta')}
            generalError={errorManager.generalError}
            generalErrorMessage={errorManager.generalErrorMessage}
            onGeneralError={() =>
              setErrorManager((prevState) => ({
                ...prevState,
                generalError: false,
              }))
            }
            formFields={[
              {
                type: 'code',
                id: 'code',
                label: t('codeInputLabel'),
                errorMessage: t('codeErrorMessage'),
                verify: true,
                verificationRules: {
                  min: 6,
                  max: 6,
                },
              },
            ]}
          />
          <Box className="verifyCodeText" sx={{ marginTop: '20px' }}>
            <Typography
              variant="subtitle1"
              onClick={resendCode}
              sx={{ color: 'blue' }}
            >
              {t('sendCodeAgainLabel')}{' '}
              {isLoadingResendCode ? <CircularProgress size={20} /> : null}
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default VerifyCode;
