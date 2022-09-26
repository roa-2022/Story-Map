import request from 'superagent'

const rootUrl = '/api/v1/stories/'

export function getOneStory(id) {
  return request.get(rootUrl + id).then((res) => {
    return res.body
  })
}

export function deleteStory(id, token) {
  return request
    .delete(rootUrl + id)
    .set('authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function updateStory(story, token) {
  return request
    .put(rootUrl)
    .set('authorization', `Bearer ${token}`)
    .send({ story })
    .then((res) => res.body)
    .catch(logError)
}

function logError(err) {
  if (err.response.text === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the story may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
