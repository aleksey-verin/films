import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import PageFilm from './components/PageFilm'
import Search from './components/Search'
import { IRootState } from './redux/redux'
import { RouteNames } from './routes/routes'

function App() {
  const isPopupOpen = useSelector((state: IRootState) => state.reducerPopup.isOpen)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {isPopupOpen ? <Login /> : null}
        <Routes>
          <Route element={<Main />} path={RouteNames.MAIN} />
          <Route element={<Search />} path={RouteNames.SEARCH} />
          <Route element={<PageFilm />} path={RouteNames.FILMS} />
          <Route path="*" element={<Navigate replace to={RouteNames.MAIN} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
