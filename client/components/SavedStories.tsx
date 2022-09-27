import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Map from './Map'

import { fetchFavorites, dispatchDeletedFavorites } from '../actions/savedStories'


function Story() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const savedStories = useSelector((state: any) => state.savedStories)
  const token = useSelector((state: any) => state.user.token)

  useEffect(() => {
    dispatch(fetchFavorites(savedStories, token))
    console.log(savedStories);
}, [])

const handleDelete = (id) => {
  dispatch(dispatchDeletedFavorites(id))
}


return (
    <>     
     <div className="container">
        <div className="cards-container">
       
              {savedStories.map((story) => {
                return (
                  <>
                    <div className="column is-3">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img src={story.photo_url} alt="Story image" />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-left"></div>

                            <div className="media-content">
                              <p className="title is-5">{story.title}</p>

                              <p className="subtitle is-6">
                                Sent by: {story.author}
                              </p>
                            </div>
                          </div>
                          <div className="content">
                            <div className="media-content">
                              <p className="is-success">{story.synopsis}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <footer className="card-footer">
                            <p className="card-footer-item">
                              <button onClick = {() => handleDelete(story.id)}>
                                Delete
                              </button>
                            </p>
                            
                          </footer>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
          </div>
        </div>
    </>
  )
}

export default Story