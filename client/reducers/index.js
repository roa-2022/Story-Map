import { combineReducers } from 'redux'

import search from './search'
import stories from './stories'

export default combineReducers({
  stories,
  search
})
