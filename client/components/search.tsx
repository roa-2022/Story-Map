import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchedRegions, fetchMaoriSearchedRegions } from '../actions/search'

export default function search() {

    const [region, setRegion ] = useState('') 
    const [maoriRegion, setMaoriRegion ] = useState('') 
    const dispatch = useDispatch()

    const func = () => {
        dispatch(fetchSearchedRegions(region))
        console.log(region);
    }
    
    const maoriFunc = () => {
        dispatch(fetchMaoriSearchedRegions(region))
        console.log(region);
        
    }

  return (
    <>
      <div>
        <label>Filter By Region(English)
        <input onChange = {(e) => {setRegion(e.target.value)}}/>
        </label>
        <button onClick={func}>Click</button>
    </div>
         <div>
         <label>Filter By Region(Maori)
         <input onChange = {(e) => {setMaoriRegion(e.target.value)}}/>
         </label>
         <button onClick={maoriFunc}>Click</button>
     </div>
    </>
  )
}



