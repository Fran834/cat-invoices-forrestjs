// MUI Components:
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

// MUI Icons:
import StarIcon from '@mui/icons-material/Star';

//import { useLogin } from '../login';

// My Component:
export const CustomRoot = () => { 
  //const { user, logout } = useLogin('Fran');

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <StarIcon />
          <Typography>Welcome Fran</Typography>
        </Toolbar>
      </AppBar>
      <Typography>My First React App with MaterialUI</Typography>
      <Link href="https://mui.com" color="primary" variant="body2">
        Open MUI Documentation
      </Link>

      {/* <Button
        fullWidth
        variant="outlined"
        onClick={logout}
        sx={{ marginTop: 2 }}
      >
        Logout
      </Button> */}
    </Box>
  )
} ;