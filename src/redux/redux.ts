import { combineReducers, createStore } from 'redux'
import reducerData from './reducers/reducerData'
import reducerAuth from './reducers/reducerAuth'
import reducerPopup from './reducers/reducerPopup'

export const rootReducer = combineReducers({
  reducerData,
  reducerAuth,
  reducerPopup
})

// const persistedState = localStorage.getItem('reduxState')
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : {}

export const store = createStore(
  rootReducer
  // persistedState
)
export type IRootState = ReturnType<typeof rootReducer>
// export type State = ReturnType<typeof store.getState>;
// export type State = ReturnType<typeof store.getState>;
store.subscribe(() => {
  localStorage.setItem(
    'project-favoriteList',
    JSON.stringify(store.getState().reducerData.favoriteList)
  )
  localStorage.setItem(
    'project-seeLaterList',
    JSON.stringify(store.getState().reducerData.seeLaterList)
  )
  localStorage.setItem('project-isAuth', JSON.stringify(store.getState().reducerAuth.isAuth))
})
