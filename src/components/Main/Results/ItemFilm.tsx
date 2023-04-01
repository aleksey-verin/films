import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  addFavorite,
  addSeeLater,
  IFilms,
  removeFavorite,
  removeSeeLater,
  setIsOpen
} from '../../../store/actions'
import { IRootState } from '../../../store/store'
import { RouteNames } from '../../../routes/routes'
import ImgBookmark from '../../ImagesComponents/ImgBookmark'
import ImgFavoriteGold from '../../ImagesComponents/ImgFavoriteGold'

type ItemFilmProps = {
  item: IFilms
}

const ItemFilm = ({ item }: ItemFilmProps) => {
  const { id, title, vote_average, backdrop_path, poster_path } = item
  const dispatch = useDispatch()
  const isAuth = useSelector((state: IRootState) => state.reducerAuth.isAuth)
  const favoriteList: IFilms[] = useSelector(
    (state: IRootState) => state.reducerFavAndSee.favoriteList
  )
  const seeLaterList: IFilms[] = useSelector(
    (state: IRootState) => state.reducerFavAndSee.seeLaterList
  )
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
