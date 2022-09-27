import React, { useState } from 'react'
import MapForPlacingMarker from './MapForPlacingMarker'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchAddStory } from '../actions/addStory'

function AddStory() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((store: any) => store.user.token)
  const allRegions = useSelector((store: any) => store.regions)
  const viewCoordinates = useSelector((state: any) => state.map)

  const [dataForm, setDataForm] = useState({})

  const handleSubmit = async (e) => {
    console.log(dataForm)
    e.preventDefault()
    setDataForm({
      ...dataForm,
      latitude: viewCoordinates.latitude,
      longitude: viewCoordinates.longitude,
    })
    await dispatch(fetchAddStory(dataForm, token))
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
    <section className="add-container">
      <div className="add-box">
        <div className="add-box-text"></div>
        <div className="form-container">
          <form
            style={{
              width: '40%',
              margin: 'auto',
              textAlign: 'center',
              borderRadius: '20%',
              backgroundColor: 'rgb(252, 245, 229)',
              padding: '20px',
              marginTop: '30px',
            }}
            className="grid-stacked"
            onSubmit={handleSubmit}
          >
            <h1>Add your Story</h1>
            <div className="field">
              <label htmlFor="region_id" className="label">
                Region
              </label>
              <div className="control">
                <div className="select">
                  <select name="region_id" id="type" onChange={handleChange}>
                    <option value="DEFAULT">Select an Option</option>
                    <option value={allRegions[0]?.id}>
                      New Zealand | Aotearoa
                    </option>
                    <option value={allRegions[1]?.id}>
                      North Island | Te Ika-a-Māui
                    </option>
                    <option value={allRegions[2]?.id}>
                      South Island | Te Waipounamu
                    </option>
                    <option value={allRegions[3]?.id}>
                      Northland | Te Tai Tokerau{' '}
                    </option>
                    <option value={allRegions[4]?.id}>Auckland | </option>
                    <option value={allRegions[5]?.id}>Waikato</option>
                    <option value={allRegions[6]?.id}>Bay of Plenty</option>
                    <option value={allRegions[7]?.id}>Gisborne</option>
                    <option value={allRegions[8]?.id}>Hawke's Bay</option>
                    <option value={allRegions[9]?.id}>Taranaki</option>
                    <option value={allRegions[10]?.id}>
                      Manawatū-Whanganui
                    </option>
                    <option value={allRegions[11]?.id}>Wellington</option>
                    <option value={allRegions[12]?.id}>Tasman</option>
                    <option value={allRegions[13]?.id}>Nelson</option>
                    <option value={allRegions[14]?.id}>Marlborough</option>
                    <option value={allRegions[15]?.id}>West Coast</option>
                    <option value={allRegions[16]?.id}>Canterbury</option>
                    <option value={allRegions[17]?.id}>Otago</option>
                    <option value={allRegions[18]?.id}>Southland</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="author" className="label">
                Author
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="author"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="title" className="label">
                Title
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <div>
              <label htmlFor="title">Title: </label>
              <input type="text" name="title" onChange={handleChange} />
            </div> */}
            <div className="field">
              <label htmlFor="synopsis" className="label">
                Synopsis:{' '}
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="synopsis"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="story_text" className="label">
                Type Story:{' '}
              </label>
              <div className="control">
                <br />
                <textarea
                  name="story_text"
                  className="text-area"
                  onChange={handleChange}
                  placeholder="Write your story here"
                  rows={10}
                  cols={70}
                />
              </div>
            </div>
            <MapForPlacingMarker />
            <div>
              <label htmlFor="latitude">Latitude: </label>
              <input
                type="text"
                name="latitude"
                value={viewCoordinates.latitude}
                readOnly
              />
              <label htmlFor="longitude">Longitude: </label>
              <input
                type="text"
                name="longitude"
                value={viewCoordinates.longitude}
                readOnly
              />
            </div>
            <div>
              <button className="btn-add-venue">Add</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddStory
