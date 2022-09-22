import request from 'superagent'

const rootUrl = '/api/v1/stories'

export function getFruits() {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}
