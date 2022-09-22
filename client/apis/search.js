import request from 'superagent'

export async function search(region) {
  try {
    const res = await request.get(`/api/search/eng/${region}`)
    return res.body
  } catch (err) {
    console.log('Error in search API: ' + err.message)
  }
}
export async function searchMaori(region) {
  try {
    const res = await request.get(`/api/search/maori/${region}`)
    return res.body
  } catch (err) {
    console.log('Error in search API: ' + err.message)
  }
}

// export async function search (regionmaori) {
// try {
//     const res = await request.get(`/api/search/${regionmaori}`);
//     return res.body;
// } catch (err) {
//     console.log("Error in search API: " + err.message);
// }
// }