import { getOneStory, getStories } from '../apis/stories'
<<<<<<< HEAD
=======

export const SET_STORY = 'SET_STORY'

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
>>>>>>> 0770e9a0dc9afc9623846df977b965ea321019cf

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
