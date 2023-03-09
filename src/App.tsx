import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { setFilms, setGenres } from './redux/actions'
import { requestFilms, requestGenres } from './server/request'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
