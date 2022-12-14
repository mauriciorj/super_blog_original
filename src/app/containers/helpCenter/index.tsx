import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HelpCenter = () => {
  const { t } = useTranslation();
  return (
    <Grid
      item
      xs={12}
      style={{ marginTop: '20px', marginBottom: '100px', textAlign: 'center' }}
    >
      <Helmet>
        <title>{t('seoHelpCenterPageTitle')}</title>
        <meta name="application-name" content={t('seoHelpCenterPageTitle')} />
        <meta name="description" content={t('seoHelpCenterDescription')} />
        <meta name="keywords" content={t('seoHelpCenterKeywords')} />
        <meta name="msapplication-TileColor" content="#FFF"></meta>
        <meta name="msapplication-TileImage" content={t('tileImage')} />
        <meta
          property="og:description"
          content={t('seoContactUsPageDescription')}
        />
        <meta property="og:image" content={t('ogImage')} />
        <meta property="og:site_name" content={t('siteName')} />
        <meta property="og:title" content={t('seoHelpCenterPageTitle')} />
        <meta property="og:url" content={t('seoOgUrl')} />
      </Helmet>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'left',
          marginTop: '20px',
          marginBottom: '30px',
        }}
      >
        Help Center
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default HelpCenter;
