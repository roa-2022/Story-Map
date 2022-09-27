import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchOneStory } from '../actions/stories'
import { deleteStoryAPI } from '../apis/story'
import { fetchAddSavedStory } from '../actions/addStory'


function Story() {
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
      <section className="story-container ">
        <div className="">
          {story && (
            <div className="">

              <p className=""> The story of:  </p>
              <span className="">{story.title}</span>
             
              <p className="">
                <b>Region: </b>
                {story.name} 
              </p>
              <p className="">
                <b>Sent by: </b>
                {story.author}
              </p>
              <div className=" ">       
                <p className= " ">{story.story_text}</p>
                <div className="">
                  <figure className=' '>
                    <img className="" src={story.photo_url} />
                  </figure>
                </div>
              </div>
              <div className="btns">
                <button
                  className="button is-primary is-light mr-2"
                  onClick={addSaved}
                >
                  <i className="fa-regular fa-heart mx-3"></i>Save
                </button>
                <button
                  className="button is-danger is-light mr-5"
                  onClick={handleDelete}
                ><i className="fa-regular fa-trash-can mx-3"></i>
                  Delete
                </button>
                <button
                  className="button is-info is-light mr-2"
                  onClick={() => navigate('/stories/{story.id}/update')}
                ><i className="fa-regular fa-pen-to-square mx-3"></i>
                  Update
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Story
