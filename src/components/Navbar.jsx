import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  InputBase,
  Box,
  Button,
  Avatar,Typography
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { signOut } from 'next-auth/react';

import { useNotificationCount } from '../hooks/useNotifications';
import HRNotificationPage from '../pages/hr/notification';

const Navbar = () => {
  const router = useRouter();
  const { unreadCount } = useNotificationCount();
  const [notificationAnchor, setNotificationAnchor] = useState(null);

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setNotificationAnchor(null);
  };

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false }); // silent sign out
      router.push('/auth/signin'); // redirect manually
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(45deg, #0c4672, #00bcd4)', }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Avatar
                          sx={{
                            width: 48,
                            height: 48,
                            background: 'linear-gradient(45deg, #0c4672, #00bcd4)',
                            mr: 2,
                            borderRadius: 3,
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                          }}
                        >
                          R
                        </Avatar>
                        <Typography
                          variant="h4"
                          component="div"
                          sx={{
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #ffffff, #00bcd4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          RevX
                        </Typography>
                      </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Search Bar */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '5px 15px',
            width: '300px',
            marginRight: 2,
          }}>
            <SearchIcon sx={{ color: '#153B60' }} />
            <InputBase
              sx={{ ml: 1, flex: 1, color: '#153B60' }}
              placeholder="Search..."
            />
          </Box>

          {/* Notification Icon */}
          <IconButton
            color="inherit"
            sx={{ marginRight: 2 }}
            onClick={handleNotificationClick}
            id="notification-button"
          >
            <Badge badgeContent={unreadCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Notification Popup */}
          <HRNotificationPage
            isPopup={true}
            anchorEl={notificationAnchor}
            onClose={handleCloseNotification}
          />

          {/* Sign Out Button */}
          <Button
            component={motion.button}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.2)'
            }}
            whileTap={{ scale: 0.95 }}
            color="inherit"
            startIcon={<PowerSettingsNewIcon />}
            onClick={handleSignOut}
            sx={{
              px: 2,
              py: 1,
              borderRadius: '8px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'none',
              display: { xs: 'none', sm: 'flex' },
              '& .MuiButton-startIcon': {
                marginRight: '6px'
              }
            }}
          >
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;