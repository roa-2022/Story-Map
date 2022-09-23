import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchedRegions, fetchMaoriSearchedRegions, fetchAddedStory } from '../actions/search'
// const fs = require('fs')
export default function search() {
    
    const [region, setRegion ] = useState('') 
    const [maoriRegion, setMaoriRegion ] = useState('') 
    const dispatch = useDispatch()
    const search = useSelector((state:any) => state.search)
    const maoriSearch = useSelector((state:any) => state.reducerReo)

    const [files, setFiles]:any = useState([])
    const [imageURLs, setImageURLs]: any = useState([])
    const [toggle, setToggle]: any = useState(false)

    const fileSelector = (imageList) => {
        setFiles([...imageList.target.files])
    }
    
    
    const fileUploader = async () => {
        if(files.length < 1) return;
        const newImageUrls:any = []
        files.forEach(file => newImageUrls.push(URL.createObjectURL(file)))
        await setImageURLs(newImageUrls)
        console.log(newImageUrls)
    
        dispatch(fetchAddedStory(newImageUrls))
    }

    const changeHandlerEng = (e) => {
         setRegion(e.target.value)

    }
    const changeHandlerMao = (e) => {
         setMaoriRegion(e.target.value)

    }

    const clearFilter = () => {
        setMaoriRegion('')
        setRegion('')
        setToggle(false)
        
    }
  return (
    <>
        <div>
            <label>Filter By Region(English)
            <div className="input-group">
              <label htmlFor="region_id"></label>
              <select id="region-list" onChange = {changeHandlerEng}>
                <option>Select an Option</option>
                <option>New Zealand</option>
                <option>North Island</option>
                <option>South Island</option>
                <option>Northland</option>
                <option>Auckland</option>
                <option>Waikato</option>
                <option>Bay of Plenty</option>
                <option>Gisborne</option>
                <option>Hawke's Bay</option>
                <option>Taranaki</option>
                <option>Manawatū-Whanganui</option>
                <option>Wellington</option>
                <option>Tasman</option>
                <option>Nelson</option>
                <option>Marlborough</option>
                <option>West Coast</option>
                <option>Canterbury</option>
                <option>Otago</option>
                <option>Southland</option>
              </select>
            </div>
            </label>
            <button onClick={() => dispatch(fetchSearchedRegions(region)) && setToggle(true)}>Click</button>
            {region.length > 0 &&
            search?.map(story => {
                return (
                    <>
                    <h4>{story?.story_text}</h4>
                    </>
                )
            })}
        </div>
        <div>
            <label>Filter By Region(Maori)
            <div className="input-group">
              <label htmlFor="region_id"></label>
              <select id="region_id" onChange = {changeHandlerMao}>
                <option>Select an Option</option>
                <option>Aotearoa</option>
                <option>Te Ika-a-Māui</option>
                <option>Te Waipounamu</option>
                <option>Te Tai Tokerau</option>
                <option>Tāmaki-makau-rau</option>
                <option>Waikato</option>
                <option>Te Moana-a-Toi</option>
                <option>Te Tai Rāwhiti</option>
                <option>Te Matau-a-Māui</option>
                <option>Taranaki</option>
                <option>Manawatū-Whanganui</option>
                <option>Te Whanga-nui-a-Tara</option>
                <option>Te Tai-o-Aorere</option>
                <option>Whakatū</option>
                <option>Te Tauihu-o-te-waka</option>
                <option>Te Tai Poutini</option>
                <option>Waitaha</option>
                <option>Ōtākou</option>
                <option>Murihiku</option>
              </select>
            </div>
            </label>
            <button onClick={() => dispatch(fetchMaoriSearchedRegions(maoriRegion)) && setToggle(true) }>Click</button>
            {maoriRegion.length > 0 &&
            maoriSearch?.map(story => {
                return (
                    <>
                <h4>{story?.story_text}</h4>
                    </>
                ) 
                
            })}
        </div>
        {toggle == true &&
        <button onClick={clearFilter}>Clear Filters</button>}
        <div>
            <input name = "file" type= "file" onChange = {fileSelector} id = "img" accept= "image/*" ></input>
            <button onClick={fileUploader}>Upload</button>
            {/* {imageURLs?.map(imageURL => {
                return <img src={imageURL}/>
            })} */}
            <img className = 'uploaded-img' src={imageURLs}/>
        </div>
    
    </>
  )
}



