import request from 'superagent'

export async function searchAPI(region) {
  try {
    const res = await request.get(`/api/v1/search/eng/${region}`)
    return res.body
  } catch (err) {
    console.error('Error in search API: ' + err.message)
  }
}
export async function searchMaoriRegionAPI(region) {
  try {
    const res = await request.get(`/api/v1/search/maori/${region}`)
    return res.body
  } catch (err) {
    console.error('Error in search API: ' + err.message)
  }
}


