import { mockData } from '../../mockData/mockdata'
import { ACTIONS } from '../actions'

const initialState = {
  filmsData: mockData, ///=============
  genresData: [],
  favoriteList: JSON.parse(localStorage.getItem('project-favoriteList')) || [],
  seeLaterList: JSON.parse(localStorage.getItem('project-seeLaterList')) || []
}

const reducerData = (state = initialState, action) => {
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
