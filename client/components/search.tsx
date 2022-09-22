import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchedRegions, fetchMaoriSearchedRegions } from '../actions/search'

export default function search() {
    
    const [region, setRegion ] = useState('') 
    const [maoriRegion, setMaoriRegion ] = useState('') 
    const dispatch = useDispatch()
    const search = useSelector((state: any) => state.search)
    const [file, setFile] = useState(null)
    const fileSelector = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0])
        console.log(file);
    }

    const submitHandler = () => {
        dispatch(fetchSearchedRegions(region))
    }
    
    const fileUploader = () => {

    }

  return (
    <>
      <div>
        <label>Filter By Region(English)
        <input onChange = {(e) => {setRegion(e.target.value)}}/>
        </label>
        <button onClick={() => submitHandler()}>Click</button>
        {search?.map(story => {
            return <h3>{story?.story_id}</h3>
            
        })}
    </div>
         <div>
         <label>Filter By Region(Maori)
         <input onChange = {(e) => {setMaoriRegion(e.target.value)}}/>
         </label>
         <button onClick={() => dispatch(fetchMaoriSearchedRegions(maoriRegion))}>Click</button>
         <h3>{search?.region_id}</h3>
     </div>
     <input type= "file" onChange = {fileSelector} id = "img" accept= "image/png, image/jpg" ></input>
        <button onClick={fileUploader}>Upload</button>
    <div>
    </div>
    </>
  )
}



