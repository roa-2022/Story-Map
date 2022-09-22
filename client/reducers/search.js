import { SEARCH_REGION } from '../actions/search'

const initialState = [{eng_name: "Northland"}]

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SEARCH_REGION:
            return payload
        default:
            return state
    }
}


export default reducer