import { combineReducers, createStore } from 'redux'
import reducerData from './reducers/reducerData'
import reducerAuth from './reducers/reducerAuth'
import reducerPopup from './reducers/reducerPopup'
import reducerFavAndSee from './reducers/reducerFavAndSee'
import reducerGenres from './reducers/reducerGenres'
import { storage, storageSetItem } from '../utils/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

export const rootReducer = combineReducers({
  reducerData,
  reducerGenres,
  reducerAuth,
  reducerPopup,
  reducerFavAndSee
})

export const store = createStore(rootReducer, composeWithDevTools())
export type IRootState = ReturnType<typeof rootReducer>

store.subscribe(() => {
  storageSetItem(storage.favoriteList, store.getState().reducerFavAndSee.favoriteList)
  storageSetItem(storage.seeLaterList, store.getState().reducerFavAndSee.seeLaterList)
  storageSetItem(storage.isAuth, store.getState().reducerAuth.isAuth)
})
