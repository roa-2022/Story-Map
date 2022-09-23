import { addStory, search, searchMaori } from '../apis/search'

export const SEARCH_REGION = 'SEARCH_REGION'
export const ADD_SAVED = 'ADD_SAVED'

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

export function fetchAddedStory (data) {
  return (dispatch) => {
    return addStory(data)
    .then((result) => {dispatch(addNewStory(result))
      console.log('actions', data)
      console.log('actions', result)
      })
  }
}

export function fetchSearchedRegions (data) {
    return (dispatch) => {
      return search(data)
      .then((result) => {dispatch(searchRegion(result))
      console.log('English actions', result)})
    }
}

export function fetchMaoriSearchedRegions (data) {
  return (dispatch) => {
    return searchMaori(data)
    .then((result) => {dispatch(searchRegion(result))
    console.log('Maori actions', result)})
  }
}