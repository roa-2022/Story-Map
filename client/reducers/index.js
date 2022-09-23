import { combineReducers } from 'redux'

import search from './search'
import stories from './stories'
import user from './loggedInUser'
import regions from './regions'


export default combineReducers({
  user,
  stories,
  search,
  regions
})
