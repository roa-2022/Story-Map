import { combineReducers } from 'redux'

import search from './search'
import stories from './stories'
import activepage from './activepage'

export default combineReducers({
  stories,
  search,
  activepage,
})
