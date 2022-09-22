import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneStory } from '../actions/index'

function Story() {
  const { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()
  const storyArr = useSelector((state: any) => state.stories)
  const story = storyArr[0]
  console.log(story?.photo_url)
  useEffect(() => {
    dispatch(fetchOneStory(id))
  }, [])

  return (
    <>
      <div>
        <h2>{story?.title}</h2>
        <img src={story?.photo_url} />
        <p>{story?.author}</p>
        <p>{story?.story_text}</p>
        <p>{story?.eng_name}</p>
        <p>{story?.maori_name}</p>
      </div>
    </>
  )
}

export default Story
