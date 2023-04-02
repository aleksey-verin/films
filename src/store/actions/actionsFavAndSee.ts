import { IFilms } from '../../types/types'

export const ACTIONS_FAV_AND_SEE = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  ADD_SEE_LATER: 'ADD_SEE_LATER',
  REMOVE_SEE_LATER: 'REMOVE_SEE_LATER'
}

export const addFavorite = (payload: IFilms) => ({
  type: ACTIONS_FAV_AND_SEE.ADD_FAVORITE,
  payload
})
export const removeFavorite = (payload: IFilms) => ({
  type: ACTIONS_FAV_AND_SEE.REMOVE_FAVORITE,
  payload
})
export const addSeeLater = (payload: IFilms) => ({
  type: ACTIONS_FAV_AND_SEE.ADD_SEE_LATER,
  payload
})
export const removeSeeLater = (payload: IFilms) => ({
  type: ACTIONS_FAV_AND_SEE.REMOVE_SEE_LATER,
  payload
})
