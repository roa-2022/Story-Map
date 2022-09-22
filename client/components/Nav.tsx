import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'

function Nav() {
  const user = useSelector((state: any) => state?.loggedInUser)
  // DONE call the useAuth0 hook and destructure logout and loginWithRedirect
  const { logout, loginWithRedirect } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <div className="navGroup">
        <Link className="navLink" to="/">
          Home
        </Link>
        <br />
        <Link to="/stories">Stories</Link>
        <br />
        <Link to="/add">Add A Story</Link>
        <br />
        <IfAuthenticated>
          <Link className="navLink" to="/" onClick={handleLogOff}>
            Log off
          </Link>
          <br />
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Link className="navLink" to="/" onClick={handleSignIn}>
            Sign In
          </Link>
          <br />
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default Nav