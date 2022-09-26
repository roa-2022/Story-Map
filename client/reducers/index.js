import { combineReducers } from 'redux'

import search from './search'
import stories from './stories'
import user from './loggedInUser'
import regions from './regions'
import activepage from './activepage'
import maoriSearch from './maoriSearch'
import map from './map'
import savedStories from './savedStories'

export default combineReducers({
  user,
  stories,
  search,
  activepage,
  regions,
  maoriSearch,
  map,
  savedStories
})
