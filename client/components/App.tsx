import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './Home'
import Stories from './Stories'
import Story from './Story'
import AddStory from './AddStory'

import { useAuth0 } from '@auth0/auth0-react'
import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'

function App() {
  useCacheUser()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  return (
    <>
      <header className="header">
        <h1>Story Map</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/stories">Stories</Link>
        <br />
        <Link to="/add">Add A Story</Link>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<Story />} />
          <Route path="/add" element={<AddStory />} />
        </Routes>
      </section>
    </>
  )
}

export default App
