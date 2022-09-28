import { addSavedStoryAPI, getSavedStoriesAPI, deleteSavedAPI } from '../apis/savedStories'

export const ADD_SAVED = 'ADD_SAVED'
export const SET_SAVED = 'SET_SAVED'
export const DEL_SAVED = 'DEL_SAVED'

export function setSaved(story) {
    return {
            type: SET_SAVED,
            payload: story
          }
        }
        
export function deleteSaved(id) {
return {
    type: DEL_SAVED,
    payload: id,
}
}

export function addSavedStory(story) {
return {
type: ADD_SAVED,
payload: story
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

export function fetchSavedStories (auth0_id, token) {
  return async (dispatch) => {
    try {
      const results = await getSavedStoriesAPI(auth0_id, token)
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