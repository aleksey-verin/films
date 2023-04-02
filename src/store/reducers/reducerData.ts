import mockData from '../../mockData/mockData'
import { IFilms } from '../../types/types'
import { ACTIONS } from '../actions'
import { IRootState } from '../store'

const initialState: IInitialState = {
  filmsData: mockData
}

type IInitialState = {
  filmsData: IFilms[]
}

interface reducerDataTypes {
  type: string
  payload: IFilms[]
}

const reducerData = (state = initialState, action: reducerDataTypes) => {
  switch (action.type) {
    case ACTIONS.SET_FILMS:
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
