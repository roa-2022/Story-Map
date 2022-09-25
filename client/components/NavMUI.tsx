import * as React from 'react';
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function NavMUI() {
  const [value, setValue] = React.useState(0);
  const { logout, loginWithRedirect } = useAuth0()
  const user = useSelector((state: any) => state?.user)

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }
  return (
    <Box sx={{ 
        width: '100%'}}>
      <BottomNavigation
      sx={{ 
        textAlign: 'left',
        backgroundColor: 'brown',
        color: 'white',
        textDecoration: 'none'
        
        }}

        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
        sx={{ color: 'white',textDecoration: 'none'
    }} 
        label="Add A Story" >
        
        <IfAuthenticated>
        <Link to="/add">Add A Story</Link>
        </IfAuthenticated> 
            </BottomNavigationAction> 
        
        <BottomNavigationAction label="Home"
        sx={{ color: 'white'}} >
        <Link className="navLink" to="/">
          Home
        </Link>
        </BottomNavigationAction>
        <BottomNavigationAction label="Stories"
        sx={{ color: 'white'}} >
        <Link to="/stories">Stories</Link>
        </BottomNavigationAction>
        <BottomNavigationAction label="Log Off"
        sx={{ color: 'white'}} >
        <IfAuthenticated>
          <Link className="navLink" to="/" onClick={handleLogOff}>
            Log off
          </Link>
          <br />
          <p>{user?.username}</p>
        </IfAuthenticated>
        </BottomNavigationAction>
        <BottomNavigationAction label="Sign In"
        sx={{ color: 'white'}} >
        <IfNotAuthenticated>
          <Link className="navLink" to="/" onClick={handleSignIn}>
            Sign In
          </Link>
          <br />
        </IfNotAuthenticated>
        </BottomNavigationAction>
      </BottomNavigation>
    </Box>
  );
}