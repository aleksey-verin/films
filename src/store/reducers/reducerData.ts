import mockData from '../../mockData/mockData'
import { IFilms } from '../../types/types'
import { ACTIONS_DATA } from '../actions/actionsData'
import { IRootState } from '../store'
interface initialStateTypes {
  filmsData: IFilms[]
}

interface reducerDataTypes {
  type: string
  payload: IFilms[]
}

const initialState: initialStateTypes = {
  filmsData: mockData
}

const reducerData = (state = initialState, action: reducerDataTypes) => {
  switch (action.type) {
    case ACTIONS_DATA.SET_FILMS:
      return {
        ...state,
        filmsData: action.payload
      }
    default:
      return state
  }
}

export const selectorReducerData = (state: IRootState) => state.reducerData

export default reducerData
