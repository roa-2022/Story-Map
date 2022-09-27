import request from 'superagent'
import { logError } from '../auth0-utils'

export function getOneStoryAPI(id) {
  return request.get('/api/v1/stories/' + id).then((res) => {
    return res.body
  })
}

export function deleteStoryAPI(id, token) {
  return request
    .delete('/api/v1/stories/' + id)
    .set('authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function updateStoryAPI(story, token) {
  return request
    .put('/api/v1/stories/')
    .set('authorization', `Bearer ${token}`)
    .send({ story })
    .then((res) => res.body)
    .catch(logError)
}


