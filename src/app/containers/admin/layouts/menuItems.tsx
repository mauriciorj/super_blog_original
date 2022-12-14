import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import { AccountContext } from '../../signIn/Account';

const LeftMenuItems = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  const { logOut } = useContext(AccountContext);

  const logOutHandler = () => {
    // setIsLoading(true);
    logOut();
    navigate({ pathname: '../' });
    // setIsLoading(false);
  };

  return (
    <>
      <List>
        <Link
          to="/admin/savedPosts"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <ListItem key="userSavedPosts" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={t('userSavedPosts')} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link
          to="/admin/profile"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <ListItem key="userProfile" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar sx={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary={t('userProfile')} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="/admin/security"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <ListItem key="Security" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText primary={t('Security')} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="/admin/billing"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <ListItem key="Billing" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CurrencyExchangeIcon />
              </ListItemIcon>
              <ListItemText primary={t('Billing')} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="/admin/settings"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <ListItem key="Settings" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={t('Settings')} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link
          to="/admin/contactUs"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <ListItem key="contactLabel" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={t('contactLabel')} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="/admin/logout"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <ListItem
            onClick={() => logOutHandler()}
            key="userLogOut"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={t('userLogOut')} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default LeftMenuItems;
