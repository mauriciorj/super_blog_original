/* eslint-disable */
import React from 'react';
import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

interface AlertBannerProps {
  bannerMissingInfos: any;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ bannerMissingInfos }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const birthDay =
    bannerMissingInfos.day &&
    bannerMissingInfos.month &&
    bannerMissingInfos.year;

  return (
    <Grid
      item
      xs={12}
      flexDirection={matches ? 'row' : 'column'}
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: theme.palette.red.main,
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
      display="flex"
    >
      <Box sx={{ display: 'flex' }}>
        <WarningIcon
          sx={{
            color: theme.palette.white.main,
            fontWeight: 'bold',
            marginRight: '5px',
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.white.main,
            fontWeight: 'bold',
            marginRight: '5px',
          }}
        >
          IMPORTANT:
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.white.main }}
        >
          Please update your
          {!bannerMissingInfos.firstName && (
            <Link
              href="/admin/profile"
              style={{
                color: theme.palette.white.main,
                textDecoration: 'underline',
                paddingLeft: '5px',
                paddingRight: '5px',
              }}
            >
              Name
            </Link>
          )}
          {!bannerMissingInfos.firstName && !birthDay && 'and'}
          {!birthDay && (
            <Link
              href="/admin/profile"
              style={{
                color: theme.palette.white.main,
                textDecoration: 'underline',
                paddingLeft: '5px',
                paddingRight: '5px',
              }}
            >
              Birth Date
            </Link>
          )}
          to have access to all features
        </Typography>
      </Box>
    </Grid>
  );
};

export default AlertBanner;
