import { SET_STORY, SET_STORIES, SET_SAVED } from '../actions/stories'
import { ADD_STORY } from '../actions/addStory'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_STORY:
      return payload
    case SET_STORIES:
      return payload
    case ADD_STORY:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
