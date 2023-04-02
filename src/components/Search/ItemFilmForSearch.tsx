import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImgBookmark from '../ImagesComponents/ImgBookmark'
import ImgFavoriteGold from '../ImagesComponents/ImgFavoriteGold'
import { IFilms } from '../../types/types'
import { transformGenresIntoString } from '../../utils/helpers'
import { selectorReducerAuth } from '../../store/reducers/reducerAuth'
import { selectorReducerGenres } from '../../store/reducers/reducerGenres'
import { selectorReducerFavAndSee } from '../../store/reducers/reducerFavAndSee'
import { setIsOpen } from '../../store/actions/actionsPopup'
import {
  addFavorite,
  addSeeLater,
  removeFavorite,
  removeSeeLater
} from '../../store/actions/actionsFavAndSee'

type ItemFilmForSearchProps = {
  item: IFilms
}

const ItemFilmForSearch = ({ item }: ItemFilmForSearchProps) => {
  const { id, title, vote_average, poster_path, overview, genre_ids } = item
  const dispatch = useDispatch()
  const { isAuth } = useSelector(selectorReducerAuth)
  const { genresData: genres } = useSelector(selectorReducerGenres)
  const { favoriteList, seeLaterList } = useSelector(selectorReducerFavAndSee)

  const isItemInFavoriteList = favoriteList.findIndex((film) => film.id === id) >= 0
  const isItemInSeeLaterList = seeLaterList.findIndex((film) => film.id === id) >= 0

  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`

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
    backgroundImage: `url(${imageUrl})`
  }

  return (
    <div className="search-item">
      <div style={styleImage} className="search-item__image"></div>
      <div className="search-item__info movie">
        <div className="movie-actions">
          <div className="movie-actions__score">Рейтинг: {vote_average.toFixed(1)}</div>
          <div className="movie-actions__genres">{`Жанры: ${transformGenresIntoString(
            genres,
            genre_ids
          )}`}</div>
          <div
            onClick={handleFavorite}
            className={`movie-actions__favorite ${isItemInFavoriteList ? 'checked' : null}`}>
            <ImgFavoriteGold />
          </div>
          <div
            onClick={handleBookmark}
            className={`movie-actions__bookmark ${isItemInSeeLaterList ? 'checked' : null}`}>
            <ImgBookmark />
          </div>
        </div>
        <div className="movie-text">{title}</div>
        <div className="movie-details">{overview}</div>
      </div>
    </div>
  )
}

export default ItemFilmForSearch
