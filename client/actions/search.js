import { searchAPI } from '../apis/search'

export const SEARCH_REGION = 'SEARCH_REGION'

export function searchRegion (region) {
  return {
    type: SEARCH_REGION,
    payload: region
  }
}

export function fetchSearchedRegions (data) {
  return async (dispatch) => {
    try {
      const result = await searchAPI(data)
      dispatch(searchRegion(result))
    } catch (err) {
      console.error(err.message)
    }
  }
}

