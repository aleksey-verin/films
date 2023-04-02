import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ImgClose from './ImagesComponents/ImgClose'
import { checkUsersLogs } from '../utils/checkUser'
import { setIsAuth } from '../store/actions/actionsAuth'
import { setIsOpen } from '../store/actions/actionsPopup'

const PageLogin = () => {
  const dispatch = useDispatch()

  const defaultInputValue = ''
  const [loginValue, setLoginValue] = useState(defaultInputValue)
  const [passValue, setPassValue] = useState(defaultInputValue)
  const [wrongData, setWrongData] = useState(false)

  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkUsersLogs(loginValue, passValue)) {
      setWrongData(false)
      dispatch(setIsAuth(true))
      dispatch(setIsOpen(false))
    } else {
      setPassValue(defaultInputValue)
      setWrongData(true)
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
            autoComplete="false"
          />
          <input
            onChange={(e) => setPassValue(e.target.value)}
            placeholder="пароль.."
            type="password"
            value={passValue}
            autoComplete="false"
          />
          <button type="submit">Войти!</button>
          {wrongData && <div style={{ color: 'red' }}>Неверный логин или пароль!</div>}
        </form>
        <div onClick={() => dispatch(setIsOpen(false))} className="modal-window__close">
          <ImgClose />
        </div>
      </div>
    </div>
  )
}

export default PageLogin
