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
    case UPDATE_STORIES: {
      return state.map((story) => {
        const updated = payload.findLast(
          (updatedItem) => updatedItem.id == story.id
        )
        return updated ? updated : story
      })
    }
    default:
      return state
  }
}

export default reducer
