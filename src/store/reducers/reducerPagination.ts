import { IFilms } from '../../types/types'
import { ACTIONS_PAGINATION } from '../actions/actionsPagination'
import { IRootState } from '../store'

interface initialStateType {
  shownList: IFilms[]
  lengthFilteredList: number
  pagination: number
  offset: number
  // amountOfPages: number
  // currentPage: number
}

interface PaginationAction {
  type: string
  payload: IFilms[]
}

const initialState: initialStateType = {
  shownList: [],
  lengthFilteredList: 0,
  pagination: 12,
  offset: 12
  // amountOfPages: 1,
  // currentPage: 1
}

const reducerPagination = (state = initialState, action: PaginationAction) => {
  switch (action.type) {
    case ACTIONS_PAGINATION.INCREASE_OFFSET:
      return {
        ...state,
        offset: state.offset + state.pagination
      }
    case ACTIONS_PAGINATION.DECREASE_OFFSET:
      return {
        ...state,
        offset: state.offset - state.pagination
      }
    case ACTIONS_PAGINATION.RESET_OFFSET:
      return {
        ...state,
        offset: initialState.offset
      }
    case ACTIONS_PAGINATION.SET_LENGTH_OF_FILTERED_LIST:
      return {
        ...state,
        lengthFilteredList: action.payload.length
      }
    case ACTIONS_PAGINATION.SET_SHOWN_LIST:
      return {
        ...state,
        shownList: action.payload.slice(state.offset - state.pagination, state.offset)
      }
    // case ACTIONS_PAGINATION.SET_AMOUNT_OF_PAGES:
    //   return {
    //     ...state,
    //     amountOfPages: Math.ceil(state.lengthFilteredList / state.pagination)
    //   }
    // // case ACTIONS_PAGINATION.SET_CURRENT_PAGE:
    // //   return {
    // //     ...state,
    // //     currentPage: state.offset / state.pagination
    // //   }
    default:
      return state
  }
}

export const selectorReducerPagination = (state: IRootState) => state.reducerPagination

export default reducerPagination
