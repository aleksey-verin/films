import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterYEar } from '../../../store/actions/actionsFilters'
import { resetOffset } from '../../../store/actions/actionsPagination'
import { selectorReducerFilters } from '../../../store/reducers/reducerFilters'
import { filterYearData } from '../../../utils/constants'

const FilterYear = () => {
  const dispatch = useDispatch()
  const { filterYear } = useSelector(selectorReducerFilters)

  const handleFilterYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userFilterYear = e.target.value
    dispatch(setFilterYEar(userFilterYear))
    dispatch(resetOffset())
  }

  return (
    <div className="filters-filters__years">
      <form>
        <label htmlFor="year">Год релиза:</label>
        <select onChange={handleFilterYear} value={filterYear} name="year" id="year">
          {Object.entries(filterYearData)
            .map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))
            .reverse()}
        </select>
      </form>
    </div>
  )
}

export default FilterYear
