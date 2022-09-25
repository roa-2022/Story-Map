import React, { useState, useEffect } from 'react'
import Pin from './Pin'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStories } from '../actions/index'

import InteractiveMap, { Marker, Popup } from 'react-map-gl'

import {API_KEY} from '../../secrets'



function Map() {
  const [popupInfo, setPopupInfo] = useState(null)

  const dispatch = useDispatch()
  const stories = useSelector((state: any) => state.stories)
  
  useEffect(() => {
    dispatch(fetchStories())
  }, [])

  const initialViewState = {
    longitude: 174.7740,
    latitude: -41.2969,
    zoom: 4.75
  } 

  const handleClick = (e, story) => {
    e.originalEvent.stopPropagation()
    console.log('click!')
    console.log(story)

    setPopupInfo(story)
  }

  return (
    <>
      <InteractiveMap
        initialViewState={{ ...initialViewState }}
        style={{width: '100vw', height: '75vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={API_KEY}
      >
        {
          stories.map((story, i) => {
            return  <Marker
              key={`${story.title}${i}`}
              longitude={story.longitude}
              latitude={story.latitude}
              onClick={(e) => {
                handleClick(e, story)
              }}
            >
              <Pin/>
            </Marker>
          })
        }

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.title}
              <a
                target="_new"
                href={`http://en.wikipedia.org/`}
              >
                Wikipedia
              </a>
            </div>
            <img width="100%" src={popupInfo.photo_url} />
          </Popup>
        )}

      </InteractiveMap>
    </>
  )}

export default Map
