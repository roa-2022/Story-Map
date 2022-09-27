import { SET_FAVORITE, ADD_FAVORITE, DEL_FAVORITE } from "../actions/savedStories"

const initialState = []

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
    case SET_FAVORITE:
        return payload
    case ADD_FAVORITE:
        let story = state.find((story => story.story_id == payload.map((v)=> v.story_id)))
        if (story) {
          return [...state]
        } else {
          return [...state, payload]
        }

    case DEL_FAVORITE:
        return state.filter((usersStories) => usersStories.id != payload)
    default:
      return state
  }
}

export default reducer
