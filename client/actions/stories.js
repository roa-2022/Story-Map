import {
  getOneStoryAPI,
  getStoriesAPI,
  updateStoryAPI,
  addStoryAPI,
} from '../apis/stories'

export const SET_STORY = 'SET_STORY'
export const SET_STORIES = 'SET_STORIES'
export const ADD_STORY = 'ADD_STORY'

export const UPDATE_STORIES = 'UPDATE_STORIES'

export function setStory(story) {
  return {
    type: SET_STORY,
    payload: story,
  }
}

export function setStories(stories) {
  return {
    type: SET_STORIES,
    payload: stories,
  }
}

export function addStory(story) {
  return {
    type: ADD_STORY,
    payload: story,
  }
}

export function fetchOneStory(id) {
  return async (dispatch) => {
    try {
      const story = await getOneStoryAPI(id)
      dispatch(setStory(story))
    } catch (err) {
      console.error(err.message)
    }
  }
}

export function fetchStories() {
  return async (dispatch) => {
    try {
      const results = await getStoriesAPI()
      dispatch(setStories(results))
    } catch (err) {
      console.error(err.message)
    }
  }
}

export function updateStories(stories) {
  return {
    type: UPDATE_STORIES,
    payload: stories,
  }
}

export function fetchUpdateStories(stories, token) {
  return (dispatch) => {
    return updateStoryAPI(stories, token).then((res) => {
      dispatch(updateStories(res))
    })
  }
}

export function fetchAddStory(data, token) {
  return async (dispatch) => {
    try {
      const res = await addStoryAPI(data, token)
      dispatch(addStory(res))
    } catch (err) {
      console.error(err.message)
    }
  }
}
