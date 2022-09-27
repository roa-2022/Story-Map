import { ADD_SAVED, SET_SAVED, DEL_SAVED } from '../actions/savedStories'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SAVED:
      console.log('reducer', payload)
      return payload
    case ADD_SAVED:
      // eslint-disable-next-line no-case-declarations
      let story = state.find(
        (story) => story.story_id == payload.map((v) => v.story_id)
      )
      if (story) {
        return [...state]
      } else {
        return [...state, payload]
      }

    case DEL_SAVED:
      return state.filter((usersStories) => usersStories.id != payload)
    default:
      return state
  }
}

export default reducer
