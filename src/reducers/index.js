import { combineReducers } from 'redux'
import MenuReducer from './menu-reducer'

const rootReducer = combineReducers({
  menu: MenuReducer,
})

export default rootReducer
