import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  AlertTitle,
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { SendEmail } from '../../../utils/sendEmail';
import UserContactUsForm from '../../../components/contactUsForm';
import LoadingContent from '../../../components/loadingContent';
import {
  makeSelectUserInfo,
  makeSelectUserInfoLoading,
} from '../userProfile/selector';
import { stringInterpolation } from '../../../utils/string';

interface errorFormProps {
  field?: string | null;
  message?: string | null;
}

interface formProps {
  firstName?: string | null;
  email?: string | null;
  subject?: string | null;
  text?: string | null;
}

const UserContactUs = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  // Get user email from redux
  const getUserInfo = useSelector(makeSelectUserInfo());
  const isUserLoading = useSelector(makeSelectUserInfoLoading());

  const [isLoading, setisLoading] = useState<boolean>(false);

  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);

  const [isError, setIsError] = useState<errorFormProps>({
    field: null,
    message: null,
  });

  const [values, setValues] = useState<formProps>({
    firstName: null,
    email: null,
    subject: null,
    text: null,
  });

  useEffect(() => {
    if (getUserInfo) {
      setValues((prevState) => ({
        ...prevState,
        email: getUserInfo.email,
        firstName: getUserInfo.firstName,
      }));
    }
  }, [getUserInfo]);

  useEffect(() => {
    const getSpecialWord = document.getElementById('step02InstructionId');
    if (getSpecialWord) {
      getSpecialWord.innerHTML = getSpecialWord.innerHTML.replace(
        new RegExp(t('contactEmail'), 'g'),
        `<a href="mailto:${t('contactEmail')}">${t('contactEmail')}</a>`
      );
    }
  }, [isError]);

  if (!getUserInfo || isUserLoading) return <LoadingContent />;

  const handleChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setValues((prevState) => ({ ...prevState, [name]: value }));
    setIsError((prevState) => ({ ...prevState, field: null, message: null }));
  };

  const handleSubmit = async () => {
    setisLoading(true);
    if (!values.subject) {
      return setIsError((prevState) => ({
        ...prevState,
        field: 'subject',
        message: t('subjectErrorContactUsForm'),
      }));
    }
    if (!values.text) {
      return setIsError((prevState) => ({
        ...prevState,
        field: 'text',
        message: t('textErrorContactUsForm'),
      }));
    }

    const msg = {
      firstName: values.firstName,
      email: values.email,
      message: values.text,
      subject: values.subject,
    };

    const trySendEmail = await SendEmail(msg);

    if (trySendEmail?.data === 'OK') {
      setIsMessageSent(true);
    } else {
      setIsError((prevState) => ({
        ...prevState,
        field: 'form',
        message: t('formErrorContactUsForm'),
      }));
    }

    return setisLoading(false);
  };

  return (
    <Grid item xs={12} sx={{ paddingTop: '30px' }}>
      <Helmet>
        <title>{t('seoContactUsPageTitle')}</title>
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="googlebot-news" content="noindex, nofollow" />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Helmet>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" color="textPrimary" fontWeight={600}>
          {t('contactUsTitle')}
        </Typography>
      </Box>
      <Box sx={{ width: '100%', paddingLeft: '20px', marginTop: '30px' }}>
        <Typography variant="h5" color="textPrimary" fontWeight={100}>
          {t('contactUsSubTitle')}
        </Typography>
        <Divider sx={{ width: matches ? '50%' : '100%' }} />
      </Box>
      {isError.field === 'form' && (
        <Box
          className="alertbanner"
          sx={{ marginLeft: '20px', marginTop: '20px', marginBottom: '30px' }}
        >
          <Alert severity="error">
            <AlertTitle>{t('formErrorContactUsFormTitle')}</AlertTitle>
            <div id="step02InstructionId">
              {stringInterpolation(
                t('formErrorContactUsFormDescription'),
                t('contactEmail')
              )}
            </div>
          </Alert>
        </Box>
      )}
      {!isMessageSent && (
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ paddingLeft: '20px', marginTop: '20px' }}
        >
          <UserContactUsForm
            error={isError}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            values={values}
          />
        </Box>
      )}
      {isMessageSent && (
        <Box className="alertbanner" sx={{ marginTop: '20px' }}>
          <Alert severity="success">
            <AlertTitle>{t('ctaContactUsSuccessTitle')}</AlertTitle>
            {t('ctaContactUsSuccesDescription')}
          </Alert>
        </Box>
      )}
    </Grid>
  );
};

export default UserContactUs;
