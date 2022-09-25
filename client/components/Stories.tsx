import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStories } from '../actions/index'
import { Link } from 'react-router-dom'
import Search from './Search'
import Story from './Story'

function Stories() {
  const dispatch = useDispatch()
  const stories = useSelector((state: any) => state.stories)
  useEffect(() => {
    dispatch(fetchStories())
  }, [])
  return (
    <>
      <Search />

      <div className="container ">
        {stories.map((story) => {
          return (
            <div className="card ">
              <div className="card-image">
                <figure className="image is-128x128'">
                  <img className='' src={story.photo_url} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <Link to={`/stories/${story.id}`} key={story.id}>
                      <p className="title is-4">{story.title}</p>
                    </Link>
                    <p className="subtitle is-6">
                      {' '}
                      <b>Submited by: </b>
                      {story.author}
                    </p>
                  </div>
                </div>

                <div className="content">
                  {story.synopsis}
                  <br />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Stories