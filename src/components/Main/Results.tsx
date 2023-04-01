import React from 'react'
import ItemFilm from './Results/ItemFilm'
import { useSelector } from 'react-redux'
import { selectorReducerPagination } from '../../store/reducers/reducerPagination'

const Results = () => {
  const { shownList } = useSelector(selectorReducerPagination)

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
