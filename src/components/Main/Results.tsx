import React from 'react'
import { IFilms } from '../../store/actions'
import ItemFilm from './Results/ItemFilm'

type ResultsProps = {
  shownList: IFilms[]
}

const Results = ({ shownList }: ResultsProps) => {
  // const { id, } = filmsList
  return (
    <div className="results">
      {shownList.length ? (
        shownList.map((item) => {
          return <ItemFilm key={item.id} item={item} />
        })
      ) : (
        <div>Нет подходящих фильмов..</div>
      )}
    </div>
  )
}

export default Results
