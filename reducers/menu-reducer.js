import { ActionTypes } from './../actions/menu-actions'

const MenuReducer = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MENU:
      return action.payload
    default:
      return state
  }
}

export default MenuReducer
