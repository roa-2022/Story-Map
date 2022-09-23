import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStories } from '../actions/index'
import { Link } from 'react-router-dom'
import Search from './Search'



function Stories() {
  const dispatch = useDispatch()
  const stories = useSelector((state: any) => state.stories)
  useEffect(() => {
    dispatch(fetchStories())
  }, [])
  return (
    <>
      <Search />
      <div>
        <h3>Whenua O Korero</h3>
          <ul>
            {stories.map((story) => {
              return <Link to={`/stories/${story.id}`} key={story.id}><li>{story.title}{story?.maori_name}</li></Link>
            }
            )}
          </ul>
      </div>
    </>
  )}

export default Stories
