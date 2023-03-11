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

export interface IFilms {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IGenres {
  id: number
  name: string
}

export const setFilms = (payload: IFilms) => {
  return {
    type: ACTIONS.SET_FILMS,
    payload
  }
}

export const setGenres = (payload: IGenres) => {
  return {
    type: ACTIONS.SET_GENRES,
    payload
  }
}
export const addFavorite = (payload: IFilms) => {
  return {
    type: ACTIONS.ADD_FAVORITE,
    payload
  }
}

export const removeFavorite = (payload: IFilms) => {
  return {
    type: ACTIONS.REMOVE_FAVORITE,
    payload
  }
}
export const addSeeLater = (payload: IFilms) => {
  return {
    type: ACTIONS.ADD_SEE_LATER,
    payload
  }
}

export const removeSeeLater = (payload: IFilms) => {
  return {
    type: ACTIONS.REMOVE_SEE_LATER,
    payload
  }
}

export const setIsAuth = (payload: boolean) => {
  return {
    type: ACTIONS.SET_IS_AUTH,
    payload: payload
  }
}

export const setIsOpen = (payload: boolean) => {
  return {
    type: ACTIONS.SET_IS_OPEN,
    payload: payload
  }
}
