import { IGenres } from '../../types/types'

export const ACTIONS_GENRES = {
  SET_GENRES: 'SET_GENRES'
}

export const setGenres = (payload: IGenres[]) => ({
  type: ACTIONS_GENRES.SET_GENRES,
  payload
})
