import { combineReducers } from 'redux'

import search from './search'
import stories from './stories'
import user from './loggedInUser'

export default combineReducers({
  user,
  stories,
  search,
})
