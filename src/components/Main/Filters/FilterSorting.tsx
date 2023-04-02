import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterSorting } from '../../../store/actions/actionsFilters'
import { resetOffset } from '../../../store/actions/actionsPagination'
import { sortingData } from '../../../utils/constants'
import { selectorReducerFilters } from '../../../store/reducers/reducerFilters'

const FilterSorting = () => {
  const dispatch = useDispatch()
  const { filterSorting } = useSelector(selectorReducerFilters)

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBasicType = e.target.value
    dispatch(setFilterSorting(sortBasicType))
    dispatch(resetOffset())
  }

  return (
    <div className="filters-filters__sort">
      <form>
        <label htmlFor="sort">Сортировать по:</label>
        <select onChange={handleSorting} value={filterSorting} name="sort" id="sort">
          {Object.entries(sortingData).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default FilterSorting
