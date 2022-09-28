import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Map from './Map'

import { fetchOneStory } from '../actions/stories'
import { deleteStoryAPI } from '../apis/story'
import { fetchAddSavedStory } from '../actions/savedStories'
import { addSavedStoryAPI } from '../apis/savedStories'

function StoryCopy() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const storyArr = useSelector((state: any) => state.stories)
  const savedStories = useSelector((state: any) => state.savedStories)
  const story = storyArr[0]
  const token = useSelector((state: any) => state.user.token)

  const handleDelete = () => {
    deleteStoryAPI(id, token)
    navigate('/stories')
  }
  const addSaved = () => {
    dispatch(fetchAddSavedStory(story, token))
    console.log(savedStories)
  }

  useEffect(() => {
    dispatch(fetchOneStory(id))
  }, [])

  return (
    <>
      <section className="container search-view  ">
        <div className="container ">
          {story && (
            <div className="container story-text">
              <p className="story-title title p-2 mt-6"> The story of </p>
              <span className="subtitle p-4">{story.title}</span>

              <p className="p-4">
                <b>Region: </b>
                {story.maori_name} <b> - Aka - </b> {story.eng_name}
              </p>
              <p className="p-4">
                <b>Sent by: </b>
                {story.author}
              </p>
              <div className="container-grid-story  container is-flex ">
                <p className="box-txt p-4 ">{story.story_text}</p>
                <div className="img-btn-box">
                  <figure className="is-flex is-justify-content-center ">
                    <img className="story-img" src={story.photo_url} />
                  </figure>
                </div>
              </div>
              <div className="hero is-small">
                <div className="btns is-flex is-align-content-center is-justify-content-flex-start ">
                  <button
                    className="button is-primary is-light mr-2"
                    onClick={addSaved}
                  >
                    <i className="fa-regular fa-heart mx-3"></i>Save
                  </button>
                  <button
                    className="button is-danger is-light mr-2"
                    onClick={handleDelete}
                  >
                    <i className="fa-regular fa-trash-can mx-3"></i>
                    Delete
                  </button>
                  <button
                    className="button is-info is-light mr-2"
                    onClick={() => navigate('/stories/{story.id}/update')}
                  >
                    <i className="fa-regular fa-pen-to-square mx-3"></i>
                    Update
                  </button>
                </div>
                <span className="my-2"></span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default StoryCopy