import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface CompProps {
  rules: {
    rule1: boolean;
    rule2: boolean;
    rule3: boolean;
    rule4: boolean;
    rule5: boolean;
  };
}

const PasswordRules: React.FC<CompProps> = ({ rules }) => {
  const { t } = useTranslation();
  const { rule1, rule2, rule3, rule4, rule5 } = rules;
  return (
    <Box className="passwordBox">
      <strong>Password</strong>
      <br />
      <br />
      <span style={{ color: rule1 ? 'blue' : 'black' }}>
        {rule1 ? <span>&#10003; </span> : null} {t('passwordMinChar')}
      </span>
      <br />
      <span style={{ color: rule2 ? 'blue' : 'black' }}>
        {rule2 ? <span>&#10003;</span> : null} {t('passwordOneUpperCaseLetter')}
      </span>
      <br />
      <span style={{ color: rule3 ? 'blue' : 'black' }}>
        {rule3 ? <span>&#10003;</span> : null} {t('passwordOneLowerCaseLetter')}
      </span>
      <br />
      <span style={{ color: rule4 ? 'blue' : 'black' }}>
        {rule4 ? <span>&#10003;</span> : null} {t('passwordOneDigit')}
      </span>
      <br />
      <span style={{ color: rule5 ? 'blue' : 'black' }}>
        {rule5 ? <span>&#10003;</span> : null} {t('passwordOneSpecialChar')}
      </span>
      <br />
    </Box>
  );
};

export default PasswordRules;
