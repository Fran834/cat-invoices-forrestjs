import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';

export const layoutItems = [
  {
    key: 'Invoices',
    linkTo: '/invoices',
    Icon: () => { return (<AccountBalanceWallet />) } ,
    text: 'Invoices'
  },
  {
    key: 'Users',
    linkTo: '/users',
    Icon: () => { return (<PersonIcon />)},
    text: 'Users'
  }  
]
