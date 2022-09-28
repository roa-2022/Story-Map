import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import AddStory from './AddStory'
import Home from './Home'
import Nav from './Nav'
import Register from './Register'
import Stories from './Stories'
import Story from './Story'
import UpdateStory from './UpdateStory'
import StoriesMapView from './StoriesMapView'
import SavedStories from './SavedStories'

import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { fetchGetRegions } from '../actions/regions'
import { fetchStories } from '../actions/stories'
import { getUser } from '../apis/users'
import { useCacheUser } from '../auth0-utils'

function App() {

  useCacheUser()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearLoggedInUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUser(token))
        .then((userInDb) => {
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : navigate('/register')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  useEffect(() => {
    dispatch(fetchGetRegions())
    dispatch(fetchStories())
  }, [])

  return (
    <>
      <div>
        <header className="header">
          <Nav />
        </header>
      </div>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<Story />} />
          <Route path="/stories/:id/update" element={<UpdateStory />} />
          <Route path="/add" element={<AddStory />} />
          <Route path="/map" element={<StoriesMapView />} />
          <Route path="/saved" element={<SavedStories />} />
        </Routes>
      </section>
    </>
  )
}

export default App
