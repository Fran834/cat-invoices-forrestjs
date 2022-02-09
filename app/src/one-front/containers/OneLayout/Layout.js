import * as React from 'react';

import Box from '@mui/material/Box';

import { useGetContext } from "@forrestjs/react-root";

import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'

import { AppBar } from './LayoutAppBar';
import { LayoutItemsUI } from './LayoutItemsUI';

import { LayoutRoutes } from './LayoutRoutes';
import ErrorBoundary from "../../components/ErrorBoundary";

export const Layout = () => {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routes = useGetContext("one.layout.routes", []);

  return (
    <Box sx={{ display: 'flex' }}>
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
      </Box>
      <LayoutItemsUI isOpen={open} handleClose= {handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Toolbar />
        <ErrorBoundary>
          <LayoutRoutes items={routes}/>
        </ErrorBoundary>
      </Box>
    </Box>
  );
}