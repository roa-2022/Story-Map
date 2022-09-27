import request from 'superagent'
import { logError } from '../auth0-utils'

export async function addFavoriteAPI (story, auth0_id, token) {
    try {
      const res = await request
        .post('/api/v1/saved/')
        .set('authorization', `Bearer ${token}`)
        .send(story, auth0_id)
      return res.body
    } catch (err) {
      return logError(err)
    }
  }
  
  export async function getFavoriteAPI (auth0_id, token) {
    try {
      const res = await request
        .get('/api/v1/saved/' + auth0_id)
        .set('authorization', `Bearer ${token}`)
      return res.body
    } catch (err) {
      return logError(err)
    }
  }
  export async function deleteFavoriteAPI(id, token) {
    try {
      const res = await request
        .delete('/api/v1/saved/' + id)
        .set('authorization', `Bearer ${token}`)
      return res.body
    } catch (err) {
      console.error(err.message)
    }
  }
  