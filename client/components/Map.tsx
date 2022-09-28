import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateViewCoordinates } from '../actions/map'
import { Link } from 'react-router-dom'

import InteractiveMap, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl'

import Pin from './Pin'

import { API_KEY } from '../../secrets'

function Map() {
  const [popupInfo, setPopupInfo] = useState(null)

  const dispatch = useDispatch()
  const stories = useSelector((state: any) => state.stories)
  const viewCoordinates = useSelector((state: any) => state.map)

  const handleClick = (e, story) => {
    e.originalEvent.stopPropagation()


    setPopupInfo(story)
  }

  return (
    <>
      <InteractiveMap
        initialViewState={{ ...viewCoordinates }}
        style={{ height: '75vh' }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        onMove={(evt) => {
          const payload = evt.viewState
          dispatch(updateViewCoordinates(payload))
        }}
        mapboxAccessToken={API_KEY}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {stories.map((story, i) => {
          return (
            <Marker
              key={`${story.title}${i}`}
              longitude={story.longitude}
              latitude={story.latitude}
              onClick={(e) => {
                handleClick(e, story)
              }}
            >
              <Pin />
            </Marker>
          )
        })}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
            style={{ width: '70vw', height: '40vh' }}
          >
            <div style= {{overflowWrap : "anywhere", }}>
              <p>{popupInfo.title}</p>
              <Link to={`/stories/${popupInfo.id}`}>More Information</Link>
            </div>
            <img width="100%" src={popupInfo.photo_url} />
          </Popup>
        )}
      </InteractiveMap>
    </>
  )
}

export default Map
