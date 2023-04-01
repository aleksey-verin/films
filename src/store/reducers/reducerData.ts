import mockData from '../../mockData/mockData'
import { ACTIONS, IFilms } from '../actions'

const initialState: IInitialState = {
  filmsData: mockData
}

type IInitialState = {
  filmsData: IFilms[]
}

interface IDataAction {
  type: string
  payload: IFilms[]
}

const reducerData = (state = initialState, action: IDataAction) => {
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

export default reducerData
