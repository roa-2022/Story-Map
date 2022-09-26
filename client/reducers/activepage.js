const initialState = 'home'

const activePage = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'NAVIGATE':
      return payload
    default:
      return state
  }
}

export default activePage
