export const ACTIONS_FILTERS = {
  SET_FILTER_FILM_LIST: 'SET_FILTER_FILM_LIST',
  SET_FILTER_SORTING: 'SET_FILTER_SORTING',
  SET_FILTER_YEAR: 'SET_FILTER_YEAR',
  SET_FILTER_GENRES: 'SET_FILTER_GENRES',
  RESET_FILTERS: 'RESET_FILTERS'
}

export const setFilterFilmList = (payload: string) => ({
  type: ACTIONS_FILTERS.SET_FILTER_FILM_LIST,
  payload
})
export const setFilterSorting = (payload: string) => ({
  type: ACTIONS_FILTERS.SET_FILTER_SORTING,
  payload
})
export const setFilterYEar = (payload: string) => ({
  type: ACTIONS_FILTERS.SET_FILTER_YEAR,
  payload
})
export const setFilterGenres = (payload: number[]) => ({
  type: ACTIONS_FILTERS.SET_FILTER_GENRES,
  payload
})
export const resetFilters = () => ({
  type: ACTIONS_FILTERS.RESET_FILTERS
})
