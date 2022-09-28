import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUpdateStories } from '../actions/stories'

import MapForPlacingMarker from './MapForPlacingMarker'

import Map from './Map'

function UpdateStory() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((store: any) => store.user.token)
  const allRegions = useSelector((store: any) => store.regions)
  const stories = useSelector((store: any) => store.stories)
  const story = stories[0]
  const [dataForm, setDataForm] = useState(story)

  const viewCoordinates = useSelector((state: any) => state.map)

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
      latitude: viewCoordinates.latitude,
      longitude: viewCoordinates.longitude,
    })
  }
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="form-container box">
          {story && (
            <form className="grid-stacked" onSubmit={handleSubmit}>
              <h1 className="title">
                <i className="fa-regular fa-pen-to-square mx-2"></i>Edit your
                Story
              </h1>
              <div className="input-group">
                <label className="label" htmlFor="author">
                  Author:{' '}
                </label>
                <input
                className="input input-width"
                  type="text"
                  name="author"
                  defaultValue={story.author}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label className="label mt-4" htmlFor="title">
                  Title:{' '}
                </label>
                <input
                className="input input-width"
                  type="text"
                  name="title"
                  defaultValue={story.title}
                  onChange={handleChange}
                />
              </div>
              <div className="control">
                <label className="label" htmlFor="synopsis">
                  Synopsis:{' '}
                </label>
                <textarea
                  className="textarea"
                  name="synopsis"
                  defaultValue={story.synopsis}
                  onChange={handleChange}
                  rows={3}
                  cols={50}
                />
                
              </div>
              <div className="field">
                <label className="label mt-2" htmlFor="story_text">
                  Type your story:{' '}
                </label>
                <br />
                <textarea
                  className="textarea"
                  name="story_text"
                  defaultValue={story.story_text}
                  onChange={handleChange}
                  placeholder="Write your story here"
                  rows={5}
                  cols={50}
                />
              </div>
              <div>
                <label className="label" htmlFor="latitude">
                  Latitude:
                </label>
                <input
                  className="input "
                  type="text "
                  name="latitude"
                  value={viewCoordinates.latitude}
                  readOnly
                />
                <label className="label mt-2" htmlFor="longitude">
                  Longitude:{' '}
                </label>
                <input
                  className="input "
                  type="text"
                  name="longitude"
                  value={viewCoordinates.longitude}
                  readOnly
                />
              </div>
              <div className="map-section">
                <p className="map-title is-size-6 px-1 mt-5 mb-2 has-text-weight-medium">
                  Place your marker on the Map and press the Add{' '}
                  <i className="fa-solid fa-location-dot mx-2"></i> button
                </p>
                <MapForPlacingMarker />
                <div className="map-container"></div>
              </div>
              <div>
                <button className="button  is-success is-medium mt-2">Update</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default UpdateStory
