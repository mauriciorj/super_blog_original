/* eslint-disable no-var */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Alert, AlertTitle, Box, Grid } from '@mui/material';
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '../../utils/userPool';
import AuthForm from '../../components/authForm';

interface UserDataProps {
  Username: string;
  Pool: any;
}

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [isShowEmailForm, setIsShowEmailForm] = useState(true);
  const [errorManager, setErrorManager] = useState({
    generalError: false,
    generalErrorMessage: '',
  });
  const [email, setEmail] = useState<String | null>(null);

  useEffect(() => {
    if (searchParams.get('email')) {
      setIsShowEmailForm(false);
    }
  }, [searchParams]);

  const [isLoading, setIsLoading] = useState(false);

  const inputVerificationCode = (event: any) => {
    let code;
    let password;

    // eslint-disable-next-line array-callback-return
    Object.keys(event.target).map((item) => {
      if (event.target[item].name === 'code') {
        code = event.target[item].value;
      }
    });
    Object.keys(event.target).forEach((item) => {
      if (event.target[item].name === 'password') {
        password = event.target[item].value;
      }
    });

    const userData = {
      Username: email,
      Pool: UserPool,
    };

    setIsLoading(true);

    const cognitoUser = new CognitoUser(userData as UserDataProps);
    cognitoUser.confirmPassword(code as any, password as any, {
      onSuccess() {
        setIsLoading(false);
        return navigate({
          pathname: '../signin',
          search: `?${createSearchParams({
            check: 'passwordChanged',
          })}`,
        });
      },
      onFailure() {
        setIsLoading(false);
        return setErrorManager((prevState) => ({
          ...prevState,
          generalError: true,
          generalErrorMessage: t('generalPasswordErrorMessage'),
        }));
      },
    });
  };

  const onSubmit = (event: any) => {
    let emailForm: any;
    Object.keys(event.target).forEach((item) => {
      if (event.target[item].name === 'email') {
        emailForm = event.target[item].value;
      }
    });
    setEmail(emailForm);

    const userData = {
      Username: emailForm,
      Pool: UserPool,
    };

    const cognitoUser = new CognitoUser(userData as UserDataProps);
    setIsLoading(true);
    return cognitoUser.forgotPassword({
      onFailure: () => {
        setIsLoading(false);
        return setErrorManager((prevState) => ({
          ...prevState,
          generalError: true,
          generalErrorMessage: t('generalEmailErrorMessage'),
        }));
      },
      onSuccess: () => {
        setIsLoading(false);
        setIsShowEmailForm(false);
        return navigate({
          search: `?${createSearchParams({
            email: emailForm,
          })}`,
        });
      },
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
        <title>{t('seoForgetPasswordPageTitle')}</title>
        <meta
          name="application-name"
          content={t('seoForgetPasswordPageTitle')}
        />
        <meta name="description" content={t('seoForgetPasswordDescription')} />
        <meta name="keywords" content={t('seoForgetPasswordKeywords')} />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta
          property="og:description"
          content={t('seoForgetPasswordDescription')}
        />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={t('seoForgetPasswordPageTitle')} />
        <meta property="og:url" content={t('seoOgUrl')} />
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
            title={t('verificationEmailFormTitle')}
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
            ]}
          />
        </Grid>
      ) : (
        <Grid item xs={12} className="page">
          <Box className="alertbanner">
            <Alert severity="success">
              <AlertTitle>{t('codeSentAlertTitle')}</AlertTitle>
              {t('codeSentAlertDescription')}
            </Alert>
          </Box>
          <AuthForm
            key="codePasswordForm"
            isLoading={isLoading}
            title={t('emailFormTitle')}
            onSubmit={inputVerificationCode}
            submitCtaLoading={t('submitCtaLoading')}
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
              {
                type: 'password',
                id: 'password',
                label: t('passwordInputLabel'),
                errorMessage: t('passwordErrorMessage'),
                isShowPasswordRules: true,
              },
            ]}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default ForgetPassword;
