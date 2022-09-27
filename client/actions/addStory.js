import {addStoryAPI, addSavedStoryAPI, getSavedStoriesAPI } from '../apis/stories'

export const ADD_STORY ='ADD_STORY'
export const ADD_SAVED = 'ADD_SAVED'
export const SET_SAVED = 'SET_SAVED'

export function addStory(data){
  return {
    type:ADD_STORY ,
    payload: data
  }
}

export function setSaved(story) {
  return {
    type: SET_SAVED,
    payload: story
  }
}

export function addSavedStory(data) {
  return {
    type: ADD_SAVED,
    payload: data
  }
}

export function fetchAddStory(data,token) {
  return async (dispatch) => {
    try {
      const res = await addStoryAPI(data, token)
      dispatch(addStory(res))
    } catch (err) {
      console.error(err.message)
    }
  }
}

export function fetchAddSavedStory (story, token) {
  return async (dispatch) => {
    try {
      const result = await addSavedStoryAPI(story, token)
      console.log('actions', result)
      dispatch(addSavedStory(result))
    } catch (err) {
      console.error(err.message)
    }
  }
}

export function fetchSavedStories (id, token) {
  return async (dispatch) => {
    try {
      const results = await getSavedStoriesAPI(id, token)
      dispatch(setSaved(results))
      console.log(object)
    } catch (err) {
      console.error(err.message)
    }
  }
}