import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Link,
  useSearchParams,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Alert, AlertTitle, Box, Grid, Typography } from '@mui/material';
import { AccountContext } from './Account';
import AuthForm from '../../components/authForm';
import { setUserInfo } from '../admin/userProfile/actions';
import Analytics from '../../utils/analytics';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [errorManager, setErrorManager] = useState({
    generalError: false,
    generalErrorMessage: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isShowAccountVerifiedAlert, setIsShowAccountVerifiedAlert] =
    useState(false);
  const [isShowPasswordChanged, setIsShowPasswordChanged] = useState(false);

  const { authenticate } = useContext(AccountContext);

  useEffect(() => {
    Analytics({ pageName: 'signin' });
  }, []);

  useEffect(() => {
    if (searchParams.get('email')) {
      setIsShowAccountVerifiedAlert(true);
    }
    if (searchParams.get('check')) {
      setIsShowPasswordChanged(true);
    }
  }, [searchParams]);

  const onSubmit = (event: any) => {
    let username: any;
    let password;

    Object.keys(event.target).forEach((item) => {
      if (event.target[item].name === 'email') {
        username = event.target[item].value;
      }
    });

    Object.keys(event.target).forEach((item) => {
      if (event.target[item].name === 'password') {
        password = event.target[item].value;
      }
    });

    setIsLoading(true);
    authenticate(username, password)
      .then((data: any) => {
        dispatch(setUserInfo(data.idToken.payload.email));
        return navigate({
          pathname: '../admin',
        });
      })
      .catch((error: any) => {
        if (error.code === 'UserNotConfirmedException') {
          setIsLoading(false);
          return navigate({
            pathname: '../signup/verifyCode',
            search: `?${createSearchParams({
              check: 'userNotConfirmed',
              email: username,
            })}`,
          });
        }
        setIsLoading(false);
        return setErrorManager((prevState) => ({
          ...prevState,
          generalError: true,
          generalErrorMessage: t('loginErrorMessage'),
        }));
      });
  };

  return (
    <Grid sx={{ marginBottom: '100px', marginTop: '100px' }}>
      <Helmet>
        <title>{t('seoSigninPageTitle')}</title>
        <meta name="application-name" content={t('seoSigninPageTitle')} />
        <meta name="description" content={t('seoSigninPageDescription')} />
        <meta name="keywords" content={t('seoSigninPageKeywords')} />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta
          property="og:description"
          content={t('seoSigninPageDescription')}
        />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={t('seoSigninPageTitle')} />
        <meta property="og:url" content={t('seoOgUrl')} />
      </Helmet>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column !important',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        {isShowAccountVerifiedAlert && (
          <Box
            sx={{
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            <Alert severity="success">
              <AlertTitle>{t('accountVerifiedAlertTitle')}</AlertTitle>
              {t('accountVerifiedAlertDescription')}
            </Alert>
          </Box>
        )}
        {isShowPasswordChanged && (
          <Box
            sx={{
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            <Alert severity="success">
              <AlertTitle>{t('passwordChangedAlerTitle')}</AlertTitle>
              {t('passwordChangedAlertDescription')}
            </Alert>
          </Box>
        )}
        <AuthForm
          key="signInForm"
          isLoading={isLoading}
          title={t('singInFormTitle')}
          onSubmit={onSubmit}
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
            {
              type: 'password',
              id: 'password',
              label: t('passwordInputLabel'),
              verify: false,
            },
          ]}
        />
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="subtitle1" color="textPrimary">
            <Link to="../forgetPassword">{t('forgetPasswordLabel')}</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
