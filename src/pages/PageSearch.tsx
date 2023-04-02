import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IFilms } from '../types/types'
import { selectorReducerData } from '../store/reducers/reducerData'
import { selectorReducerGenres } from '../store/reducers/reducerGenres'
import QuestionOne from '../components/Search/QuestionOne'
import QuestionTwo from '../components/Search/QuestionTwo'
import QuestionThree from '../components/Search/QuestionThree'
import Result from '../components/Search/Result'

const userView = {
  question1: 'question1',
  question2: 'question2',
  question3: 'question3',
  result: 'result'
}

export const userAnswer = {
  high: 'high',
  low: 'low'
}

const PageSearch = () => {
  const { filmsData: initialFilmsList } = useSelector(selectorReducerData)
  const { genresData: genres } = useSelector(selectorReducerGenres)

  if (!genres || !initialFilmsList) return <div>Не удалось загрузить данные</div>

  const [userGenre, setUserGenre] = useState<number>(0)
  const [userScore, setUserScore] = useState<string>('')
  const [userPopular, setUserPopular] = useState<string>('')
  const [filteredList, setFilteredList] = useState<IFilms[]>([])

  const [visibleForUser, setVisibleForUser] = useState(userView.question1)

  const [numberOfFilms, setNumberOfFilms] = useState<number>(0)
  const [filmCounter, setFilmCounter] = useState(0)
  const [endOfFilteredList, setEndOfFilteredList] = useState(false)

  const getFilteredData = (filmsList: IFilms[], genre: number, score: string, popular: string) => {
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

  return (
    <div className="search">
      <div className="search-wrapper">
        {visibleForUser === userView.question1 && <QuestionOne handleGenre={handleGenre} />}
        {visibleForUser === userView.question2 && <QuestionTwo handleScore={handleScore} />}
        {visibleForUser === userView.question3 && <QuestionThree handlePopular={handlePopular} />}
        {visibleForUser === userView.result && (
          <Result
            filteredList={filteredList}
            endOfFilteredList={endOfFilteredList}
            filmCounter={filmCounter}
            handleFilmCounter={handleFilmCounter}
            handleEndOfFilteredList={handleEndOfFilteredList}
          />
        )}
      </div>
    </div>
  )
}

export default PageSearch
