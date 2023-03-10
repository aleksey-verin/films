import { storage, storageGetItem } from '../../storage/storage'
import { ACTIONS, IFilms } from '../actions'

const initialState: IInitialState = {
  favoriteList: storageGetItem(storage.favoriteList) || [],
  seeLaterList: storageGetItem(storage.seeLaterList) || []
}

type IInitialState = {
  favoriteList: IFilms[]
  seeLaterList: IFilms[]
}

interface IDataAction {
  type: string
  payload: IFilms
}

const reducerFavAndSee = (state = initialState, action: IDataAction) => {
  switch (action.type) {
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

export default reducerFavAndSee
