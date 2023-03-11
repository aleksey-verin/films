import React from 'react'
import { IFilms } from '../../redux/actions'
import ItemFilm from './Results/ItemFilm'

const Results = ({ shownList }) => {
  // const { id, } = filmsList
  return (
    <div className="results">
      {shownList
        ? shownList.map((item) => {
            return <ItemFilm key={item.id} item={item} />
          })
        : null}
    </div>
  )
}

export default Results
