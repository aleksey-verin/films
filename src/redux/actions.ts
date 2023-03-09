export const ACTIONS = {
  SET_FILMS: 'SET_FILMS',
  SET_GENRES: 'SET_GENRES'
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
