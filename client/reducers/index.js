import { combineReducers } from 'redux'

import stories from './stories'
import addStory from './addstory'
import user from './loggedInUser'
import regions from './regions'
import activepage from './activepage'
import maoriSearch from './maoriSearch'
import map from './map'

export default combineReducers({
  user,
  stories,
  search,
  addStory,
  activepage,
  regions,
  maoriSearch,
  map
})
