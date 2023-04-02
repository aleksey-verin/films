import React from 'react'
import { resetFilters } from '../../../store/actions/actionsFilters'
import { resetOffset } from '../../../store/actions/actionsPagination'
import { useDispatch } from 'react-redux'

const ResetFilters = () => {
  const dispatch = useDispatch()

  const resetAllFilters = () => {
    dispatch(resetFilters())
    dispatch(resetOffset())
  }

  return (
    <div className="filters-filters__clear">
      <button onClick={resetAllFilters}>Сбросить все фильтры</button>
    </div>
  )
}

export default ResetFilters
