import request from 'superagent'

const rootUrl = '/api/v1/stories/'

export function getOneStory(id) {
  return request.get(rootUrl + id).then((res) => {
    return res.body
  })
}

export function getStories() {
  return request.get(rootUrl).then((res) => {
    return res.body.stories
  })
}
