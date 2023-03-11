import { mockData } from '../../mockData/mockdata'
import { ACTIONS } from '../actions'

const initialState = {
  isAuth: JSON.parse(localStorage.getItem('project-isAuth')) || false
}

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    default:
      return state
  }
}

export default reducerAuth
