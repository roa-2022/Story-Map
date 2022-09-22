import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {fetchAddStory} from '../actions/addStory'




function AddStory() {
  const dispatch = useDispatch()

  
  const [dataForm, setDataForm] = useState({})

  const allRegions = useSelector((store: any) => store.regions)
  console.log(allRegions[0]?.id)
  


  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(fetchAddStory(dataForm))
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
          <h2>Add your Story</h2>
        </div>
        <div className="form-container">
          <form className="grid-stacked" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="region_id">region </label>
              <select name="region_id" id="type" onChange={handleChange}>
                <option value="DEFAULT">Select an Option</option>
                <option value={allRegions[0]?.id}>New Zealand</option>
                <option value={allRegions[1]?.id}>North Island</option>
                <option value={allRegions[2]?.id}>South Island</option>
                <option value={allRegions[3]?.id}>Northland</option>
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
              <input type="text" name="author" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="title">Title: </label>
              <input type="text" name="title" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="synopsis">Synopsis: </label>
              <input type="text" name="synopsis" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="story_text">Type your story: </label>
              <br/>
              <textarea
                id="story_text"
                onChange={handleChange}
                placeholder="Write your story here"             
                rows={10}
                cols={50}             
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
