import request from 'superagent'

const storiesUrl = "/api/v1/regions"

export async function fetchRegionsAPI() {
  try {
    const regions = await request.get(storiesUrl)
    return regions.body
  } catch (err) {
    console.log('Error in search API: ' + err.message)
  }
}