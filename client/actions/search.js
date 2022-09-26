import { addStory, search, searchMaori } from '../apis/search'

export const SEARCH_REGION = 'SEARCH_REGION'
export const ADD_SAVED = 'ADD_SAVED'
export const MAORI_SAVED = 'MAORI_SAVED'

export function searchRegion (region) {
    return {
      type: SEARCH_REGION,
      payload: region
    }
}
export function addNewStory (story) {
  return {
    type: ADD_SAVED,
    payload: story
  }
}

export function maoriRegion (region) {
  return {
    type: MAORI_SAVED,
    payload: region
  }
}

export function fetchAddedStory (data) {
  return async (dispatch) => {
    const result = await addStory(data)
    dispatch(addNewStory(result))
    console.log('actions', data)
    console.log('actions', result)
  }
}

export function fetchSearchedRegions (data) {
    return async (dispatch) => {
      const result = await search(data)
      dispatch(searchRegion(result))
    }
}

export function fetchMaoriSearchedRegions (data) {
  return async (dispatch) => {
    const result = await searchMaori(data)
    dispatch(maoriRegion(result))
    console.log(result)
  }
}