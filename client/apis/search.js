import request from "superagent";

export async function search (region) {
    try {
      const res = await request.get(`/api/search/eng/${region}`);
      console.log('English api', res.body)
      return res.body;
    } catch (err) {
      console.log("Error in search API: " + err.message);
    }
  }
export async function searchMaori (region) {
try {
    const res = await request.get(`/api/search/maori/${region}`);
    console.log('Maori api', res.body)
    return res.body;
} catch (err) {
    console.log("Error in search API: " + err.message);
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
  