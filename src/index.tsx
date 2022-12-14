import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import { Account } from './app/containers/signIn/Account';
import { theme } from './app/styles/theme';
import RoutesManager from './routes';
import { store } from './app/store/configureStore';
import './app/intl/i18n';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Account>
              <RoutesManager />
            </Account>
          </ThemeProvider>
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
