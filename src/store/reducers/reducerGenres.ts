import mockGenres from '../../mockData/mockGenres'
import { ACTIONS, IGenres } from '../actions'

const initialState: IInitialState = {
  genresData: mockGenres
}

type IInitialState = {
  genresData: IGenres[]
}

interface IDataAction {
  type: string
  payload: IGenres[]
}

const reducerGenres = (state = initialState, action: IDataAction) => {
  switch (action.type) {
    case ACTIONS.SET_GENRES:
      return {
        ...state,
        genresData: action.payload
      }
    default:
      return state
  }
}

export default reducerGenres
