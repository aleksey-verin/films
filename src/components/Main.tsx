import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IFilms, setGenres } from '../redux/actions'
import { IRootState } from '../redux/redux'
import { requestFilms, requestGenres } from '../server/request'
import Filters from './Main/Filters'
import Results from './Main/Results'

const defaultFiltersValue = {
  list: 'allFilms',
  sorting: 'voteDescending',
  filterYear: 'none',
  filterGenres: []
}

const Main = () => {
  console.log('render Main')
  const dispatch = useDispatch()
  const initialFilmsList = useSelector((state: IRootState) => state.reducerData.filmsData)
  const initialFavoriteList = useSelector((state: IRootState) => state.reducerData.favoriteList)
  const initialSeeLaterList = useSelector((state: IRootState) => state.reducerData.seeLaterList)
  const genres = useSelector((state: IRootState) => state.reducerData.genresData)

  const [filteredList, setFilteredList] = useState([])
  const [offset, setOffset] = useState(12)

  const pagination = 12
  const filteredListLength = filteredList.length

  const [shownList, setShownList] = useState([])

  //==============
  const requestData = async () => {
    const responseFilms = await requestFilms()
    const responseGenres = await requestGenres()

    if (responseFilms && responseGenres) {
      // dispatch(setFilms(responseFilms))
      dispatch(setGenres(responseGenres))
    }
  }
  useEffect(() => {
    return () => {
      requestData()
    }
  }, [])

  //================
  const [userFilmList, setUserFilmList] = useState(defaultFiltersValue.list)
  const [sorting, setSorting] = useState(defaultFiltersValue.sorting)
  const [filterYear, setFilterYear] = useState(defaultFiltersValue.filterYear)
  const [filterGenres, setFilterGenres] = useState(defaultFiltersValue.filterGenres)

  const getUserFilmList = (listType: string) => {
    setUserFilmList(listType)
  }

  const getSorting = (sortType: string) => {
    setSorting(sortType)
  }
  const getFilterYear = (year: string) => {
    setFilterYear(year)
  }
  const getFilterGenres = (genre: number, checked: boolean) => {
    if (checked) {
      setFilterGenres([...filterGenres, genre])
    } else {
      setFilterGenres(filterGenres.filter((item) => item !== genre))
    }
  }

  const resetAllFilters = () => {
    console.log('reset')
    setUserFilmList(defaultFiltersValue.list)
    setSorting(defaultFiltersValue.sorting)
    setFilterYear(defaultFiltersValue.filterYear)
    setFilterGenres(defaultFiltersValue.filterGenres)
    resetOffset()
  }

  const getInitialFilmData = (filmType: string) => {
    switch (filmType) {
      case 'allFilms':
        return initialFilmsList
      case 'favoriteList':
        return initialFavoriteList
      case 'seeLaterList':
        return initialSeeLaterList
      default:
        break
    }
  }

  const getSortData = (data: IFilms[], sortType: string) => {
    switch (sortType) {
      case 'popularDescending':
        return [...data.sort((a, b) => b.popularity - a.popularity)]
      case 'popularAscending':
        return [...data.sort((a, b) => a.popularity - b.popularity)]
      case 'voteDescending':
        return [...data.sort((a, b) => b.vote_average - a.vote_average)]
      case 'voteAscending':
        return [...data.sort((a, b) => a.vote_average - b.vote_average)]
      default:
        break
    }
  }

  const getFilteredData = (data: IFilms[], year: string, genres: number[]) => {
    let newData = []
    if (year !== 'none') {
      newData = [...data.filter((item) => item.release_date.substr(0, 4) === year)]
    } else {
      newData = [...data]
    }

    if (!genres.length) return newData

    newData = newData.filter((item) => {
      if (genres.every((value) => item.genre_ids.includes(value))) {
        return item
      }
    })
    return newData
  }

  useEffect(() => {
    console.log('useEffect calc')
    const userInitialFilmList = getInitialFilmData(userFilmList)
    const sortedData = getSortData(userInitialFilmList, sorting)
    const filteredData = getFilteredData(sortedData, filterYear, filterGenres)
    setFilteredList(filteredData)
  }, [sorting, filterYear, filterGenres, userFilmList])

  //=======
  // useEffect(()=> {
  //   return () => {
  // dispatch(setFilms(mockData))
  //   }
  // },[])
  //====================
  const decreaseOffset = () => {
    if (offset > pagination) {
      setOffset(offset - pagination)
    }
  }

  const increaseOffset = () => {
    if (offset < filteredListLength) {
      setOffset(offset + pagination)
    }
  }

  const resetOffset = () => {
    setOffset(pagination)
  }

  useEffect(() => {
    setShownList(filteredList.slice(offset - pagination, offset))
  }, [offset, filteredList])

  console.log(filteredList)

  return (
    <main>
      <div className="wrapper">
        <Filters
          genres={genres}
          offset={offset}
          decreaseOffset={decreaseOffset}
          increaseOffset={increaseOffset}
          pagination={pagination}
          filteredListLength={filteredListLength}
          getSorting={getSorting}
          getFilterYear={getFilterYear}
          sorting={sorting}
          filterYear={filterYear}
          getFilterGenres={getFilterGenres}
          filterGenres={filterGenres}
          resetAllFilters={resetAllFilters}
          resetOffset={resetOffset}
          userFilmList={userFilmList}
          getUserFilmList={getUserFilmList}
        />
        <Results shownList={shownList} />
      </div>
    </main>
  )
}

export default Main
