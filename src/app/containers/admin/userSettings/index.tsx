import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Divider,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoadingButton from '../../../components/loadingButton';
import { makeSelectUserInfoLanguage } from '../userProfile/selector';
import LoadingContent from '../../../components/loadingContent';
import NumberingStep from '../../../components/numberingStep';
import { stringInterpolation } from '../../../utils/string';

// eslint-disable-next-line no-unused-vars
const CustomSlider = styled(Slider)(({ theme }) => ({
  color: '#af5252',
  height: 20,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
      <ArrowForwardIosIcon sx={{ fontSize: 10, marginLeft: '-5px' }} />
    </SliderThumb>
  );
}

const UserSettings = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();

  const [userLanguage, setUserLanguage] = useState<any>(null);

  // To show up the STEP 01 for account deactivation - slider
  const [isShowUpStep01, setIsShowUpStep01] = useState<boolean>(false);

  // To show up the STEP 02 for account deactivation - inser text
  const [isShowUpStep02, setIsShowUpStep02] = useState<boolean>(false);

  // To disable slider after it hit the max value (very right position)
  const [isSliderDisable, setIsSliderDisable] = useState<boolean>(false);

  // The STEP 02 inserted word
  const [step02Word, setStep02Word] = useState<any>(null);

  // The STEP 02 error
  const [step02Error, setStep02Error] = useState<boolean>(false);

  const getLanguage = useSelector(makeSelectUserInfoLanguage());
  useEffect(() => {
    if (getLanguage) {
      const capitalize =
        getLanguage.charAt(0).toUpperCase() + getLanguage.slice(1);
      setUserLanguage(capitalize);
    }
  }, [getLanguage]);

  useEffect(() => {
    const getSpecialWord = document.getElementById('step02InstructionId');
    if (getSpecialWord) {
      getSpecialWord.innerHTML = getSpecialWord.innerHTML.replace(
        new RegExp(t('step02SpecialWord'), 'g'),
        `<strong><i>${t('step02SpecialWord')}</i></strong>`
      );
      getSpecialWord.innerHTML = getSpecialWord.innerHTML.replace(
        new RegExp(t('deactivateAccountCta'), 'g'),
        `${t('step02SpecialWord').toUpperCase()}`
      );
    }
  }, [isShowUpStep02]);

  const isLoading = false;

  const pt = t('lngPortuguese');
  const en = t('lngEnglish');

  const handleChange = (e: any) => {
    const { value } = e.target;
    setUserLanguage(value);
  };

  const handleSlider = (e: any) => {
    const { value } = e.target;
    if (value === 100) {
      setIsSliderDisable(true);
      setIsShowUpStep01(false);
      setIsShowUpStep02(true);
    }
  };

  const onSubmit = () => {
    if (t('step02SpecialWord') !== step02Word) setStep02Error(true);
    // TODO work on deactivate account
    // the user profile status must be updated to deactivated
    // and a logout should be forced
  };

  if (!userLanguage) return <LoadingContent />;

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
          {t('userSettingsTitle')}
        </Typography>
      </Box>
      <Box sx={{ width: '100%', paddingLeft: '20px', marginTop: '30px' }}>
        <Typography variant="h5" color="textPrimary" fontWeight={100}>
          {t('userSettingsSubTitle')}
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
          <FormControl sx={{ width: matches ? '30%' : '100%' }}>
            <InputLabel id="demo-simple-select-label">
              {t('countryInputLable')}
            </InputLabel>
            <Select
              labelId="language"
              id="language"
              name="language"
              value={userLanguage ?? ''}
              label={t('countryInputLable')}
              onChange={handleChange}
            >
              <MenuItem key={pt} value={pt}>
                {pt}
              </MenuItem>
              <MenuItem key={en} value={en}>
                {en}
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{ marginTop: '30px', paddingLeft: '20px', marginBottom: '50px' }}
      >
        <LoadingButton
          submitCta={t('userSettingsResetPasswordCta')}
          submitCtaLoading={t('userSettingsResetPasswordCta')}
          type="submit"
          variant="contained"
          isLoading={isLoading}
          disabled={false}
        />
      </Box>
      <Box sx={{ width: '100%', paddingLeft: '20px', marginTop: '30px' }}>
        <Typography variant="h5" color="textPrimary" fontWeight={100}>
          {t('deactivateAccountTitle')}
        </Typography>
        <Divider sx={{ width: matches ? '50%' : '100%' }} />
      </Box>
      {isShowUpStep01 && (
        <Box
          sx={{ paddingLeft: '20px', marginTop: '20px' }}
          width={matches ? '50%' : 1}
        >
          <NumberingStep number="1" title={t('step01Title')} />
          <Typography
            variant="subtitle1"
            color={theme.palette.greyAccessible.main}
            sx={{ marginLeft: '5px', marginBottom: '10px' }}
          >
            {t('step01Instruction')}
          </Typography>
          <CustomSlider
            components={{ Thumb: AirbnbThumbComponent }}
            valueLabelDisplay="off"
            defaultValue={0}
            onChange={handleSlider}
            min={0}
            max={100}
            disabled={isSliderDisable}
          />
        </Box>
      )}
      {isShowUpStep02 && (
        <Box
          sx={{ paddingLeft: '20px', marginTop: '20px' }}
          width={matches ? '50%' : 1}
        >
          <NumberingStep number="2" title={t('step02Title')} />
          <Typography
            variant="subtitle1"
            color={theme.palette.greyAccessible.main}
            sx={{ marginLeft: '5px', marginBottom: '10px' }}
            id="step02InstructionId"
          >
            {stringInterpolation(
              t('step02Instruction'),
              t('step02SpecialWord'),
              t('deactivateAccountCta')
            )}
          </Typography>
          <Box sx={{ marginTop: '20px' }}>
            <TextField
              error={step02Error}
              helperText={t('step02ErrorMessage')}
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                setStep02Error(false);
                setStep02Word(e.target.value);
              }}
            />
          </Box>
        </Box>
      )}
      {(isShowUpStep01 || isShowUpStep02) && (
        <Box sx={{ paddingLeft: '20px' }}>
          <Button
            variant="contained"
            onClick={() => {
              setIsShowUpStep01(false);
              setIsShowUpStep02(false);
              setIsSliderDisable(false);
            }}
            sx={{
              paddingLeft: '20px',
              paddingRight: '20px',
              marginTop: '20px',
            }}
          >
            {t('cancelDeactivateAccountCta')}
          </Button>
        </Box>
      )}
      <Box
        sx={{
          paddingLeft: '20px',
          marginBottom: '50px',
        }}
      >
        <Button
          variant="contained"
          color="error"
          disabled={isShowUpStep01}
          onClick={() => {
            if (isShowUpStep02) {
              onSubmit();
            } else {
              setIsShowUpStep01(true);
            }
          }}
          sx={{
            paddingLeft: '20px',
            paddingRight: '20px',
            marginTop: '20px',
          }}
        >
          {t('deactivateAccountCta')}
        </Button>
      </Box>
    </Grid>
  );
};

export default UserSettings;
