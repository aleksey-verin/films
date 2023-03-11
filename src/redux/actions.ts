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
  backdrop_path: string
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

export interface IIsAuth {
  isAuth: boolean
}

export interface IIsOpen {
  isOpen: boolean
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
export const addFavorite = (payload) => {
  return {
    type: ACTIONS.ADD_FAVORITE,
    payload
  }
}

export const removeFavorite = (payload) => {
  return {
    type: ACTIONS.REMOVE_FAVORITE,
    payload
  }
}
export const addSeeLater = (payload) => {
  return {
    type: ACTIONS.ADD_SEE_LATER,
    payload
  }
}

export const removeSeeLater = (payload) => {
  return {
    type: ACTIONS.REMOVE_SEE_LATER,
    payload
  }
}

export const setIsAuth = (payload: IIsAuth) => {
  return {
    type: ACTIONS.SET_IS_AUTH,
    payload
  }
}

export const setIsOpen = (payload: IIsOpen) => {
  return {
    type: ACTIONS.SET_IS_OPEN,
    payload
  }
}
