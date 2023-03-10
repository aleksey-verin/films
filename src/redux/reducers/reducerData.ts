import { mockData } from '../../mockData/mockdata'
import { ACTIONS } from '../actions'

const initialState = {
  filmsData: mockData, ///=============
  genresData: []
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

    default:
      return state
  }
}

export default reducerData
