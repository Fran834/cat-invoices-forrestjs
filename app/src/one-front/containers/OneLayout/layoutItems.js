import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';

export const layoutItems = [
  {
    key: 'Invoices',
    linkTo: '/Invoices',
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
