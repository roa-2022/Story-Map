import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUpdateStories } from '../actions/stories'

import Map from './Map'

function UpdateStory() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((store: any) => store.user.token)
  const allRegions = useSelector((store: any) => store.regions)
  const stories = useSelector((store: any) => store.stories)
  const story = stories[0]
  const [dataForm, setDataForm] = useState(story)

  const handleSubmit = (e) => {
    console.log(dataForm)
    e.preventDefault()
    dispatch(fetchUpdateStories(dataForm, token))
    navigate('/stories')
  }
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section className="add-container">
      <div className="add-box"></div>
      <div className="add-box">
        <div className="add-box-text">
          <h2>Update your Story</h2>
        </div>
        {story && (
          <div className="form-container">
            <form className="grid-stacked" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="author">Author: </label>
                <input
                  type="text"
                  name="author"
                  defaultValue={story.author}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={story.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="synopsis">Synopsis: </label>
                <input
                  type="text"
                  name="synopsis"
                  defaultValue={story.synopsis}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="story_text">Type your story: </label>
                <br />
                <textarea
                  name="story_text"
                  defaultValue={story.story_text}
                  onChange={handleChange}
                  placeholder="Write your story here"
                  rows={10}
                  cols={50}
                />
              </div>
              <div>
                <label htmlFor="latitude">Latitude: </label>
                <input
                  type="text"
                  name="latitude"
                  defaultValue={story.latitude}
                  onChange={handleChange}
                />
                <label htmlFor="longitude">Longitude: </label>
                <input
                  type="text"
                  name="longitude"
                  defaultValue={story.longitude}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="btn-add-venue">Update</button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Map />
    </section>
  )
}

export default UpdateStory