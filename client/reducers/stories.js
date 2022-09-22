import { SET_STORIES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_STORIES:
      return payload
    default:
      return state
  }
}

export default reducer
