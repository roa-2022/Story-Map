import {addStoryAPI } from '../apis/stories'

export const ADD_STORY ='ADD_STORY'

export function addStory(data){
  return {
    type:ADD_STORY ,
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
