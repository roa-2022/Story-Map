import { addFavoriteAPI, getFavoriteAPI, deleteFavoriteAPI } from '../apis/savedStories'


export const ADD_FAVORITE = 'ADD_FAVORITE'
export const SET_FAVORITE = 'SET_FAVORITE'
export const DEL_FAVORITE = 'DEL_FAVORITE'

export function setFavorite(story) {
    return {
            type: SET_FAVORITE,
            payload: story
          }
        }
        
export function deleteFavorite(id) {
return {
    type: DEL_FAVORITE,
    payload: id,
}
}

export function addFavorite(story) {
return {
type: ADD_FAVORITE,
payload: story
}
}
export function dispatchAddedFavorites (story, token) {
    return async (dispatch) => {
    try {
        const result = await addFavoriteAPI(story, token)
        console.log('actions', result)
        dispatch(addFavorite(result))
    } catch (err) {
        console.error(err.message)
    }
    }
}

export function fetchFavorites (auth0_id, token) {
    return async (dispatch) => {
    try {
        const results = await getFavoriteAPI(auth0_id, token)
        dispatch(setFavorite(results))
        console.log('actions cool', results)
    } catch (err) {
        console.error(err.message)
    }
    }
}

export function dispatchDeletedFavorites(id, token) {
    return (dispatch) => {
    return deleteFavoriteAPI(id, token).then(() => {
        dispatch(deleteFavorite(id))
    })
    }
}