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
export function fetchAddStory(data) {
  return (dispatch) => {
    return addStoryApi(data)
    .then((res) => {dispatch(addStory(res))
      // console.log(res)
   
  })
  }
}
