import request from 'superagent'

export async function searchAPI(region) {
  try {
    const res = await request.get(`/api/v1/search/eng/${region}`)
    return res.body
  } catch (err) {
    console.log('Error in search API: ' + err.message)
  }
}
export async function searchMaoriRegionAPI(region) {
  try {
    const res = await request.get(`/api/v1/search/maori/${region}`)
    return res.body
  } catch (err) {
    console.log('Error in search API: ' + err.message)
  }
}

export async function addStoryAPI(story){
  const res = await request.post('/api/v1/search/').send(story)
  console.log("api", res.body)
  return res.body
}

// export async function search (regionmaori) {
// try {
//     const res = await request.get(`/api/search/${regionmaori}`);
//     return res.body;
// } catch (err) {
//     console.log("Error in search API: " + err.message);
// }
// }
