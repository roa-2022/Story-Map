import React, { useState, useEffect } from 'react'
import Pin from './Pin'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStories } from '../actions/index'

import InteractiveMap, { 
  Marker, 
  Popup,   
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl } from 'react-map-gl'

import {API_KEY} from '../../secrets'



function Map() {
  const [popupInfo, setPopupInfo] = useState(null)

  const dispatch = useDispatch()
  const stories = useSelector((state: any) => state.stories)
  
  useEffect(() => {
    dispatch(fetchStories())
  }, [])

  const [viewState, setViewState] = React.useState({
    longitude: 174.7740,
    latitude: -41.2969,
    zoom: 4.75
  })

  const handleClick = (e, story) => {
    e.originalEvent.stopPropagation()
    console.log('click!')
    console.log(story)
    console.log(viewState)

    setPopupInfo(story)
  }

  return (
    <>
      <InteractiveMap
        initialViewState={{ ...viewState }}
        style={{width: '100vw', height: '75vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={API_KEY}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

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
