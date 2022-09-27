import { ADD_SAVED, SET_SAVED } from "../actions/addStory"

const initialState = []

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
    case SET_SAVED:
        return payload
    case ADD_SAVED:
        return [...state, payload[payload.length-1]]
    default:
        return state
    }
}

export default reducer