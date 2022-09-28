import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchOneStory } from '../actions/stories'
import { deleteStoryAPI } from '../apis/story'
import { fetchAddSavedStory, fetchSavedStories } from '../actions/savedStories'

function Story() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const storyArr = useSelector((state: any) => state.stories)
  const savedStories = useSelector((state: any) => state.savedStories)
  const story = storyArr[0]
  const token = useSelector((state: any) => state.user.token)
  const user = useSelector((state: any) => state.user.auth0_id)

  const handleDelete = () => {
    deleteStoryAPI(id, token)
    navigate('/stories')
  }
  const addSaved = () => {
    dispatch(fetchAddSavedStory(story, token))
    dispatch(fetchSavedStories(savedStories))
    navigate('/stories')
  }

  useEffect(() => {
    dispatch(fetchOneStory(id))
  }, [story])

  return (
    <>
      <section className="story-section ">
        {story && (
          <div className="story-container">
            <div className="">
              <p className="fix-pad story-title">
                <b>{story.title}</b>
              </p>
            </div>
            <p className="fix-pad-tb">
              <b>Region: </b>
              {story.name}
            </p>
            <p className="fix-pad-tb">
              <b>Sent by: </b>
              {story.author}
            </p>
            <div className=" img-txt-container ">
              <figure className=" ">
                <img className="story-img fix-pad" src={story.photo_url} />
              </figure>

              <p className=" story-txt fix-pad">{story.story_text}</p>
            </div>
            <div className="btns-container">
              <button
                className="button is-primary is-light mx-2 "
                onClick={addSaved}
              >
                <i className="fa-regular fa-heart mx-3"></i>
              </button>
              {user == story.auth0_id && (
              <button
                className="button is-danger is-light mx-2 "
                onClick={handleDelete}
              >
                <i className="fa-regular fa-trash-can mx-3"></i>
              </button>
                )}
                {user == story.auth0_id && (
              <button
                className="button is-info is-light mx-2"
                onClick={() => navigate('/stories/{story.id}/update')}
              >
                <i className="fa-regular fa-pen-to-square mx-3"></i>
              </button>
               )}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Story
