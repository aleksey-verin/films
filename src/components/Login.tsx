import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsAuth, setIsOpen } from '../redux/actions'
import ImgClose from './Images/ImgClose'
// import ImgClose from './Images/ImgClose'

const checkLoginPass = (login: string, password: string) => {
  const successCombination = { login: 'verevaa@yandex.ru', password: '1212' }
  return login === successCombination.login && password === successCombination.password
}

const Login = () => {
  const dispatch = useDispatch()

  const defaultInputValue = ''
  const [loginValue, setLoginValue] = useState(defaultInputValue)
  const [passValue, setPassValue] = useState(defaultInputValue)

  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkLoginPass(loginValue, passValue)) {
      dispatch(setIsAuth(true))
      dispatch(setIsOpen(false))
    } else {
      setPassValue(defaultInputValue)
    }
  }

  return (
    <div className="modal">
      <div className="modal-window">
        <h2 className="modal-window__title">Авторизация</h2>
        <form onSubmit={handleForm} className="modal-window__form">
          <label>Введите логин и пароль</label>
          <input
            onChange={(e) => setLoginValue(e.target.value)}
            placeholder="логин.."
            type="email"
            value={loginValue}
          />
          <input
            onChange={(e) => setPassValue(e.target.value)}
            placeholder="пароль.."
            type="password"
            value={passValue}
          />
          <button type="submit">Войти!</button>
        </form>
        <div onClick={() => dispatch(setIsOpen(false))} className="modal-window__close">
          <ImgClose />
        </div>
      </div>
    </div>
  )
}

export default Login
