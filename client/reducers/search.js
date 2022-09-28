import { SEARCH_REGION } from '../actions/search'

const reducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SEARCH_REGION:
            return payload
        default:
            return state
    }
}

export default reducer