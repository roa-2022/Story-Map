import { combineReducers } from 'redux'

import search from './search'
import stories from './stories'
import addStory from './addstory'

export default combineReducers({
  stories,
  search,
  addStory
})
