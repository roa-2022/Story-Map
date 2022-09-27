import request from 'superagent'
import { logError } from '../auth0-utils'

export async function getOneStoryAPI(id) {
  const res = await request.get('/api/v1/stories/' + id)
  return res.body
}

export async function getStoriesAPI() {
  const res = await request.get('/api/v1/stories/')
  return res.body
}

export async function addStoryAPI(data, token) {
  const res = await request
    .post('/api/v1/stories/')
    .set('authorization', `Bearer ${token}`)
    .send(data)
  return res.body
}

export async function deleteStoryAPI(id, token) {
  try {
    const res = await request
      .delete('/api/v1/stories/' + id)
      .set('authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    return logError(err)
  }
}

export async function updateStoryAPI(story, token) {
  try {
    const res = await request
      .put('/api/v1/stories/')
      .set('authorization', `Bearer ${token}`)
      .send({ story })
    return res.body
  } catch (err) {
    return logError(err)
  }
}

