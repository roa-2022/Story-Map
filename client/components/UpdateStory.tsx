import React, { useState } from 'react'
import Map from './Map'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateStory } from '../apis/story'

function UpdateStory() {
  const navigate = useNavigate()
  const token = useSelector((store: any) => store.user.token)
  const allRegions = useSelector((store: any) => store.regions)
  const stories = useSelector((store: any) => store.stories)
  const story = stories[0]
  const [dataForm, setDataForm] = useState(story)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('token', token)
    console.log('dataForm', dataForm)
    updateStory(dataForm, token)
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
                <label htmlFor="region_id">region </label>
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
                  <option value={allRegions[4]?.id}>Auckland</option>
                  <option value={allRegions[5]?.id}>Waikato</option>
                  <option value={allRegions[6]?.id}>Bay of Plenty</option>
                  <option value={allRegions[7]?.id}>Gisborne</option>
                  <option value={allRegions[8]?.id}>Hawke's Bay</option>
                  <option value={allRegions[9]?.id}>Taranaki</option>
                  <option value={allRegions[10]?.id}>Manawatū-Whanganui</option>
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