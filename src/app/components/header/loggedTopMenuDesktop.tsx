import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import Settings from '@mui/icons-material/Settings';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';

const LoggedTopMenuDesktop = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorToolsMenus, setToolsMenu] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenToolsMenus = (event: React.MouseEvent<HTMLElement>) => {
    setToolsMenu(event.currentTarget);
  };

  const handleCloseToolsMenus = () => {
    setToolsMenu(null);
  };

  const adminHeaderMenuTitle = t('adminHeaderMenuTitle');
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: theme.palette.white.main,
            whiteSpace: 'nowrap',
          }}
        >
          <Box sx={{ marginRight: '20px' }}>
            <Typography>{t('home')}</Typography>
          </Box>
        </Link>
        <Box sx={{ flexGrow: 0 }}>
          <Box
            sx={{ marginRight: '20px', cursor: 'pointer' }}
            onClick={handleOpenToolsMenus}
          >
            <Typography>{t('toolsMenu')}</Typography>
          </Box>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorToolsMenus}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorToolsMenus)}
            onClose={handleCloseToolsMenus}
          >
            <Link
              to="/tools/injectCookies"
              style={{
                textDecoration: 'none',
                color: theme.palette.primary.main,
                whiteSpace: 'nowrap',
              }}
            >
              <Box sx={{ marginLeft: '10px', marginRight: '10px' }}>
                <Typography>{t('injectCookies')}</Typography>
              </Box>
            </Link>
          </Menu>
        </Box>
        <Tooltip title={adminHeaderMenuTitle}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link
          to="/admin/profile"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <MenuItem>
            <Avatar /> {t('userProfile')}
          </MenuItem>
        </Link>
        <Divider />
        <Link
          to="/admin/settings"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {t('userSettings')}
          </MenuItem>
        </Link>
        <Link
          to="/admin/logout"
          style={{
            textDecoration: 'none',
            color: theme.palette.greyAccessible.main,
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {t('userLogOut')}
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default LoggedTopMenuDesktop;
