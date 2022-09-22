import { combineReducers } from 'redux'

import fruits from './fruits'
import search from './search'
import stories from './stories'

export default combineReducers({
  fruits,
  stories,
  search
})
