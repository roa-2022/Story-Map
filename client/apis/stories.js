import request from 'superagent'

const rootUrl = '/api/v1/stories/'

export function getOneStory(id) {
  return request.get(rootUrl + id).then((res) => {
    return res.body
  })
}

export function getStories() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

// Add a Story

export async function addStoryApi(data, token) {  
  const res = await request
  .post(rootUrl)
  .set('authorization', `Bearer ${token}`)
  .send(data)
  return res.body
}