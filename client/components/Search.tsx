import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchSearchedRegions,
  fetchMaoriSearchedRegions
} from '../actions/search'



export default function search() {
  const [region, setRegion] = useState('')
  const [maoriRegion, setMaoriRegion] = useState('')
  const dispatch = useDispatch()
  const search = useSelector((state: any) => state.search)
  const [file, setFile] = useState(null)
  const fileSelector = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
    console.log(file)
  }

  const submitHandler = () => {
    dispatch(fetchSearchedRegions(region))
  }

  const fileUploader = () => {}

  return (
    <>
      <section className="search-section  buttons are-small  ">
        <div className="columns m-5 ">
          <div className="is-7">

          <div className="field">
            <label className="label">Filter By Region</label>
            <div className="control">
              <input
                className="input"
                placeholder="English name"
                onChange={(e) => {
                  setRegion(e.target.value)
                }}
              />
              <button
                className="button is-light"
                onClick={() => submitHandler()}
              >
                search
              </button>
              {search?.map((story) => {
                return <h3>{story?.story_id}</h3>
              })}
            </div>
          </div>
          <div className="field">
            <label className="label">Filter By Region</label>
            <div className="control">
              <input
                className="input"
                placeholder="Maori name"
                onChange={(e) => {
                  setMaoriRegion(e.target.value)
                }}
              />
            </div>
            <button
              className="button is-light"
              onClick={() => dispatch(fetchMaoriSearchedRegions(maoriRegion))}
            >
              search
            </button>
            <h3>{search?.region_id}</h3>
          </div>
          <br />
          <input
            className="input"
            type="file"
            onChange={fileSelector}
            id="img"
            accept="image/png, image/jpg"
          ></input>
          <div>
            <button className="button is-light" onClick={fileUploader}>
              Upload
            </button>
          </div>
          <div className="column">
            
          </div>
          {/* <div className="column"></div> */}
          </div>
        </div>
      </section>
    </>
  )
}
