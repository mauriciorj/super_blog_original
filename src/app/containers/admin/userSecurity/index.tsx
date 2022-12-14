/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  AlertTitle,
  Alert,
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CognitoUser } from 'amazon-cognito-identity-js';
import AuthForm from '../../../components/authForm';
import UserPool from '../../../utils/userPool';
import { makeSelectUserInfo } from '../userProfile/selector';

interface UserDataProps {
  Username: string;
  Pool: any;
}

const UserSecurity = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  const getUserInfo = useSelector(makeSelectUserInfo());

  const [errorManager, setErrorManager] = useState({
    generalError: false,
    generalErrorMessage: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  // To show up the password form
  // The first step to reset the password
  const [isShowResetPassForm, setIsShowResetPassForm] =
    useState<boolean>(false);

  // Step 1
  // Request to send the code to user email
  const handleResetPassword = () => {
    const userData = {
      Username: getUserInfo.email,
      Pool: UserPool,
    };
    setIsShowResetPassForm(true);
    const cognitoUser = new CognitoUser(userData as UserDataProps);
    setIsLoading(true);
    return cognitoUser.forgotPassword({
      onFailure: () => {
        setErrorManager((prevState) => ({
          ...prevState,
          generalError: true,
          generalErrorMessage: t('generalEmailErrorMessage'),
        }));
      },
      onSuccess: () => {
        setIsShowResetPassForm(true);
      },
    });
  };

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
      Username: getUserInfo.email,
      Pool: UserPool,
    };

    setIsLoading(true);

    const cognitoUser = new CognitoUser(userData as UserDataProps);
    cognitoUser.confirmPassword(code as any, password as any, {
      onSuccess() {
        setIsLoading(false);
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

  return (
    <Grid item xs={12} sx={{ paddingTop: '30px' }}>
      <Helmet>
        <title>{t('seoUserSecurityPageTitle')}</title>
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="googlebot-news" content="noindex, nofollow" />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Helmet>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" color="textPrimary" fontWeight={600}>
          {t('userSecurityTitle')}
        </Typography>
      </Box>
      {isShowResetPassForm && (
        <Box sx={{ paddingLeft: '20px', marginTop: '20px' }}>
          <Box
            sx={{
              marginBottom: '20px',
              display: 'flex',
              flexDirection: matches ? 'row' : 'column',
            }}
          >
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
              <Box className="alertbanner">
                <Alert severity="success">
                  <AlertTitle>{t('codeSentAlertTitle')}</AlertTitle>
                  {t('codeSentAlertDescription')}
                </Alert>
              </Box>
              <AuthForm
                key="codePasswordForm"
                isLoading={isLoading}
                title={t('verificationCodeFormTitle')}
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
          </Box>
        </Box>
      )}
      {!isShowResetPassForm ? (
        <Box
          sx={{ marginTop: '30px', paddingLeft: '20px', marginBottom: '50px' }}
        >
          <Button
            variant="contained"
            onClick={handleResetPassword}
            sx={{
              paddingLeft: '20px',
              paddingRight: '20px',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            {t('userSecurityResetPasswordCta')}
          </Button>
        </Box>
      ) : (
        <Box
          sx={{ marginTop: '30px', paddingLeft: '20px', marginBottom: '50px' }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={() => setIsShowResetPassForm(false)}
            sx={{
              paddingLeft: '20px',
              paddingRight: '20px',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            {t('userCancelSecurityResetPasswordCta')}
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default UserSecurity;
