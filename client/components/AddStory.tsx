import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddStory() {
  const [dataForm, setDataForm] = useState(null)

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // dispatch(fetchAddVenue(dataForm))
  }

  const handleChange = (e) => {
    // setDataForm({
    //   ...dataForm,
    //   [e.target.name]: e.target.value,
    // })
  }
  return (
    <>
      <section className="add-container">
        <div className="add-box"></div>
        <div className="add-box">
          <div className="add-box-text">
            <h2>Add your Story</h2>
          </div>
          <div className="form-container">
            <form className="grid-stacked" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="type"> Type of Venue </label>
                <select name="type" id="type" onChange={handleChange}>
                  <option value="DEFAULT">Select an Option</option>
                  <option defaultValue="">New Zealand</option>
                  <option value="">North Island</option>
                  <option value="">South Island</option>
                  <option value="">Northland</option>
                  <option value="">Auckland</option>
                  <option value="">Waikato</option>
                  <option value="">Bay of Plenty</option>
                  <option value="">Gisborne</option>
                  <option value="">Hawke's Bay</option>
                  <option value="">Taranaki</option>
                  <option value="">Manawatū-Whanganui</option>
                  <option value="">Wellington</option>
                  <option value="">Tasman</option>
                  <option value="">Nelson</option>
                  <option value="">Marlborough</option>
                  <option value="">West Coast</option>
                  <option value="">Canterbury</option>
                  <option value="">Otago</option>
                  <option value="">Southland</option>
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
                <label htmlFor="synopsis">Website link: </label>
                <input type="text" name="synopsis" onChange={handleChange} />
              </div>
              <div>
                
              </div>
              <div>
                <button className="btn-add-venue">Add</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddStory
