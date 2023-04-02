import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseOffset,
  increaseOffset,
  setShownList
} from '../../../store/actions/actionsPagination'
import { selectorReducerPagination } from '../../../store/reducers/reducerPagination'
import { selectorReducerFilters } from '../../../store/reducers/reducerFilters'

const Pagination = () => {
  const dispatch = useDispatch()
  const { pagination, offset, lengthFilteredList } = useSelector(selectorReducerPagination)
  const { filteredList } = useSelector(selectorReducerFilters)

  const currentPage = offset / pagination
  const amountOfPages = Math.ceil(lengthFilteredList / pagination)

  const handleBack = () => {
    dispatch(decreaseOffset())
    dispatch(setShownList(filteredList))
  }
  const handleForward = () => {
    dispatch(increaseOffset())
    dispatch(setShownList(filteredList))
  }

  return (
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
  )
}

export default Pagination
