import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Grid, Typography } from '@mui/material';
import UserPool from '../../utils/userPool';
import AuthForm from '../../components/authForm';

const SignUn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [errorManager, setErrorManager] = useState({
    generalError: false,
    generalErrorMessage: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event: any) => {
    let email: any;
    let password;
    Object.keys(event.target).forEach((item) => {
      if (event.target[item].name === 'email') {
        email = event.target[item].value;
      }
    });

    Object.keys(event.target).forEach((item) => {
      if (event.target[item].name === 'password') {
        password = event.target[item].value;
      }
    });

    setIsLoading(true);
    UserPool.signUp(
      email as any,
      password as any,
      [],
      [],
      // eslint-disable-next-line no-unused-vars
      (err: any, data: any) => {
        if (err) {
          return setErrorManager((prevState) => ({
            ...prevState,
            generalError: true,
            generalErrorMessage: t('generalErrorMessage'),
          }));
        }
        setIsLoading(false);
        return navigate({
          pathname: 'verifyCode',
          search: `?${createSearchParams({
            email,
          })}`,
        });
      }
    );
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        flexGrow: 1,
        marginTop: '100px',
        marginBottom: '100px',
      }}
      data-testid="signUp-root"
    >
      <Helmet>
        <title>{t('seoSignupPageTitle')}</title>
        <meta name="application-name" content={t('seoSignupPageTitle')} />
        <meta name="description" content={t('seoSignupPageDescription')} />
        <meta name="keywords" content={t('seoSignupPageDKeywords')} />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta
          property="og:description"
          content={t('seoContactUsPageDescription')}
        />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={t('seoSignupPageTitle')} />
        <meta property="og:url" content={t('seoOgUrl')} />
      </Helmet>
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
          key="signUpForm"
          isLoading={isLoading}
          title={t('signupFormTitle')}
          onSubmit={onSubmit}
          submitCtaLoading={t('submitCtaLoading')}
          submitCta={t('signUpSubmitCta')}
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
              errorMessage: t('passwordErrorMessage'),
              isShowPasswordRules: true,
            },
          ]}
        />
        <Box
          sx={{
            marginTop: '40px',
            paddingLeft: '20px',
            paddingRight: '20px',
            textAlign: 'center',
          }}
        >
          <Typography variant="subtitle1">
            <Link to="./verifyCode">{t('verifyCodeText')}</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUn;
