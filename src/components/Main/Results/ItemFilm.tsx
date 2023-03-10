import React from 'react'
import ImgBookmark from '../../Images/ImgBookmark'
import ImgFavorite from '../../Images/ImgFavorite'

type ItemFilmProps = {
  text: string
  score: number
  backdrop_path: string
  poster_path: string
}

const ItemFilm = ({ text, score, backdrop_path, poster_path }: ItemFilmProps) => {
  const viewText = text.length > 80 ? text.slice(0, 80) + '..' : text

  const imagePath = poster_path || backdrop_path
  const url = `https://image.tmdb.org/t/p/w500/${imagePath}`
  // console.log(url)

  return (
    <div className="results-item">
      <div className="results-item__image">
        <img src={url} alt="film" />
      </div>
      <div className="results-item__info film">
        <div className="film-actions">
          <div className="film-actions__score">Рейтинг: {score.toFixed(1)}</div>
          <div className="film-actions__favorite">
            <ImgFavorite />
          </div>
          <div className="film-actions__bookmark">
            <ImgBookmark />
          </div>
        </div>
        <div className="film-text">{viewText}</div>
        <div className="film-details">Подробнее</div>
      </div>
    </div>
  )
}

export default ItemFilm
