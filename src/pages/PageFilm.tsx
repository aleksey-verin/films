import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { transformGenresIntoString } from '../utils/helpers'
import { selectorReducerData } from '../store/reducers/reducerData'
import { selectorReducerGenres } from '../store/reducers/reducerGenres'

const PageFilm = () => {
  const { id } = useParams()

  const { filmsData: filmList } = useSelector(selectorReducerData)
  const { genresData: genres } = useSelector(selectorReducerGenres)

  const item = filmList.find((film) => film.id === Number(id))

  if (!item) return <Navigate to="/" />

  const {
    backdrop_path,
    poster_path,
    title,
    vote_average,
    overview,
    release_date,
    original_language,
    genre_ids
  } = item

  const url = `https://image.tmdb.org/t/p/w500/`
  const backgroundPath = `${url}${backdrop_path}`
  const imagePath = `${url}${poster_path}`

  const styleBackground = {
    backgroundImage: `url(${backgroundPath})`
  }
  const styleImage = {
    backgroundImage: `url(${imagePath})`
  }

  return (
    <div className="single-page">
      <div style={styleBackground} className="description">
        <div className="description-blur">
          <div className="description-content">
            <div style={styleImage} className="description-image"></div>
            <div className="description-text">
              <h2 className="description-text__title">{title}</h2>
              <h4 className="description-text__score">
                Рейтинг: {vote_average ? vote_average.toFixed(1) : null}
              </h4>
              <p className="description-text__description">{overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="details-item">
          <div className="details-item__title">Дата релиза:</div>
          <div className="details-item__text">{release_date}</div>
        </div>
        <div className="details-item">
          <div className="details-item__title">Язык оригинала</div>
          <div className="details-item__text">{original_language}</div>
        </div>
        <div className="details-item">
          <div className="details-item__title">Жанры:</div>
          <div className="details-item__text">{transformGenresIntoString(genres, genre_ids)}</div>
        </div>
      </div>
    </div>
  )
}

export default PageFilm
