import { getStories } from '../apis/stories'

export const SET_STORIES = 'SET_STORIES'

export function setStories(stories) {
  return {
    type: SET_STORIES,
    payload: stories,
  }
}

export function fetchStories() {
  return (dispatch) => {
    return getStories().then((stories) => {
      dispatch(setStories(stories))
    })
  }
}
