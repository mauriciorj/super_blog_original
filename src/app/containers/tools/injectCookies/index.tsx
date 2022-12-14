import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Checkbox,
  Grid,
  FormGroup,
  FormControlLabel,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import CountUp from 'react-countup';
import LoadingButton from '../../../components/loadingButton';
import NumberingStep from '../../../components/numberingStep';
import { siteList as brSiteList } from './cookiesListBr';
import { siteList as usSiteList } from './cookiesListUs';

const InjectCookies = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [cookiesQuantity, setCookiesQuantity] = useState(0);
  const [brazilCheckBox, setBrazilCheckbox] = useState(false);
  const [unitedStatesCheckBox, setUnitedStatesCheckbox] = useState(false);

  const isDisable = false;
  const isLoading = false;

  const brazil = t('brazil');
  const unitedStates = t('unitedStates');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'brazil') {
      if (brazilCheckBox === true) {
        setBrazilCheckbox(false);
        if (cookiesQuantity > 0) {
          setCookiesQuantity(cookiesQuantity - brSiteList.length);
        }
      } else {
        setBrazilCheckbox(true);
        setCookiesQuantity(cookiesQuantity + brSiteList.length);
      }
    }
    if (event.target.name === 'unitedStates') {
      if (unitedStatesCheckBox === true) {
        setUnitedStatesCheckbox(false);
        if (cookiesQuantity > 0) {
          setCookiesQuantity(cookiesQuantity - usSiteList.length);
        }
      } else {
        setUnitedStatesCheckbox(true);
        setCookiesQuantity(cookiesQuantity + usSiteList.length);
      }
    }
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        flexGrow: 1,
        marginTop: '40px',
        marginBottom: '100px',
      }}
      data-testid="inject-cookies"
    >
      <Helmet>
        <title>{t('seoToolsInjectCookiesTitle')}</title>
        <meta
          name="description"
          content={t('seoToolsInjectCookiesDescription')}
        />
      </Helmet>
      <Helmet>
        <title>{t('seoToolsInjectCookiesTitle')}</title>
        <meta
          name="application-name"
          content={t('seoToolsInjectCookiesTitle')}
        />
        <meta
          name="description"
          content={t('seoToolsInjectCookiesDescription')}
        />
        <meta name="keywords" content={t('seoToolsInjectCookiesKeywords')} />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta
          property="og:description"
          content={t('seoToolsInjectCookiesDescription')}
        />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={t('seoToolsInjectCookiesTitle')} />
        <meta property="og:url" content={t('seoOgUrl')} />
      </Helmet>
      <Box sx={{ marginBottom: '50px' }}>
        <Typography variant="h4" color="textPrimary" fontWeight={100}>
          {t('toolsInjectCookiesTitle')}
        </Typography>
      </Box>
      <NumberingStep number="1" title={t('toolsInjectCookiesFirstStep')} />
      <Box sx={{ marginLeft: '30px', marginBottom: '40px' }}>
        <FormGroup sx={{ display: 'felx', flexDirection: 'row' }}>
          <FormControlLabel
            checked={brazilCheckBox}
            control={<Checkbox />}
            label={brazil}
            name="brazil"
            onChange={handleChange}
          />
          <FormControlLabel
            checked={unitedStatesCheckBox}
            control={<Checkbox />}
            label={unitedStates}
            name="unitedStates"
            onChange={handleChange}
          />
        </FormGroup>
        <Box sx={{ marginTop: '10px' }} display="flex">
          <Typography
            variant="subtitle1"
            color={theme.palette.greyAccessible.main}
            fontWeight={100}
          >
            {t('toolsInjectCookiesAvailableQuanitity')}
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.greyAccessible.main}
            fontWeight={600}
            sx={{ marginLeft: '5px' }}
          >
            <CountUp duration={1} end={cookiesQuantity} />
          </Typography>
        </Box>
      </Box>
      <NumberingStep number="2" title={t('toolsInjectCookiesSecondStep')} />
      <Box sx={{ marginLeft: '30px' }}>
        <TextField id="cookiesQuantity" variant="outlined" type="number" />
      </Box>
      <Box sx={{ marginLeft: '30px', marginTop: '50px' }}>
        <LoadingButton
          isLoading={isLoading}
          submitCtaLoading={t('toolsInjectCookiesCtaLoading')}
          submitCta={t('toolsInjectCookiesCta')}
          disabled={isDisable}
          type="submit"
          variant="contained"
          icon="cookie"
        />
      </Box>
    </Grid>
  );
};

export default InjectCookies;
