import { storage, storageGetItem } from '../../utils/storage'
import { ACTIONS } from '../actions'
import { IRootState } from '../store'

const initialState: IInitialState = {
  isAuth: storageGetItem(storage.isAuth) || false
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

export const selectorReducerAuth = (state: IRootState) => state.reducerAuth

export default reducerAuth
