
import { MAORI_SEARCH } from '../actions/search'

const initialState = []

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case MAORI_SEARCH:
            return payload
        default:
            return state
    }
}


export default reducer