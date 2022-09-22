import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchedRegions } from '../actions/search'

export default function search() {

    const [region, setRegion ] = useState('') 
    const dispatch = useDispatch()

  return (
      <div>
        <label>Filter By Region
        <input onChange = {(e) => {setRegion(e.target.value)}}/>
        </label>
        <button onClick={() => dispatch(fetchSearchedRegions(region))}></button>
    </div>
  )
}



