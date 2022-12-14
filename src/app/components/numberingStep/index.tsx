import React from 'react';
import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';

interface CompProps {
  number: string;
  title: string;
}

const NumberingStep: React.FC<CompProps> = ({ number, title }) => {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '30px',
        marginBottom: '30px',
      }}
    >
      <Box
        sx={{
          border: '2px solid',
          borderColor: theme.palette.greyAccessible.main,
          borderRadius: '5px',
          paddingBottom: '10px',
          paddingTop: '10px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: theme.palette.primary.main, fontWeight: 800 }}
        >
          {number}
        </Typography>
      </Box>
      <Box sx={{ marginLeft: '10px' }}>
        <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
          {title}
        </Typography>
        <Divider
          sx={{ background: theme.palette.greyAccessible.main, height: '1px' }}
        />
      </Box>
    </Grid>
  );
};

export default NumberingStep;
