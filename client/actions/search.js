import { search } from '../apis/search'

export const SEARCH_REGION = 'SEARCH_REGION'

export function searchRegion (region) {
    return {
      type: SEARCH_REGION,
      payload: region
    }
}

export function fetchSearchedRegions (data) {
    return (dispatch) => {
      return search(data)
      .then((res) => dispatch(searchRegion(res)))
    }
  }