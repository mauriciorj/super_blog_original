import React from 'react';
import { Button, CircularProgress, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import CookieIcon from '@mui/icons-material/Cookie';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import KeyIcon from '@mui/icons-material/Key';

interface CompProps {
  variant: any;
  icon?: any;
  type?: any;
  onClick?: any;
  isLoading: boolean;
  disabled: boolean;
  submitCtaLoading: string;
  submitCta: string;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
}

const LoadingButton: React.FC<CompProps> = ({
  variant,
  icon,
  type,
  onClick,
  isLoading,
  disabled,
  submitCtaLoading,
  submitCta,
  color,
}) => {
  const theme = useTheme();

  // eslint-disable-next-line no-shadow
  const renderIcon = (icon: any) => {
    switch (icon) {
      case 'logOut':
        return <LogoutIcon />;
      case 'sendInfo':
        return <LogoutIcon />;
      case 'cookie':
        return <CookieIcon />;
      case 'save':
        return <SaveAltIcon />;
      case 'key':
        return <KeyIcon />;
      default:
        return <SendIcon />;
    }
  };

  return (
    <Button
      variant={variant || 'contained'}
      type={type || 'button'}
      disabled={disabled}
      endIcon={
        isLoading ? (
          <CircularProgress
            style={{ color: theme.palette.white.main }}
            size={20}
          />
        ) : (
          renderIcon(icon)
        )
      }
      onClick={onClick}
      color={color || 'primary'}
    >
      {isLoading ? submitCtaLoading : submitCta}
    </Button>
  );
};

export default LoadingButton;
