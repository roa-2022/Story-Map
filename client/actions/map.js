export const UPDATE_VIEW_COORDINATES = 'UPDATE_VIEW_COORDINATES'

export function updateViewCoordinates (viewState) {
  return {
    type: UPDATE_VIEW_COORDINATES,
    payload: viewState
  }
}