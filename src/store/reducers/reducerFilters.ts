import { IFilms } from '../../types/types'
import { filterListData, filterYearData, sortingData } from '../../utils/constants'
import { ACTIONS_FILTERS } from '../actions/actionsFilters'
import { IRootState } from '../store'

interface initialStateType {
  filteredList: IFilms[] /// возможно лишнее/
  filterFilmLists: string
  filterSorting: string
  filterYear: string
  filterGenres: number[]
}

interface reducerFiltersTypes {
  type: string
  payload: string | number[] | IFilms[]
}

const initialState: initialStateType = {
  filteredList: [],
  filterFilmLists: filterListData.allFilms.value,
  filterSorting: sortingData.voteDescending.value,
  filterYear: filterYearData.none.value,
  filterGenres: []
}

const reducerFilters = (state = initialState, action: reducerFiltersTypes) => {
  switch (action.type) {
    case ACTIONS_FILTERS.SET_FILTERED_LIST:
      return {
        ...state,
        filteredList: [...action.payload]
      }
    case ACTIONS_FILTERS.SET_FILTER_FILM_LIST:
      return {
        ...state,
        filterFilmLists: action.payload
      }
    case ACTIONS_FILTERS.SET_FILTER_SORTING:
      return {
        ...state,
        filterSorting: action.payload
      }
    case ACTIONS_FILTERS.SET_FILTER_YEAR:
      return {
        ...state,
        filterYear: action.payload
      }
    case ACTIONS_FILTERS.SET_FILTER_GENRES:
      return {
        ...state,
        filterGenres: action.payload
      }
    case ACTIONS_FILTERS.RESET_FILTERS:
      return {
        ...state,
        filterFilmLists: initialState.filterFilmLists,
        filterSorting: initialState.filterSorting,
        filterYear: initialState.filterYear,
        filterGenres: initialState.filterGenres
      }
    default:
      return state
  }
}

export const selectorReducerFilters = (state: IRootState) => state.reducerFilters

export default reducerFilters
