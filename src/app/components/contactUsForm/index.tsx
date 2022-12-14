import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, TextField } from '@mui/material';
import LoadingButton from '../loadingButton';

interface UserContactUsFormProps {
  isUserlogged?: boolean | null | undefined;
  error?: any | null;
  handleChange: any;
  handleSubmit: any;
  isLoading: boolean;
  values?: any | null;
}

const UserContactUsForm: React.FC<UserContactUsFormProps> = ({
  isUserlogged,
  error,
  handleChange,
  handleSubmit,
  isLoading,
  values,
}) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} md={6} display="flex" flexDirection="column">
      {!isUserlogged && isUserlogged !== undefined && (
        <>
          <TextField
            error={error?.field === 'firstName'}
            helperText={error?.field === 'firstName' ? error?.message : null}
            rows={4}
            required
            id="firstName"
            name="firstName"
            label={t('firstNameContactUsForm')}
            variant="outlined"
            value={values?.firstName || ''}
            onChange={handleChange}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            error={error?.field === 'email'}
            helperText={error?.field === 'email' ? error?.message : null}
            rows={4}
            required
            id="email"
            name="email"
            label={t('emailContactUsForm')}
            variant="outlined"
            value={values?.email || ''}
            onChange={handleChange}
            sx={{ marginBottom: '20px' }}
          />
        </>
      )}
      <TextField
        error={error?.field === 'subject'}
        helperText={error?.field === 'subject' ? error?.message : null}
        rows={4}
        required
        id="subject"
        name="subject"
        label={t('subjectContactUsForm')}
        variant="outlined"
        value={values?.subject || ''}
        onChange={handleChange}
        sx={{ marginBottom: '20px' }}
      />
      <TextField
        error={error?.field === 'text'}
        helperText={error?.field === 'text' ? error?.message : null}
        multiline
        rows={4}
        required
        id="text"
        name="text"
        label={t('textContactUsForm')}
        variant="outlined"
        value={values?.text || ''}
        onChange={handleChange}
      />
      <Box sx={{ marginTop: '20px', marginBottom: '50px' }}>
        <LoadingButton
          submitCta={t('ctaContactUsForm')}
          submitCtaLoading={t('ctaContactUsForm')}
          variant="contained"
          icon="save"
          isLoading={isLoading}
          disabled={Boolean(error?.field)}
          onClick={handleSubmit}
        />
      </Box>
    </Grid>
  );
};

export default UserContactUsForm;
