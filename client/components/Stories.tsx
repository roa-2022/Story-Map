import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStories } from '../actions/index'
import { Link } from 'react-router-dom'

import Search from './Search'

function Stories() {
  const dispatch = useDispatch()
  const stories = useSelector((state: any) => state.stories)
  console.log(stories)
  useEffect(() => {
    dispatch(fetchStories())
  }, [])
  return (
    <>
      <Search />
      <div>
        <h3>Whenua O Korero</h3>
        {stories.map((story) => {
          return (
            <div key={story.id}>
              <p>{story?.title}</p>
              <p>{story?.location}</p>
              <p>{story?.synopsis}</p>
              <Link to={`/stories/${story.id}`}>
                <button>More Infor</button>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Stories
