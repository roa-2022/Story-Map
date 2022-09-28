import { combineReducers } from 'redux'

import map from './map'
import user from './loggedInUser'
import search from './search'
import stories from './stories'
import regions from './regions'
import savedStories from './savedStories'

export default combineReducers({
  map,
  user,
  search,
  stories,
  regions,
  savedStories,
})
