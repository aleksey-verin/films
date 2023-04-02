import { IFilms } from '../../types/types'

export const ACTIONS_DATA = {
  SET_FILMS: 'SET_FILMS'
}

export const setFilms = (payload: IFilms[]) => ({
  type: ACTIONS_DATA.SET_FILMS,
  payload
})
