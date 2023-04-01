import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store/store'
import { IFilms, IGenres } from '../../types/types'
import { selectorReducerPagination } from '../../store/reducers/reducerPagination'
import {
  decreaseOffset,
  increaseOffset,
  resetOffset,
  setShownList
} from '../../store/actions/actionsPagination'
import { filterYearData, sortingData } from '../../utils/constants'

type FiltersProps = {
  // offset: number
  // decreaseOffset: () => void
  // increaseOffset: () => void
  // pagination: number
  // filteredListLength: number
  filteredList: IFilms[]
  getSorting: (sortType: string) => void
  getFilterYear: (year: string) => void
  sorting: string
  filterYear: string
  getFilterGenres: (genre: number, checked: boolean) => void
  filterGenres: number[]
  resetAllFilters: () => void
  // resetOffset: () => void
  userFilmList: string
  getUserFilmList: (listType: string) => void
}

const Filters = ({
  // offset,
  // decreaseOffset,
  // increaseOffset,
  // pagination,
  // filteredListLength,
  filteredList,
  getSorting,
  getFilterYear,
  sorting,
  filterYear,
  getFilterGenres,
  filterGenres,
  resetAllFilters,
  // resetOffset,
  userFilmList,
  getUserFilmList
}: FiltersProps) => {
  const dispatch = useDispatch()

  const isAuth = useSelector((state: IRootState) => state.reducerAuth.isAuth)
  const genres = useSelector((state: IRootState) => state.reducerGenres.genresData)

  const { pagination, offset, lengthFilteredList } = useSelector(selectorReducerPagination)

  const currentPage = offset / pagination
  const amountOfPages = Math.ceil(lengthFilteredList / pagination)

  const handleFilmList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filmList = e.target.value
    getUserFilmList(filmList)
    dispatch(resetOffset())
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBasicType = e.target.value
    getSorting(sortBasicType)
    dispatch(resetOffset())
  }

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userFilterYear = e.target.value
    getFilterYear(userFilterYear)
    dispatch(resetOffset())
  }

  const handleGenres = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userGenres = Number(e.target.value)
    const checked = e.target.checked
    getFilterGenres(userGenres, checked)
    dispatch(resetOffset())
  }

  const handleBack = () => {
    dispatch(decreaseOffset())
    dispatch(setShownList(filteredList))
  }
  const handleForward = () => {
    dispatch(increaseOffset())
    dispatch(setShownList(filteredList))
  }

  return (
    <div className="filters">
      <div className="filters-title">Фильтры</div>
      <div className="filters-filters">
        <div className="filters-filters__clear">
          <button onClick={resetAllFilters}>Сбросить все фильтры</button>
        </div>
        <div className="filters-filters__lists">
          <form>
            <label htmlFor="list">Список фильмов:</label>
            <select onChange={handleFilmList} value={userFilmList} name="list" id="list">
              <option value="allFilms">Все фильмы</option>
              <option disabled={!isAuth} value="favoriteList">
                Избранные
              </option>
              <option disabled={!isAuth} value="seeLaterList">
                Посмотреть позже
              </option>
            </select>
          </form>
        </div>
        <div className="filters-filters__sort">
          <form>
            <label htmlFor="sort">Сортировать по:</label>
            <select onChange={handleSort} value={sorting} name="sort" id="sort">
              {sortingData.map(({ name, value }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="filters-filters__years">
          <form>
            <label htmlFor="year">Год релиза:</label>
            <select onChange={handleFilter} value={filterYear} name="year" id="year">
              {filterYearData.map(({ name, value }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="filters-filters__genres">
          <form name="genres">
            {genres.map(({ id, name }: IGenres) => {
              return (
                <div key={id}>
                  <input
                    onChange={handleGenres}
                    checked={filterGenres.includes(id)}
                    value={id}
                    type="checkbox"
                    name="genres"
                    id={String(id)}
                  />
                  <label htmlFor={String(id)}>{name}</label>
                </div>
              )
            })}
          </form>
        </div>
      </div>
      <div className="filters-pagination">
        <div className="filters-pagination__buttons">
          <div className="filters-pagination__button-left">
            <button disabled={offset <= pagination} onClick={handleBack}>
              Назад
            </button>
          </div>
          <div className="filters-pagination__button-right">
            <button disabled={offset >= lengthFilteredList} onClick={handleForward}>
              Вперед
            </button>
          </div>
        </div>
        <div className="filters-pagination__info">{`${currentPage} of ${
          amountOfPages ? amountOfPages : '1'
        }`}</div>
      </div>
    </div>
  )
}

export default Filters
