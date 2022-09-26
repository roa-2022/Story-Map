import {addStoryAPI, addSavedStoryAPI } from '../apis/stories'

export const ADD_STORY ='ADD_STORY'
export const ADD_SAVED = 'ADD_SAVED'

export function addStory(data){
  return {
    type:ADD_STORY ,
    payload: data
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

export function fetchAddSavedStory (data, token) {
  return async (dispatch) => {
    try {
      const res = await addSavedStoryAPI(data, token)
      console.log(res)
      dispatch(addSavedStory(res))
    } catch (err) {
      console.error(err.message)
    }
  }
}