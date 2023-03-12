import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { IRootState } from '../redux/redux'

const PageFilm = () => {
  const { id } = useParams()

  const filmList = useSelector((state: IRootState) => state.reducerData.filmsData)
  const genres = useSelector((state: IRootState) => state.reducerData.genresData)
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

  console.log(genre_ids)
  console.log(genres)
  let genreView = ''
  if (genres.length && genre_ids.length) {
    const genresForFilm = genre_ids.map((filmGenre) => {
      return genres.find((item) => item.id === filmGenre)
    })
    genreView = genresForFilm.map((item) => item.name).join(', ')
  }

  const styleBackground = {
    backgroundImage: `url(${backgroundPath})`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div className="single-page">
      <div style={styleBackground} className="description">
        <div className="description-blur">
          <div className="description-content">
            <div className="description-image">
              <img src={imagePath} alt="" />
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
          <div className="details-item__text">{genreView}</div>
        </div>
      </div>
    </div>
  )
}

export default PageFilm

// adult: false
// backdrop_path: '/8NEvnVKeGMLEXG45MMNqxJLcM4y.jpg'
// genre_ids: (3)[(28, 16, 14)]
// id: 820232
// original_language: 'ja'
// original_title: '鬼滅の刃 兄妹の絆'
// overview: 'Эпоха Тайсё. Ещё с древних времён ходят слухи, что в лесу обитают человекоподобные демоны, которые питаются людьми и выискивают по ночам новых жертв. Тандзиро Камадо — старший сын в семье, потерявший отца и взявший на себя заботу о родных. Однажды он уходит в соседний город, чтобы продать древесный уголь. Вернувшись утром, парень обнаруживает перед собой страшную картину: вся родня зверски убита, а единственная выжившая — младшая сестра Нэдзуко, обращённая в демона, но пока не потерявшая человечность. С этого момента начинается долгое и опасное путешествие Тандзиро и Нэдзуко, в котором мальчик намерен разыскать убийцу и узнать способ исцеления сестры.'
// popularity: 156.044
// poster_path: '/99cJLZkNoIFmufJ4yap6ZABl4nk.jpg'
// release_date: '2019-03-29'
// title: 'Клинок, рассекающий демонов: Узы брата и сестры'
// video: false
// vote_average: 8.7
// vote_count: 35
