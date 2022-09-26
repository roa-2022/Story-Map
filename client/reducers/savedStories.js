import { SET_SAVED } from "../actions/stories"
import { ADD_SAVED } from "../actions/addStory"

const initialState = []

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
    case SET_SAVED:
        return payload
    case ADD_SAVED:
        return payload
    default:
        return state
    }
}

export default reducer