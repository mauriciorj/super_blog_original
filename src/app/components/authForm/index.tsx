import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '../loadingButton';
import FormValidation from '../../utils/formValidation';
import PasswordRulesValidation from '../../utils/passwordRulesValidation';
import PasswordRules from '../passwordRules';

interface CompProps {
  onSubmit: any;
  title: string;
  isLoading: boolean;
  submitCta: string;
  submitCtaLoading: string;
  formFields: any;
  generalError: boolean;
  generalErrorMessage: string;
  onGeneralError: any;
}

const AuthForm: React.FC<CompProps> = ({
  onSubmit,
  title,
  isLoading,
  submitCta,
  submitCtaLoading,
  formFields,
  generalError,
  generalErrorMessage,
  onGeneralError,
}) => {
  const theme = useTheme();
  const [values, setValues] = useState<any>({});

  const [isDisable, setIsDisable] = useState(false);

  const [passwordValidation, setPasswordValidation] = useState({
    rule1: false,
    rule2: false,
    rule3: false,
    rule4: false,
    rule5: false,
  });

  useEffect(() => {
    if (formFields) {
      formFields.map((value: any, index: number) =>
        setValues((prevState: any) => ({
          ...prevState,
          [`field${index}`]: '',
          [`field${index}Error`]: false,
          [`field${index}ErrorMessage`]: value.errorMessage
            ? value.errorMessage
            : '',
          [`field${index}ShowPassword`]: false,
        }))
      );
    }
  }, []);

  // eslint-disable-next-line consistent-return
  const handleChange = (prop: any) => (event: any) => {
    setIsDisable(false);
    onGeneralError(false);

    const getIndex = prop.slice(5);
    const { type, verify, isShowPasswordRules } = formFields[getIndex];

    if (isShowPasswordRules) {
      const checkRules = PasswordRulesValidation(event.target.value);
      setPasswordValidation((prevState) => ({ ...prevState, ...checkRules }));
    }
    if (verify && !isShowPasswordRules) {
      const checkValidation = FormValidation(
        event.target.value,
        type,
        formFields[getIndex].verificationRules.min,
        formFields[getIndex].verificationRules.max
      );
      if (!checkValidation) {
        setValues((prevState: any) => ({
          ...prevState,
          [`${prop}Error`]: true,
        }));
        return setIsDisable(true);
      }
      setValues((prevState: any) => ({
        ...prevState,
        [`${prop}Error`]: false,
      }));
      return setIsDisable(false);
    }
  };

  const handleClickShowPassword = (index: any) => {
    setValues({
      ...values,
      [`field${index}ShowPassword`]: !values[`field${index}ShowPassword`],
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const checkPasswordRules = Object.values(passwordValidation).some(
    (rule) => rule === false
  );

  const handleCheckPassword = (prop: any) => () => {
    const getIndex = prop.slice(5);
    const { isShowPasswordRules } = formFields[getIndex];
    if (checkPasswordRules && isShowPasswordRules) {
      setIsDisable(true);
      return setValues((prevState: any) => ({
        ...prevState,
        [`${prop}Error`]: true,
      }));
    }
    setIsDisable(false);
    return setValues((prevState: any) => ({
      ...prevState,
      [`${prop}Error`]: false,
    }));
  };

  const textField = (id: string, label: string, index: number) => (
    <TextField
      required
      id={id}
      name={id}
      label={label}
      variant="outlined"
      sx={{ width: '30ch' }}
      error={values[`field${index}Error`]}
      onChange={(event) => {
        setValues((prevState: any) => ({
          ...prevState,
          [`field${index}`]: event.target.value,
          [`field${index}Error`]: false,
        }));
        setIsDisable(false);
      }}
      onBlur={handleChange(`field${index}`)}
      helperText={
        values[`field${index}Error`]
          ? values[`field${index}ErrorMessage`]
          : null
      }
    />
  );

  const passwordField = (id: string, label: string, index: number) => {
    const { isShowPasswordRules } = formFields[index];
    return (
      <>
        <FormControl
          required
          className="fields"
          variant="outlined"
          sx={{ width: '30ch' }}
        >
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            id={id}
            name={id}
            type={values[`field${index}ShowPassword`] ? 'text' : 'password'}
            error={values[`field${index}Error`]}
            onChange={handleChange(`field${index}`)}
            onBlur={handleCheckPassword(`field${index}`)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword(index)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {[`field${index}ShowPassword`] ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label={label}
          />
          <FormHelperText style={{ color: theme.palette.red.main }}>
            {values[`field${index}Error`]
              ? values[`field${index}ErrorMessage`]
              : null}
          </FormHelperText>
        </FormControl>
        {isShowPasswordRules && <PasswordRules rules={passwordValidation} />}
      </>
    );
  };

  const renderComponent = (component: any, index: number) => {
    switch (component.type) {
      case 'email':
        return textField(component.id, component.label, index);
      case 'code':
        return textField(component.id, component.label, index);
      case 'password':
        return passwordField(component.id, component.label, index);
      default:
        return null;
    }
  };

  if (!formFields) return null;

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={(e: any) => {
        e.preventDefault();
        onSubmit(e);
      }}
      sx={{ textAlign: 'left !important' }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
        <Typography variant="h5" color="textPrimary">
          {title}
        </Typography>
      </Box>
      {formFields.map((component: any, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={`field-${index}`} sx={{ marginBottom: '10px' }}>
          {renderComponent(component, index)}
        </Box>
      ))}
      {generalError && (
        <Box style={{ maxWidth: '300px' }} sx={{ marginBottom: '10px' }}>
          <FormHelperText style={{ color: theme.palette.red.main }}>
            {generalErrorMessage}
          </FormHelperText>
        </Box>
      )}
      <Box>
        <LoadingButton
          isLoading={isLoading}
          submitCtaLoading={submitCtaLoading}
          submitCta={submitCta}
          disabled={isDisable}
          type="submit"
          variant="contained"
          icon="sendInfo"
        />
      </Box>
    </Box>
  );
};

export default AuthForm;
