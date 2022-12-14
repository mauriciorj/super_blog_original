import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    orange: Palette['primary'];
    white: Palette['primary'];
    yellow: Palette['primary'];
    pink: Palette['primary'];
    green: Palette['primary'];
    greyAccessible: Palette['primary'];
    red: Palette['primary'];
  }
  interface PaletteOptions {
    orange: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    yellow: PaletteOptions['primary'];
    pink: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    greyAccessible: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#287bd4',
    },
    orange: {
      main: '#F75C03',
    },
    white: {
      main: '#FFF',
    },
    yellow: {
      main: '#F1C40F',
    },
    pink: {
      main: '#D90368',
    },
    green: {
      main: '#13BD68',
    },
    red: {
      main: '#d32f2f',
    },
    greyAccessible: {
      light: 'rgba(0, 0, 0, 0.12)',
      main: '#333333',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Arial'].join(','),
    h4: {
      fontWeight: 300,
      color: '#333333',
    },
  },
});
