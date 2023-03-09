import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mockData } from '../mockData/mockdata'
import { setFilms, setGenres } from '../redux/actions'
import { requestFilms, requestGenres } from '../server/request'
import Filters from './Main/Filters'
import Results from './Main/Results'

const Main = () => {
  const dispatch = useDispatch()
  const filmsList = useSelector((state) => state.filmsData)
  const genres = useSelector((state) => state.genresData)

  const requestData = async () => {
    const responseFilms = await requestFilms()
    const responseGenres = await requestGenres()

    if (responseFilms && responseGenres) {
      // dispatch(setFilms(responseFilms))
      dispatch(setGenres(responseGenres))
    }
  }
  //=======
  dispatch(setFilms(mockData))

  //=======

  useEffect(() => {
    return () => {
      requestData()
    }
  }, [])

  console.log(filmsList)
  console.log(genres)

  return (
    <main>
      <div className="wrapper">
        <Filters genres={genres} />
        <Results filmsList={filmsList} />
      </div>
    </main>
  )
}

export default Main
