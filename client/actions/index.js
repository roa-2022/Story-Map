import { getOneStory, getStories } from '../apis/stories'

export const SET_STORY = 'SET_STORY'
export const SET_STORIES = 'SET_STORIES'

export function setStory(story) {
  return {
    type: SET_STORY,
    payload: story,
  }
}

export function fetchOneStory(id) {
  return (dispatch) => {
    return getOneStory(id).then((story) => {
      dispatch(setStory(story))
    })
  }
}

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
