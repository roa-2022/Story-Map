import { ADD_SAVED, SET_SAVED, DEL_SAVED } from "../actions/addStory"

const initialState = []

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
    case SET_SAVED:
        return payload
    case ADD_SAVED:
        let story = state.find((story) => story.story_id == payload.story_id)
        console.log(story)
        if (story) {
          return [...state]
        } else {
          return [...state, payload]
        }

        //look through all items in state
        //compare story_id to payload_id
        //return story
        //else return ..state, payload
    case DEL_SAVED:
        return state.filter((usersStories) => usersStories.id != payload)
    default:
        return state
    }
}


export default reducer