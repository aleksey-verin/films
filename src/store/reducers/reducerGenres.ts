import mockGenres from '../../mockData/mockGenres'
import { IGenres } from '../../types/types'
import { ACTIONS_GENRES } from '../actions/actionsGenres'
import { IRootState } from '../store'

interface initialStateTypes {
  genresData: IGenres[]
}

interface reducerGenresTypes {
  type: string
  payload: IGenres[]
}

const initialState: initialStateTypes = {
  genresData: mockGenres
}
const reducerGenres = (state = initialState, action: reducerGenresTypes) => {
  switch (action.type) {
    case ACTIONS_GENRES.SET_GENRES:
      return {
        ...state,
        genresData: action.payload
      }
    default:
      return state
  }
}

export const selectorReducerGenres = (state: IRootState) => state.reducerGenres

export default reducerGenres
