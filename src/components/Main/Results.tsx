import React from 'react'
import { IFilms } from '../../redux/actions'
import ItemFilm from './Results/ItemFilm'

const Results = ({ filmsList }) => {
  // const { id, } = filmsList
  return (
    <div className="results">
      {filmsList.map(({ id, title, vote_average, backdrop_path, poster_path }) => {
        return (
          <ItemFilm
            key={id}
            text={title}
            score={vote_average}
            backdrop_path={backdrop_path}
            poster_path={poster_path}
          />
        )
      })}
    </div>
  )
}

export default Results
