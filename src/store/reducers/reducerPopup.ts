import { ACTIONS_POPUP } from '../actions/actionsPopup'
import { IRootState } from '../store'

interface initialStateTypes {
  isOpen: boolean
}

interface reducerPopupTypes {
  type: string
  payload: boolean
}

const initialState: initialStateTypes = {
  isOpen: false
}

const reducerPopup = (state = initialState, action: reducerPopupTypes) => {
  switch (action.type) {
    case ACTIONS_POPUP.SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}

export const selectorReducerPopup = (state: IRootState) => state.reducerPopup

export default reducerPopup
