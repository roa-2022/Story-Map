import { GET_REGIONS } from '../actions/regions'



const reducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_REGIONS:
      return payload
    default:
      return state
  }
}

export default reducer