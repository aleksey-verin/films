import { storage, storageGetItem } from '../../utils/storage'
import { ACTIONS_AUTH } from '../actions/actionsAuth'
import { IRootState } from '../store'

interface initialStateTypes {
  isAuth: boolean
}

interface reducerAuthTypes {
  type: string
  payload: boolean
}

const initialState: initialStateTypes = {
  isAuth: storageGetItem(storage.isAuth) || false
}

const reducerAuth = (state = initialState, action: reducerAuthTypes) => {
  switch (action.type) {
    case ACTIONS_AUTH.SET_IS_AUTH:
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
