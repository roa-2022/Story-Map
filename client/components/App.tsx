import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import Home from './Home'
import Stories from './Stories'
import Story from './Story'
import AddStory from './AddStory'
import Register from './Register'
import Nav from './Nav'
import UpdateStory from './UpdateStory'
import StoriesMapView from './StoriesMapView'

import { useAuth0 } from '@auth0/auth0-react'
import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'

import { getUser } from '../apis/users'

import  { fetchStories } from '../actions/index'
import { fetchGetRegions} from '../actions/regions'
import Search from './Search'

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
          <Route path="/stories" element={<Stories/>} />
          <Route path="/stories/:id" element={<Story />} />
          <Route path="/stories/:id/update" element={<UpdateStory />} />
          <Route path="/add" element={<AddStory />} />
          <Route path="/map" element={<StoriesMapView />} />
        </Routes>
      </section>
    </>
  )
}

export default App
