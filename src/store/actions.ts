import { IFilms, IGenres } from '../types/types'

export const ACTIONS = {
  SET_FILMS: 'SET_FILMS',
  SET_GENRES: 'SET_GENRES',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  ADD_SEE_LATER: 'ADD_SEE_LATER',
  REMOVE_SEE_LATER: 'REMOVE_SEE_LATER',
  SET_IS_AUTH: 'SET_IS_AUTH',
  SET_IS_OPEN: 'SET_IS_OPEN'
}

export const setFilms = (payload: IFilms[]) => ({
  type: ACTIONS.SET_FILMS,
  payload
})
export const setGenres = (payload: IGenres[]) => ({
  type: ACTIONS.SET_GENRES,
  payload
})
export const addFavorite = (payload: IFilms) => ({
  type: ACTIONS.ADD_FAVORITE,
  payload
})
export const removeFavorite = (payload: IFilms) => ({
  type: ACTIONS.REMOVE_FAVORITE,
  payload
})
export const addSeeLater = (payload: IFilms) => ({
  type: ACTIONS.ADD_SEE_LATER,
  payload
})
export const removeSeeLater = (payload: IFilms) => ({
  type: ACTIONS.REMOVE_SEE_LATER,
  payload
})
export const setIsAuth = (payload: boolean) => ({
  type: ACTIONS.SET_IS_AUTH,
  payload: payload
})
export const setIsOpen = (payload: boolean) => ({
  type: ACTIONS.SET_IS_OPEN,
  payload: payload
})
