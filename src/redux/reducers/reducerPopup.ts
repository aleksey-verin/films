import { ACTIONS } from '../actions'

const initialState = {
  isOpen: false
}

interface IPopupAction {
  type: typeof ACTIONS.SET_IS_OPEN
  payload: boolean
}

const reducerPopup = (state = initialState, action: IPopupAction) => {
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
