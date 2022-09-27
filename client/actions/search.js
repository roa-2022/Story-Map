import { searchAPI, searchMaoriRegionAPI } from '../apis/search'

export const SEARCH_REGION = 'SEARCH_REGION'
export const MAORI_SEARCH = 'MAORI_SEARCH'

export function searchRegion (region) {
  return {
    type: SEARCH_REGION,
    payload: region
  }
}

export function searchMaoriRegion (region) {
  return {
    type: MAORI_SEARCH,
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

export function fetchSearchedMaoriRegions (data) {
  return async (dispatch) => {
    try {
    const result = await searchMaoriRegionAPI(data)
    dispatch(searchMaoriRegion(result))
  } catch (err) {
    console.error(err.message)
  }

}
}