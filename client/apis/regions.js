import request from 'superagent'


export async function fetchRegionsAPI() {
  try {
    const regions = await request.get("/api/v1/regions")
    return regions.body
  } catch (err) {
    console.error('Error in search API: ' + err.message)
  }
}