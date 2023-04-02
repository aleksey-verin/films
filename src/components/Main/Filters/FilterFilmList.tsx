import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterFilmList } from '../../../store/actions/actionsFilters'
import { resetOffset } from '../../../store/actions/actionsPagination'
import { selectorReducerFilters } from '../../../store/reducers/reducerFilters'
import { filterListData } from '../../../utils/constants'
import { selectorReducerAuth } from '../../../store/reducers/reducerAuth'

const FilterFilmList = () => {
  const dispatch = useDispatch()
  const { isAuth } = useSelector(selectorReducerAuth)
  const { filterFilmLists } = useSelector(selectorReducerFilters)

  const handleFilterUserList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filmList = e.target.value
    dispatch(setFilterFilmList(filmList))
    dispatch(resetOffset())
  }

  return (
    <div className="filters-filters__lists">
      <form>
        <label htmlFor="list">Список фильмов:</label>
        <select onChange={handleFilterUserList} value={filterFilmLists} name="list" id="list">
          {Object.entries(filterListData).map(([key, value]) =>
            key === filterListData.allFilms.value ? (
              <option key={key} value={value.value}>
                {value.name}
              </option>
            ) : (
              <option disabled={!isAuth} key={key} value={value.value}>
                {value.name}
              </option>
            )
          )}
        </select>
      </form>
    </div>
  )
}

export default FilterFilmList
