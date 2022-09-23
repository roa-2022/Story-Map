import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchedRegions, fetchMaoriSearchedRegions, fetchAddedStory } from '../actions/search'
// const fs = require('fs')
export default function search() {
    
    const [region, setRegion ] = useState('') 
    const [maoriRegion, setMaoriRegion ] = useState('') 
    const dispatch = useDispatch()
    const search = useSelector((state:any) => state.search)

    const [files, setFiles]:any = useState([])
    const [imageURLs, setImageURLs]: any = useState([])

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

  return (
    <>
        <div>
            <label>Filter By Region(English)
            <input onChange = {(e) => {setRegion(e.target.value)}}/>
            </label>
            <button onClick={() => dispatch(fetchSearchedRegions(region))}>Click</button>
            {search?.map(story => {
                return <h3>{story?.story_id}</h3>
                
            })}
        </div>
        <div>
            <label>Filter By Region(Maori)
            <input onChange = {(e) => {setMaoriRegion(e.target.value)}}/>
            </label>
            <button onClick={() => dispatch(fetchMaoriSearchedRegions(maoriRegion))}>Click</button>
            {search?.map(story => {
                return <h3>{story?.story_id}</h3>
                
            })}
        </div>

        <div>
            <input name = "file" type= "file" onChange = {fileSelector} id = "img" accept= "image/*" ></input>
            <button onClick={fileUploader}>Upload</button>
            {/* {imageURLs?.map(imageURL => {
                return <img src={imageURL}/>
            })} */}
            <img src={imageURLs}/>
        </div>
    
    </>
  )
}



