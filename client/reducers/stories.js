import { SET_STORY, SET_STORIES, ADD_STORY } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_STORY:
      return payload
    case SET_STORIES:
      return payload
    case ADD_STORY:
      return [payload,...state]
    default:
      return state
  }
}

export default reducer
