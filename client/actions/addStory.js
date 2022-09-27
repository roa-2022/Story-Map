import {addStoryAPI, addSavedStoryAPI, getSavedStoriesAPI } from '../apis/stories'
import {deleteSavedAPI} from '../apis/story'

export const ADD_STORY ='ADD_STORY'
export const ADD_SAVED = 'ADD_SAVED'
export const SET_SAVED = 'SET_SAVED'
export const DEL_SAVED = 'DEL_SAVED'

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

export function deleteSaved(id) {
  return {
    type: DEL_SAVED,
    payload: id,
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
      console.log('actions', result[result.length-1])
      dispatch(addSavedStory(result[result.length-1]))
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
    } catch (err) {
      console.error(err.message)
    }
  }
}

export function fetchDeletedSaved(id, token) {
  return (dispatch) => {
    return deleteSavedAPI(id, token).then(() => {
      dispatch(deleteSaved(id))
    })
  }
}