import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Map from './Map'

import { fetchSavedStories } from '../actions/stories'


function Story() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const savedStories = useSelector((state: any) => state.savedStories)
  const token = useSelector((state: any) => state.user.token)

  useEffect(() => {
    dispatch(fetchSavedStories(id, token))
  }, [])

  return (
    <>
     <h2>Your Saved Stories</h2>
      {savedStories.map((story) => {
        return (
            story?.title
            )
      })}
     
    </>
  )
}

export default Story
