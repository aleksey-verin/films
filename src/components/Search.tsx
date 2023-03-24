import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IFilms, IGenres } from '../redux/actions'
import { IRootState } from '../redux/redux'
import { RouteNames } from '../routes/routes'
import ItemFilmForSearch from './Main/Results/ItemFilmForSearch'

const userView = {
  question1: 'question1',
  question2: 'question2',
  question3: 'question3',
  result: 'result'
}

const userAnswer = {
  high: 'high',
  low: 'low'
}

const Search = () => {
  const initialFilmsList = useSelector((state: IRootState) => state.reducerData.filmsData)
  const genres = useSelector((state: IRootState) => state.reducerGenres.genresData)
  if (!genres || !initialFilmsList) return <div>Не удалось загрузить данные с сервера</div>

  const [userGenre, setUserGenre] = useState<number | null>(null)
  const [userScore, setUserScore] = useState<string | null>(null)
  const [userPopular, setUserPopular] = useState<string | null>(null)
  const [filteredList, setFilteredList] = useState<IFilms[]>([])

  const [visibleForUser, setVisibleForUser] = useState(userView.question1)

  const [numberOfFilms, setNumberOfFilms] = useState<number>(0)
  const [filmCounter, setFilmCounter] = useState(0)
  const [endOfFilteredList, setEndOfFilteredList] = useState(false)

  const getActualGenres = (initialList: IFilms[], genres: IGenres[]): IGenres[] => {
    const genresFromInitialList = [...new Set(initialList.map((item) => item.genre_ids).flat())]
    const genresForFilm = genresFromInitialList.map((filmGenre) => {
      return genres.find((item) => item.id === filmGenre)
    })
    return genresForFilm.filter((genre) => genre !== undefined) as IGenres[]
  }

  const actualGenres = getActualGenres(initialFilmsList, genres) || []

  const handleGenre = (id: number) => {
    if (!id) return
    setUserGenre(id)
    setVisibleForUser(userView.question2)
  }

  const handleScore = (score: string) => {
    setUserScore(score)
    setVisibleForUser(userView.question3)
  }

  const handlePopular = (score: string) => {
    setUserPopular(score)
    setVisibleForUser(userView.result)
  }

  const getFilteredData = (
    filmsList: IFilms[],
    genre: number | null,
    score: string | null,
    popular: string | null
  ) => {
    let userFilmList = filmsList
    if (genre) {
      userFilmList = userFilmList.filter((item) => item.genre_ids.includes(genre))
    }
    if (score === userAnswer.high) {
      userFilmList = userFilmList.filter((item) => item.vote_average >= 5)
    }
    if (score === userAnswer.low) {
      userFilmList = userFilmList.filter((item) => item.vote_average < 5)
    }
    if (popular === userAnswer.high) {
      userFilmList = userFilmList.filter((item) => item.popularity >= 100 && item.vote_count >= 200)
    }
    if (popular === userAnswer.low) {
      userFilmList = userFilmList.filter((item) => item.popularity < 100 && item.vote_count < 200)
    }
    return userFilmList
  }

  const handleFilmCounter = () => {
    if (filmCounter !== numberOfFilms - 1) {
      setFilmCounter(filmCounter + 1)
    } else {
      setEndOfFilteredList(true)
    }
  }

  const handleEndOfFilteredList = () => {
    setVisibleForUser(userView.question1)
    setEndOfFilteredList(false)
  }

  useEffect(() => {
    const filteredData = getFilteredData(initialFilmsList, userGenre, userScore, userPopular)
    setFilteredList(filteredData)
  }, [userGenre, userScore, userPopular])

  useEffect(() => {
    if (!filteredList) return
    setNumberOfFilms(filteredList.length)
  }, [filteredList])


  return (
    <div className="search">
      <div className="search-wrapper">
        {visibleForUser === userView.question1 && (
          <div className="question">
            <h2 className="question-title">Выберите жанр:</h2>
            <div className="question-variants">
              {actualGenres.map((item) => (
                <button
                  onClick={() => handleGenre(item.id)}
                  key={item?.id}
                  className="question-variants__item">
                  {item?.name}
                </button>
              ))}
            </div>
          </div>
        )}
        {visibleForUser === userView.question2 && (
          <div className="question">
            <h2 className="question-title">Оценка фильма:</h2>
            <div className="question-variants">
              <button
                onClick={() => handleScore(userAnswer.high)}
                className="question-variants__item">
                Высокая
              </button>
              <button
                onClick={() => handleScore(userAnswer.low)}
                className="question-variants__item">
                Низкая
              </button>
            </div>
          </div>
        )}
        {visibleForUser === userView.question3 && (
          <div className="question">
            <h2 className="question-title">Известность фильма:</h2>
            <div className="question-variants">
              <button
                onClick={() => handlePopular(userAnswer.high)}
                className="question-variants__item">
                Популярный
              </button>
              <button
                onClick={() => handlePopular(userAnswer.low)}
                className="question-variants__item">
                Неизвестный
              </button>
            </div>
          </div>
        )}
        {visibleForUser === userView.result && (
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
        )}
      </div>
    </div>
  )
}

export default Search
