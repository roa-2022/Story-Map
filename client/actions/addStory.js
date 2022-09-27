import {addStoryAPI} from '../apis/stories'

export const ADD_STORY ='ADD_STORY'

export function addStory(story){
  return {
    type:ADD_STORY ,
    payload: story
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
