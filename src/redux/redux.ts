import { combineReducers, createStore } from 'redux'
import reducerData from './reducers/reducerData'
import reducerAuth from './reducers/reducerAuth'
import reducerPopup from './reducers/reducerPopup'
import reducerFavAndSee from './reducers/reducerFavAndSee'
import reducerGenres from './reducers/reducerGenres'
import { storage, storageSetItem } from '../storage/storage'

export const rootReducer = combineReducers({
  reducerData,
  reducerGenres,
  reducerAuth,
  reducerPopup,
  reducerFavAndSee
})

// const persistedState = localStorage.getItem('reduxState')
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : {}

export const store = createStore(
  rootReducer
  // persistedState
)
export type IRootState = ReturnType<typeof rootReducer>

store.subscribe(() => {
  storageSetItem(storage.favoriteList, store.getState().reducerFavAndSee.favoriteList)
  storageSetItem(storage.seeLaterList, store.getState().reducerFavAndSee.seeLaterList)
  storageSetItem(storage.isAuth, store.getState().reducerAuth.isAuth)
})
