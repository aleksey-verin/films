import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IFilms } from '../../types/types'
import { setLengthOfFilteredList, setShownList } from '../../store/actions/actionsPagination'
import { filterListData, filterYearData, sortingData } from '../../utils/constants'
import { selectorReducerFavAndSee } from '../../store/reducers/reducerFavAndSee'
import { selectorReducerFilters } from '../../store/reducers/reducerFilters'
import { selectorReducerData } from '../../store/reducers/reducerData'
import Pagination from './Filters/Pagination'
import ResetFilters from './Filters/ResetFilters'
import FilterFilmList from './Filters/FilterFilmList'
import FilterSorting from './Filters/FilterSorting'
import FilterYear from './Filters/FilterYear'
import FilterGenres from './Filters/FilterGenres'
import { setFilteredList } from '../../store/actions/actionsFilters'

const Filters = () => {
  const dispatch = useDispatch()

  const { filmsData: initialFilmsList } = useSelector(selectorReducerData)
  const { favoriteList, seeLaterList } = useSelector(selectorReducerFavAndSee) // объединить две строчки
  const { filterFilmLists, filterSorting, filterYear, filterGenres } =
    useSelector(selectorReducerFilters)

  const filteringInitialFilmData = (filmType: string): IFilms[] => {
    switch (filmType) {
      case filterListData.allFilms.value:
        return initialFilmsList
      case filterListData.favoriteList.value:
        return favoriteList
      case filterListData.seeLaterList.value:
        return seeLaterList
      default:
        return initialFilmsList
    }
  }

  const filteringSortingData = (data: IFilms[], sortType: string): IFilms[] => {
    switch (sortType) {
      case sortingData.popularDescending.value:
        return [...data.sort((a, b) => b.popularity - a.popularity)]
      case sortingData.popularAscending.value:
        return [...data.sort((a, b) => a.popularity - b.popularity)]
      case sortingData.voteDescending.value:
        return [...data.sort((a, b) => b.vote_average - a.vote_average)]
      case sortingData.voteAscending.value:
        return [...data.sort((a, b) => a.vote_average - b.vote_average)]
      default:
        return data
    }
  }

  const filteringDataYear = (data: IFilms[], year: string): IFilms[] => {
    if (year !== filterYearData.none.value) {
      return [...data.filter((item) => item.release_date.substr(0, 4) === year)]
    } else {
      return [...data]
    }
  }

  const filteringDataGenres = (data: IFilms[], genres: number[]): IFilms[] => {
    if (!genres.length) return data
    return data.filter((item) => {
      if (genres.every((value) => item.genre_ids.includes(value))) {
        return item
      }
    })
  }

  const getFilteredData = (filmList: string, sorting: string, year: string, genres: number[]) => {
    const filteredByInitialData = filteringInitialFilmData(filmList)
    dispatch(setFilteredList(filteredByInitialData))
    const filterBySortingData = filteringSortingData(filteredByInitialData, sorting)
    const filteredByYearData = filteringDataYear(filterBySortingData, year)
    const finalFilteredData = filteringDataGenres(filteredByYearData, genres)
    return finalFilteredData
  }

  useEffect(() => {
    const filteredData = getFilteredData(filterFilmLists, filterSorting, filterYear, filterGenres)
    dispatch(setShownList(filteredData))
    dispatch(setLengthOfFilteredList(filteredData))
  }, [filterSorting, filterYear, filterGenres, filterFilmLists])

  return (
    <div className="filters">
      <div className="filters-title">Фильтры</div>
      <div className="filters-filters">
        <ResetFilters />
        <FilterFilmList />
        <FilterSorting />
        <FilterYear />
        <FilterGenres />
      </div>
      <Pagination />
    </div>
  )
}

export default Filters
