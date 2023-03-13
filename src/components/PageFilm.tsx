import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { IGenres } from '../redux/actions'
import { IRootState } from '../redux/redux'

const PageFilm = () => {
  const { id } = useParams()

  const filmList = useSelector((state: IRootState) => state.reducerData.filmsData)
  const genres = useSelector((state: IRootState) => state.reducerGenres.genresData)
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

  const styleBackground = {
    backgroundImage: `url(${backgroundPath})`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  const styleImage = {
    backgroundImage: `url(${imagePath})`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div className="single-page">
      <div style={styleBackground} className="description">
        <div className="description-blur">
          <div className="description-content">
            <div style={styleImage} className="description-image">
              {/* <img src={imagePath} alt="" /> */}
            </div>
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
          <div className="details-item__text">{genresForView(genres, genre_ids)}</div>
        </div>
      </div>
    </div>
  )
}

export default PageFilm
