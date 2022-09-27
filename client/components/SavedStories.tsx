import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Map from './Map'

import { fetchSavedStories } from '../actions/addStory'


function Story() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const savedStories = useSelector((state: any) => state.savedStories)
  const token = useSelector((state: any) => state.user.token)

  useEffect(() => {
    dispatch(fetchSavedStories(savedStories, token))
    console.log(savedStories);
}, [])

return (
    <>
      {savedStories.map((story) => {
        return (
            <>
            <h2>{story?.title}</h2><br></br>
            <p>Written By {story?.author}</p><br></br><br></br>
            </>
            )
      })}
     
    </>
  )
}

export default Story
