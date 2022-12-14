import {
  SET_STORY,
  SET_STORIES,
  ADD_STORY,
  UPDATE_STORIES,
} from '../actions/stories'

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
    case UPDATE_STORIES:
      return [...state].map((story) =>
        story.id == payload.id ? (story = payload) : story
      )
    default:
      return state
  }
}

export default reducer
