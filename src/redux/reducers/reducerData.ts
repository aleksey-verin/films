import { mockData } from '../../mockData/mockdata'
import { ACTIONS, IFilms, IGenres } from '../actions'

const initialState: IInitialState = {
  filmsData: mockData, ///=============
  genresData: [],
  favoriteList: JSON.parse(localStorage.getItem('project-favoriteList')) || [],
  seeLaterList: JSON.parse(localStorage.getItem('project-seeLaterList')) || []
}

type IInitialState = {
  filmsData: IFilms[]
  genresData: IFilms[]
  favoriteList: IFilms[]
  seeLaterList: IFilms[]
}

interface IDataAction {
  type: string
  payload: IFilms | IGenres
}

const reducerData = (state = initialState, action: IDataAction) => {
  switch (action.type) {
    case ACTIONS.SET_FILMS:
      return {
        ...state,
        filmsData: action.payload
      }
    case ACTIONS.SET_GENRES:
      return {
        ...state,
        genresData: action.payload
      }

    case ACTIONS.ADD_FAVORITE:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload]
      }
    case ACTIONS.REMOVE_FAVORITE:
      return {
        ...state,
        favoriteList: state.favoriteList.filter((item) => item.id !== action.payload.id)
      }

    case ACTIONS.ADD_SEE_LATER:
      return {
        ...state,
        seeLaterList: [...state.seeLaterList, action.payload]
      }
    case ACTIONS.REMOVE_SEE_LATER:
      return {
        ...state,
        seeLaterList: state.seeLaterList.filter((item) => item.id !== action.payload.id)
      }

    default:
      return state
  }
}

export default reducerData
