import { combineReducers } from 'redux'

import search from './search'
import stories from './stories'
import addStory from './addstory'
import user from './loggedInUser'
import regions from './regions'
import activepage from './activepage'
import reducerReo from './reducerReo'

export default combineReducers({
  user,
  stories,
  search,
  addStory,
  activepage,
  regions,
  reducerReo
})
