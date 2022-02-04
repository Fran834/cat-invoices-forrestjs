import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

import { useTheme } from '@mui/material/styles';

import { Drawer } from './LayoutDrawer';
import { DrawerHeader } from './LayoutDrawerHeader';
import { layoutItems } from './layoutItems';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';

import ErrorBoundary from "../../components/ErrorBoundary";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';

import PropTypes from 'prop-types'

export const LayoutItemsUI = (props) =>  {

  const theme = useTheme();

  return(
    <Drawer
        variant="permanent"
        open={props.isOpen}
      >
        <DrawerHeader>
          <IconButton onClick={props.handleClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <ErrorBoundary>
          {layoutItems.map((key, linkTo, Icon, text) => (
            <List>
              <ListItem button key= {key} component={Link} to={linkTo}>
                <ListItemIcon>
                  {Icon}
                </ListItemIcon> 
                <ListItemText primary={text} />
              </ListItem>
            </List>
          ))}
        </ErrorBoundary> */}
        <List>
            <ListItem button key={'Invoices'} component={Link} to="/invoices">
              <ListItemIcon>
                <AccountBalanceWallet /> 
              </ListItemIcon>
              <ListItemText primary={'Invoices'} />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key={'Users'} component={Link} to="/users">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={'Users'} />
            </ListItem>
        </List>
      </Drawer>
)}

LayoutItemsUI.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}