import React from 'react'
import { IFilms } from '../../types/types'
import ItemFilmForSearch from './ItemFilmForSearch'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../routes/routes'

interface ResultProps {
  filteredList: IFilms[]
  endOfFilteredList: boolean
  filmCounter: number
  handleFilmCounter: () => void
  handleEndOfFilteredList: () => void
}

const Result = ({
  filteredList,
  endOfFilteredList,
  filmCounter,
  handleFilmCounter,
  handleEndOfFilteredList
}: ResultProps) => {
  return (
    <div className="question">
      {filteredList.length && !endOfFilteredList ? (
        <>
          {filmCounter === 0 ? (
            <h2 className="question-title">Нашли такой фильм: </h2>
          ) : (
            <h2 className="question-title">А может такой фильм подойдет? </h2>
          )}
          <div className="question-film">
            <ItemFilmForSearch item={filteredList[filmCounter]} />
          </div>
          <div className="question-variants">
            <button className="question-variants__item">
              <Link to={`${RouteNames.FILMS}${filteredList[filmCounter].id}`}>Подходит</Link>
            </button>
            <button onClick={handleFilmCounter} className="question-variants__item">
              Не подходит
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="question-title">Уфы, у нас нет подходящих фильмов..</h2>
          <div className="question-variants">
            <button onClick={handleEndOfFilteredList} className="question-variants__item">
              Попробовать еще раз
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Result
