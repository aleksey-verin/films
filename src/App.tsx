import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import { IRootState } from './redux/redux'

function App() {
  const isPopupOpen = useSelector((state: IRootState) => state.reducerPopup.isOpen)
  console.log(isPopupOpen)
  return (
    <div className="App">
      <Header />
      <Main />
      {isPopupOpen ? <Login /> : null}
    </div>
  )
}

export default App
