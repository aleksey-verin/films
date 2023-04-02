import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../../routes/routes'
import ImgBookmark from '../../ImagesComponents/ImgBookmark'
import ImgFavoriteGold from '../../ImagesComponents/ImgFavoriteGold'
import { IFilms } from '../../../types/types'
import { selectorReducerAuth } from '../../../store/reducers/reducerAuth'
import { selectorReducerFavAndSee } from '../../../store/reducers/reducerFavAndSee'
import { setIsOpen } from '../../../store/actions/actionsPopup'
import {
  addFavorite,
  addSeeLater,
  removeFavorite,
  removeSeeLater
} from '../../../store/actions/actionsFavAndSee'

type ItemFilmProps = {
  item: IFilms
}

const ItemFilm = ({ item }: ItemFilmProps) => {
  const { id, title, vote_average, backdrop_path, poster_path } = item
  const dispatch = useDispatch()
  const { isAuth } = useSelector(selectorReducerAuth)
  const { favoriteList, seeLaterList } = useSelector(selectorReducerFavAndSee)

  const isItemInFavoriteList = favoriteList.findIndex((film) => film.id === id) >= 0
  const isItemInSeeLaterList = seeLaterList.findIndex((film) => film.id === id) >= 0

  const viewText = title.length > 80 ? title.slice(0, 80) + '..' : title

  const imagePath = poster_path || backdrop_path
  const url = `https://image.tmdb.org/t/p/w500/${imagePath}`

  const handleFavorite = () => {
    if (isAuth) {
      isItemInFavoriteList ? dispatch(removeFavorite(item)) : dispatch(addFavorite(item))
    } else {
      dispatch(setIsOpen(true))
    }
  }

  const handleBookmark = () => {
    if (isAuth) {
      isItemInSeeLaterList ? dispatch(removeSeeLater(item)) : dispatch(addSeeLater(item))
    } else {
      dispatch(setIsOpen(true))
    }
  }

  const styleImage = {
    backgroundImage: `url(${url})`
  }

  return (
    <div className="results-item">
      <div style={styleImage} className="results-item__image"></div>
      <div className="results-item__info film">
        <div className="film-actions">
          <div className="film-actions__score">Рейтинг: {vote_average.toFixed(1)}</div>
          <div
            onClick={handleFavorite}
            className={`film-actions__favorite ${isItemInFavoriteList ? 'checked' : null}`}>
            <ImgFavoriteGold />
          </div>
          <div
            onClick={handleBookmark}
            className={`film-actions__bookmark ${isItemInSeeLaterList ? 'checked' : null}`}>
            <ImgBookmark />
          </div>
        </div>
        <div className="film-text">{viewText}</div>
        <Link className="film-details" to={`${RouteNames.FILMS}${id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  )
}

export default ItemFilm
