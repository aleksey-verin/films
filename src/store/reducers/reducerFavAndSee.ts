import { IFilms } from '../../types/types'
import { storage, storageGetItem } from '../../utils/storage'
import { ACTIONS_FAV_AND_SEE } from '../actions/actionsFavAndSee'
import { IRootState } from '../store'

interface initialStateTypes {
  favoriteList: IFilms[]
  seeLaterList: IFilms[]
}

interface reducerFavAndSeeTypes {
  type: string
  payload: IFilms
}

const initialState: initialStateTypes = {
  favoriteList: storageGetItem(storage.favoriteList) || [],
  seeLaterList: storageGetItem(storage.seeLaterList) || []
}

const reducerFavAndSee = (state = initialState, action: reducerFavAndSeeTypes) => {
  switch (action.type) {
    case ACTIONS_FAV_AND_SEE.ADD_FAVORITE:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload]
      }
    case ACTIONS_FAV_AND_SEE.REMOVE_FAVORITE:
      return {
        ...state,
        favoriteList: state.favoriteList.filter((item) => item.id !== action.payload.id)
      }

    case ACTIONS_FAV_AND_SEE.ADD_SEE_LATER:
      return {
        ...state,
        seeLaterList: [...state.seeLaterList, action.payload]
      }
    case ACTIONS_FAV_AND_SEE.REMOVE_SEE_LATER:
      return {
        ...state,
        seeLaterList: state.seeLaterList.filter((item) => item.id !== action.payload.id)
      }

    default:
      return state
  }
}

export const selectorReducerFavAndSee = (state: IRootState) => state.reducerFavAndSee

export default reducerFavAndSee
