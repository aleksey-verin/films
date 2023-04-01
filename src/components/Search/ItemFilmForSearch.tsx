import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFavorite,
  addSeeLater,
  removeFavorite,
  removeSeeLater,
  setIsOpen
} from '../../store/actions'
import { IRootState } from '../../store/store'
import ImgBookmark from '../ImagesComponents/ImgBookmark'
import ImgFavoriteGold from '../ImagesComponents/ImgFavoriteGold'
import { IFilms, IGenres } from '../../types/types'

type ItemFilmForSearchProps = {
  item: IFilms
}

const ItemFilmForSearch = ({ item }: ItemFilmForSearchProps) => {
  const { id, title, vote_average, backdrop_path, poster_path, overview, genre_ids } = item
  const dispatch = useDispatch()
  const isAuth = useSelector((state: IRootState) => state.reducerAuth.isAuth)
  const genres = useSelector((state: IRootState) => state.reducerGenres.genresData)
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

  const genresForView = (genresList: IGenres[], genresItem: number[]) => {
    let genreView = ''
    if (genresList.length && genresItem.length) {
      const genresForFilm = genresItem.map((filmGenre) => {
        return genresList.find((item) => item.id === filmGenre)
      })
      genreView = genresForFilm.map((item) => item?.name).join(', ')
    }
    return genreView
  }

  return (
    <div className="search-item">
      <div style={styleImage} className="search-item__image"></div>
      <div className="search-item__info movie">
        <div className="movie-actions">
          <div className="movie-actions__score">Рейтинг: {vote_average.toFixed(1)}</div>
          <div className="movie-actions__genres">{`Жанры: ${genresForView(
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
        <div className="movie-text">{viewText}</div>
        <div className="movie-details">{overview}</div>
      </div>
    </div>
  )
}

export default ItemFilmForSearch
