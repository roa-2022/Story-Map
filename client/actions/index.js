import { getOneStory } from '../apis/stories'

export const SET_STORY = 'SET_STORY'

export function setStory(story) {
  return {
    type: SET_STORY,
    payload: story,
  }
}

export function fetchOneStory(id) {
  return (dispatch) => {
    return getOneStory(id).then((story) => {
      dispatch(setStory(story))
    })
  }
}
