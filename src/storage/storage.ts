import { IFilms } from '../redux/actions'

export const storage = {
  favoriteList: 'project-favoriteList',
  seeLaterList: 'project-seeLaterList',
  isAuth: 'project-isAuth'
}

export const storageGetItem = (storageItem: string) => {
  try {
    const response = localStorage.getItem(storageItem)
    if (response) {
      return JSON.parse(response)
    }
  } catch (error) {
    console.log(error)
  }
}

export const storageSetItem = (storageItem: string, value: boolean | IFilms[]) => {
  try {
    localStorage.setItem(storageItem, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}
