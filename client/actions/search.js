import { search, searchMaori } from '../apis/search'

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
      .then((result) => {dispatch(searchRegion(result))
      })
    }
}

export function fetchMaoriSearchedRegions (data) {
  return (dispatch) => {
    return searchMaori(data)
    .then((result) => {dispatch(searchRegion(result))
  })
  }
}