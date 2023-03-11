import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
      <div className="wrapper">
        <nav>
          <div className="menu">
            {/* <div className="like-button">
              <a href="#">Home</a>
            </div> */}
            <button>Home</button>
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
