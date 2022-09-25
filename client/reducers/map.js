import { UPDATE_VIEW_COORDINATES } from '../actions/map'

const initialState = {
  longitude: 174.7740,
  latitude: -41.2969,
  zoom: 4.75
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_VIEW_COORDINATES:
      return payload
    default:
      return state
  }
}

export default reducer