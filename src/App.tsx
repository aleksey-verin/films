import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import PageMain from './pages/PageMain'
import PageFilm from './pages/PageFilm'
import PageSearch from './pages/PageSearch'
import { RouteNames } from './routes/routes'
import { selectorReducerPopup } from './store/reducers/reducerPopup'

function App() {
  const { isOpen } = useSelector(selectorReducerPopup)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {isOpen ? <Login /> : null}
        <Routes>
          <Route element={<PageMain />} path={RouteNames.MAIN} />
          <Route element={<PageSearch />} path={RouteNames.SEARCH} />
          <Route element={<PageFilm />} path={`${RouteNames.FILMS}:id`} />
          <Route path="*" element={<Navigate replace to={RouteNames.MAIN} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
