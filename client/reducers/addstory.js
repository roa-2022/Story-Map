import { ADD_SAVED } from '../actions/search'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_SAVED:
      return payload
    default:
      return state
  }
}

export default reducer
