
import { MAORI_SAVED } from '../actions/search'

const initialState = []

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case MAORI_SAVED:
            return payload
        default:
            return state
    }
}


export default reducer