import * as React from 'react';

import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'

import { AppBar } from './LayoutAppBar';
import { LayoutItemsUI } from './LayoutItemsUI';

export const Layout = () => {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <IconButton aria-label="Home" style={{ color:'#FFFFFF' }}>
              <HomeIcon/>
            </IconButton>
          </Link>
          <Typography variant="h6" noWrap component="div">
            Invoice App
          </Typography>
        </Toolbar>
      </AppBar>
      <LayoutItemsUI isOpen={open} handleClose= {handleDrawerClose} />
    </Box>
  );
}