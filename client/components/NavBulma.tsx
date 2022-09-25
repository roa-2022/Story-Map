import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'

function Nav() {
  const user = useSelector((state: any) => state?.user)
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
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>

            <Link className="navbar-item" to="/stories">
              Stories
            </Link>

            <IfAuthenticated>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/add">
                    Add A Story
                  </Link>
                  <Link className="navbar-item" to="/my_stories">
                    My Fav Stories
                  </Link>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Profile</a>
                </div>
              </div>
            </IfAuthenticated>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <IfNotAuthenticated>
                <div className="buttons">
                  <Link
                    to="/"
                    onClick={handleSignIn}
                    className="button is-primary"
                  >
                    <strong>Sign up</strong>
                  </Link>
                  <Link
                    to="/"
                    onClick={handleSignIn}
                    className="button is-light"
                  >
                    Log in
                  </Link>
                </div>
              </IfNotAuthenticated>
              <IfAuthenticated>
                <p className="navbar-item">Hi! {user?.username}</p>
                <Link className="button is-light" to="/" onClick={handleLogOff}>
                  Log off
                </Link>
                
              </IfAuthenticated>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
