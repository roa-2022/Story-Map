import { getOneStoryAPI, getStoriesAPI } from '../apis/stories'


export const SET_STORY = 'SET_STORY'
export const SET_STORIES = 'SET_STORIES'
export const NAVIGATE = 'NAVIGATE'
export const UPDATE_STORIES = 'UPDATE_STORIES'

export function navigate(destination) {
  return {
    type: NAVIGATE,
    payload: destination, 
  }
}

export function setStory(story) {
  return {
    type: SET_STORY,
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

export function setStories(stories) {
  return {
    type: SET_STORIES,
    payload: stories,
  }
}

export function fetchStories () {
  return async (dispatch) => {
    try {
    const results = await getStoriesAPI()
    dispatch(setStories(results))
  } catch (err) {
    console.error(err.message)
  }

}
}