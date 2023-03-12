import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setIsAuth, setIsOpen } from '../redux/actions'
import { IRootState } from '../redux/redux'

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: IRootState) => state.reducerAuth.isAuth)
  console.log(isAuth)

  const loginOut = () => {
    dispatch(setIsAuth(false))
  }

  return (
    <header>
      <div className="header-wrapper">
        <nav>
          <div className="menu">
            <Link className="like-button" to="/">
              Home
            </Link>
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
