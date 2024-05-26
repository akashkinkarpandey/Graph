import { combineReducers } from 'redux'
import traverseReducer from './traverse'

const rootReducer = combineReducers({
  traverse: traverseReducer,
})

export default rootReducer
