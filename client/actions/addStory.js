import {addStoryApi } from '../apis/stories'

export const ADD_STORY ='ADD_STORY'

// ---- ADD STORY
export function addStory(data){
  return {
    type:ADD_STORY ,
    payload: data
  }
}

//Thunk
export function fetchAddStory(data,token) {
  return (dispatch) => {
    return addStoryApi(data, token)
    .then((res) => {dispatch(addStory(res))   
   
  })
  }
}
