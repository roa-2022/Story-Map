import { fetchRegionsAPI } from '../apis/regions'

export const GET_REGIONS = 'GET_REGIONS'

export function getRegions(regionsArr) {
  return {
    type: GET_REGIONS,
    payload: regionsArr,
  }
}

export function fetchGetRegions() {
  return async (dispatch) => {
    try {
      const regionsArr = await fetchRegionsAPI()
      dispatch(getRegions(regionsArr))
    } catch (err) {
      console.log(err.message)
    }
  }
}
