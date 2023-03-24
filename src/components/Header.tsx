import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setIsAuth, setIsOpen } from '../redux/actions'
import { IRootState } from '../redux/redux'
import { RouteNames } from '../routes/routes'

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: IRootState) => state.reducerAuth.isAuth)

  const loginOut = () => {
    dispatch(setIsAuth(false))
  }

  return (
    <header>
      <div className="header-wrapper">
        <nav>
          <div className="menu">
            <NavLink className="like-button" to={RouteNames.MAIN}>
              Главная
            </NavLink>
            <NavLink className="like-button" to={RouteNames.SEARCH}>
              Поиск фильма
            </NavLink>
          </div>
          <div className="login">
            {isAuth ? (
              <button onClick={loginOut}>Выйти</button>
            ) : (
              <button onClick={() => dispatch(setIsOpen(true))}>Войти</button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
