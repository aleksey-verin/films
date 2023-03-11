import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import { setFilms, setGenres } from './redux/actions'
import { requestFilms, requestGenres } from './server/request'

function App() {
  const isPopupOpen = useSelector((state) => state.reducerPopup.isOpen)
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
