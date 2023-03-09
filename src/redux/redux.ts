import { createStore } from 'redux'
import reducerData from './reducers/reducerData'

// export const rootReducer = combineReducers({
//   reducerData
// })

// const persistedState = localStorage.getItem('reduxState')
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : {}

export const store = createStore(
  // rootReducer
  reducerData
  // persistedState
)

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })
