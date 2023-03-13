import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { setIsAuth, setIsOpen } from '../redux/actions'
import { IRootState } from '../redux/redux'

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
            <NavLink className="like-button" to="/">
              Главная
            </NavLink>
            <NavLink className="like-button" to="/search">
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
