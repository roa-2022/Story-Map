import { combineReducers } from 'redux'

import search from './search'
import stories from './stories'
import regions from './regions'

export default combineReducers({
  stories,
  search,
  regions
})
