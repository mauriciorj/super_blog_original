import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  Alert,
  AlertTitle,
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import ptLocale from 'i18n-iso-countries/langs/pt.json';
import LoadingButton from '../../../components/loadingButton';
import LoadingContent from '../../../components/loadingContent';
import { days, years, months } from '../../../utils/dates';
import {
  makeSelectUserError,
  makeSelectUserErrorMessage,
  makeSelectUserInfo,
  makeSelectUserInfoLoading,
  makeSelectUserInfoUpdated,
  makeSelectUserTaskingLoading,
} from './selector';
import { clearErrors, updateUserProfile } from './actions';

const UserProfile = () => {
  // Default configuration
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  // Get user information from redux
  const getUserInfo = useSelector(makeSelectUserInfo());

  // Check if the get API function is loading
  const isUserInfoLoading = useSelector(makeSelectUserInfoLoading());

  // Check if the user info was successfully updated
  const isUserInfoUpdated = useSelector(makeSelectUserInfoUpdated());

  // Check if any task like updating is loading
  const isUserTaskingLoading = useSelector(makeSelectUserTaskingLoading());

  // Get Error Message
  const getError = useSelector(makeSelectUserError());
  const getErrorMessage = useSelector(makeSelectUserErrorMessage());
  const [updateError, setUpdateError] = useState<any>({
    isError: false,
    errorMessage: null,
    field: null,
  });

  // Monitoring the error and the error message from redux
  useEffect(() => {
    setUpdateError((prevState: any) => ({
      ...prevState,
      isError: getError,
      errorMessage: getErrorMessage,
      field: null,
    }));
  }, [getError, getErrorMessage, isUserTaskingLoading]);

  // Set user information from redux
  const [userApiInfo, setUserApiInfo] = useState<any>(null);

  // Set user information from form
  const [userInfo, setUserInfo] = useState<any>(null);

  // Set to true if any value is not the same as the initial (from API/redux)
  const [isAnyValueDifferent, setIsAnyValueDifferent] =
    useState<boolean>(false);

  // Get the countries list
  countries.registerLocale(enLocale);
  countries.registerLocale(ptLocale);
  const getCountries = Object.values(
    countries.getNames('en', { select: 'official' })
  );

  useEffect(() => {
    dispatch(clearErrors());
  }, []);

  // Compare if there is any real change to change the button state
  // and give to the user the ability to save it
  useEffect(() => {
    if (userInfo) {
      let compareValues = false;
      Object.keys(userInfo)?.map((key) => {
        if (userInfo[key] !== getUserInfo[key]) {
          compareValues = true;
        }
        return compareValues;
      });
      setIsAnyValueDifferent(compareValues);
    }
  }, [userInfo, userApiInfo]);

  // Get the user infos from redux store and update the userInfo state
  useEffect(() => {
    if (getUserInfo) {
      setUserApiInfo((prevState: any) => ({
        ...prevState,
        id: getUserInfo.id,
        country: getUserInfo.country,
        day: getUserInfo.day,
        firstName: getUserInfo.firstName,
        lastName: getUserInfo.lastName,
        month: getUserInfo.month,
        year: getUserInfo.year,
      }));
    }
  }, [getUserInfo]);

  // Just render the page if
  // it's not loading the infos from API
  // and all userInfo were set up
  // Otherwise the loader will rendered
  if (isUserInfoLoading || !userApiInfo) return <LoadingContent />;

  // Handler the form changes
  const handleChange = (e: any) => {
    dispatch(clearErrors());
    setUpdateError((prevState: any) => ({
      ...prevState,
      isError: false,
      errorMessage: null,
    }));
    const { name, value } = e.target;
    setUserInfo((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const compareValues = { id: getUserInfo?.id, email: getUserInfo?.email };

    const day = userInfo.day || userApiInfo.day;
    const month = userInfo.month || userApiInfo.month;
    const year = userInfo.year || userApiInfo.year;

    const firstName = userInfo.firstName || userApiInfo.firstName;

    // First name validation
    if (!firstName || firstName.length < 2) {
      return setUpdateError((prevState: any) => ({
        ...prevState,
        isError: true,
        errorMessage: t('userProfileFirstNameError'),
        field: 'firstName',
      }));
    }

    // Data validation
    if (!day || !month || !year) {
      return setUpdateError((prevState: any) => ({
        ...prevState,
        isError: true,
        errorMessage: t('userProfileBirthDateError'),
        field: 'birthday',
      }));
    }

    // Get only the different values
    Object.keys(userInfo)?.map((key) => {
      if (userInfo[key] !== userApiInfo[key]) {
        Object.assign(compareValues, { [key]: userInfo[key] });
      }
      return compareValues;
    });

    return dispatch(updateUserProfile(compareValues));
  };

  return (
    <Grid item xs={12} sx={{ paddingTop: '30px' }}>
      <Helmet>
        <title>{t('seoUserProfilePageTitle')}</title>
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="googlebot-news" content="noindex, nofollow" />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Helmet>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" color="textPrimary" fontWeight={600}>
          {t('userProfileTitle')}
        </Typography>
      </Box>
      {isUserInfoUpdated && (
        <Box className="alertbanner" sx={{ marginTop: '20px' }}>
          <Alert severity="success">
            <AlertTitle>{t('seoUserProfileInfoUpdatedTitle')}</AlertTitle>
            {t('seoUserProfileInfoUpdatedDescription')}
          </Alert>
        </Box>
      )}
      <Box sx={{ width: '100%', paddingLeft: '20px', marginTop: '30px' }}>
        <Typography variant="h5" color="textPrimary" fontWeight={100}>
          {t('userProfileSubTitlePersonalInformation')}
        </Typography>
        <Divider sx={{ width: matches ? '50%' : '100%' }} />
      </Box>
      <Box sx={{ paddingLeft: '20px', marginTop: '20px' }}>
        <Box
          sx={{
            marginBottom: '20px',
            display: 'flex',
            flexDirection: matches ? 'row' : 'column',
          }}
        >
          <TextField
            error={updateError?.field === 'firstName'}
            helperText={
              userInfo?.firstName === '' ? t('userProfileFirstNameError') : ''
            }
            required
            id="firstName"
            name="firstName"
            label={t('firstNameLabelInputLabel')}
            variant="outlined"
            value={userInfo?.firstName || userApiInfo?.firstName}
            sx={{
              marginRight: matches ? '20px' : '0px',
              marginBottom: matches ? '0px' : '20px',
            }}
            onChange={handleChange}
          />
          <TextField
            id="lastName"
            name="lastName"
            label={t('lastNameLabelInputLabel')}
            variant="outlined"
            value={userInfo?.lastName || userApiInfo?.lastName}
            sx={{
              marginBottom: matches ? '0px' : '20px',
              width: matches ? null : '100%',
            }}
            onChange={handleChange}
          />
        </Box>
        <Grid container spacing={1} sx={{ marginBottom: '20px' }}>
          <Grid item xs={12}>
            <Typography variant="h6" color="textPrimary" fontWeight={100}>
              {t('userProfileSubTitleBirthdate')}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            <FormControl
              required
              error={updateError?.field === 'birthday'}
              sx={{ width: '100%' }}
            >
              <InputLabel id="demo-simple-select-label">
                {t('dayInputLable')}
              </InputLabel>
              <Select
                required
                labelId="day"
                id="day"
                name="day"
                value={userInfo?.day || userApiInfo?.day}
                label={t('dayInputLable')}
                onChange={handleChange}
              >
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={3}>
            <FormControl
              required
              error={updateError?.field === 'birthday'}
              sx={{ width: '100%' }}
            >
              <InputLabel id="demo-simple-select-label">
                {t('monthInputLable')}
              </InputLabel>
              <Select
                required
                labelId="month"
                id="month"
                name="month"
                value={userInfo?.month || userApiInfo?.month}
                label={t('monthInputLable')}
                onChange={handleChange}
              >
                {months.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={3}>
            <FormControl
              required
              error={updateError?.field === 'birthday'}
              sx={{ width: '100%' }}
            >
              <InputLabel id="demo-simple-select-label">
                {t('yearInputLable')}
              </InputLabel>
              <Select
                required
                labelId="year"
                id="year"
                name="year"
                value={userInfo?.year || userApiInfo?.year}
                label={t('yearInputLable')}
                onChange={handleChange}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {(userInfo?.day === '' ||
            userInfo?.month === '' ||
            userInfo?.year === '') && (
            <Box width={1} sx={{ paddingLeft: '20px' }}>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.red.main }}
              >
                {t('userProfileBirthDateError')}
              </Typography>
            </Box>
          )}
        </Grid>
      </Box>
      <Box sx={{ width: '100%', paddingLeft: '20px', marginTop: '30px' }}>
        <Typography variant="h5" color="textPrimary" fontWeight={100}>
          {t('userProfileSubTitleAddress')}
        </Typography>
        <Divider sx={{ width: matches ? '50%' : '100%' }} />
      </Box>
      <Box
        sx={{ marginBottom: '20px', paddingLeft: '20px', marginTop: '20px' }}
      >
        <FormControl sx={{ width: matches ? '50%' : '100%' }}>
          <InputLabel id="demo-simple-select-label">
            {t('countryInputLable')}
          </InputLabel>
          <Select
            labelId="country"
            id="country"
            name="country"
            value={userInfo?.country}
            label={t('countryInputLable')}
            onChange={handleChange}
          >
            {getCountries.map((country: any) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {updateError.isError && (
        <Box sx={{ marginTop: '30px', paddingLeft: '20px' }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: theme.palette.red.main,
            }}
          >
            {t(updateError.errorMessage)}
          </Typography>
        </Box>
      )}
      <Box
        sx={{ marginTop: '30px', paddingLeft: '20px', marginBottom: '50px' }}
      >
        <LoadingButton
          submitCta={t('saveCtaLabel')}
          submitCtaLoading={t('saveCtaLoadingLabel')}
          variant="contained"
          icon="save"
          isLoading={isUserTaskingLoading}
          disabled={!isAnyValueDifferent || updateError.isError}
          onClick={handleSubmit}
        />
      </Box>
    </Grid>
  );
};

export default UserProfile;
