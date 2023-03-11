import { ACTIONS } from '../actions'

const initialState: IInitialState = {
  isAuth: JSON.parse(localStorage.getItem('project-isAuth')) || false
}

type IInitialState = {
  isAuth: boolean
}

interface IAuthAction {
  type: typeof ACTIONS.SET_IS_AUTH
  payload: boolean
}

const reducerAuth = (state = initialState, action: IAuthAction) => {
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
