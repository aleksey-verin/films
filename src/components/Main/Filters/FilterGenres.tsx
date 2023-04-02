import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorReducerFilters } from '../../../store/reducers/reducerFilters'
import { setFilterGenres } from '../../../store/actions/actionsFilters'
import { resetOffset } from '../../../store/actions/actionsPagination'
import { IGenres } from '../../../types/types'
import { selectorReducerGenres } from '../../../store/reducers/reducerGenres'

const FilterGenres = () => {
  const dispatch = useDispatch()
  const { filterGenres } = useSelector(selectorReducerFilters)
  const { genresData } = useSelector(selectorReducerGenres)

  const handleFilterGenres = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterGenresValue: number[]
  ) => {
    const userGenres = Number(e.target.value)
    const checked = e.target.checked
    const genres = checked
      ? [...filterGenresValue, userGenres]
      : filterGenresValue.filter((item) => item !== userGenres)
    dispatch(setFilterGenres(genres))
    dispatch(resetOffset())
  }

  const checkGenre = (checkedGenres: number[], id: number): boolean => {
    return checkedGenres.includes(id) ? true : false
  }

  return (
    <div className="filters-filters__genres">
      <form name="genres">
        {genresData.map(({ id, name }: IGenres) => {
          return (
            <div key={id}>
              <input
                onChange={(e) => handleFilterGenres(e, filterGenres)}
                checked={checkGenre(filterGenres, id)}
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
  )
}

export default FilterGenres
