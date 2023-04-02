import { IFilms } from '../../types/types'

export const ACTIONS_PAGINATION = {
  INCREASE_OFFSET: 'INCREASE_OFFSET',
  DECREASE_OFFSET: 'DECREASE_OFFSET',
  RESET_OFFSET: 'RESET_OFFSET',
  SET_LENGTH_OF_FILTERED_LIST: 'SET_LENGTH_OF_FILTERED_LIST',
  SET_SHOWN_LIST: 'SET_SHOWN_LIST'
  // SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  // SET_AMOUNT_OF_PAGES: 'SET_AMOUNT_OF_PAGES'
}

export const resetOffset = () => ({
  type: ACTIONS_PAGINATION.RESET_OFFSET
})
export const increaseOffset = () => ({
  type: ACTIONS_PAGINATION.INCREASE_OFFSET
})
export const decreaseOffset = () => ({
  type: ACTIONS_PAGINATION.DECREASE_OFFSET
})
export const setLengthOfFilteredList = (payload: IFilms[]) => ({
  type: ACTIONS_PAGINATION.SET_LENGTH_OF_FILTERED_LIST,
  payload
})
export const setShownList = (payload: IFilms[]) => ({
  type: ACTIONS_PAGINATION.SET_SHOWN_LIST,
  payload
})
// export const setCurrentPage = () => ({
//   type: ACTIONS_PAGINATION.SET_CURRENT_PAGE
// })
// export const setAmountOfPages = () => ({
//   type: ACTIONS_PAGINATION.SET_AMOUNT_OF_PAGES
// })
