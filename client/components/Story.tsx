import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneStory } from '../actions/index'
import Stories from './Stories'


function Story() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const storyArr = useSelector((state: any) => state.stories)
  const story = storyArr[0]

  useEffect(() => {
    dispatch(fetchOneStory(id))
  }, [])

  return (
    <>
      <div>
        <Link to={`/stories`} key={story.id}><h2>{story?.title}</h2></Link>
        <p>{story?.maori_name} aka {story?.eng_name}</p>
        <p>{story?.author}</p>
        <p>{story?.story_text}</p>
        <img src={story?.photo_url} />
      </div>
    </>
  )
}

export default Story

