import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import PageFilm from './components/PageFilm'
import { setGenres } from './redux/actions'
import { IRootState } from './redux/redux'
import { requestGenres } from './server/request'

function App() {
  const dispatch = useDispatch()
  const isPopupOpen = useSelector((state: IRootState) => state.reducerPopup.isOpen)

  const requestData = async () => {
    // const responseFilms = await requestFilms()
    const responseGenres = await requestGenres()

    if (
      // responseFilms &&
      responseGenres
    ) {
      // dispatch(setFilms(responseFilms))
      dispatch(setGenres(responseGenres))
    }
  }
  useEffect(() => {
    return () => {
      requestData()
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {isPopupOpen ? <Login /> : null}
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<PageFilm />} path="films/:id" />
          {/* <PageFilm /> */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
