import request from 'superagent'

const rootUrl = '/api/v1/stories'

export function getStories() {
  return request.get(rootUrl + '/stories').then((res) => {
    return res.body.stories
  })
}
