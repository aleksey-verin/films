import { mockData } from '../../mockData/mockdata'
import { ACTIONS } from '../actions'

const initialState = {
  isOpen: false
}

const reducerPopup = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}

export default reducerPopup
