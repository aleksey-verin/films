import React, { useEffect, useState } from 'react'
import { IGenres } from '../../redux/actions'

type FiltersProps = {
  genres: IGenres[]
  offset: number
  decreaseOffset: () => void
  increaseOffset: () => void
  pagination: number
  filteredListLength: number
  getSorting: (sortType: string) => void
  getFilterYear: (year: string) => void
  sorting: string
  filterYear: string
  getFilterGenres: (genre: number, checked: boolean) => void
  filterGenres: number[]
  resetAllFilters: () => void
  resetOffset: () => void
}

const Filters = ({
  genres,
  offset,
  decreaseOffset,
  increaseOffset,
  pagination,
  filteredListLength,
  getSorting,
  getFilterYear,
  sorting,
  filterYear,
  getFilterGenres,
  filterGenres,
  resetAllFilters,
  resetOffset
}: FiltersProps) => {
  console.log('render Filters')

  const currentPage = offset / pagination
  const amountOfPages = Math.ceil(filteredListLength / pagination)

  const handleSort = (e) => {
    const sortBasicType = e.target.value
    console.log(sortBasicType)
    getSorting(sortBasicType)
  }

  const handleFilter = (e) => {
    const userFilterYear = e.target.value
    console.log(userFilterYear)
    getFilterYear(userFilterYear)
  }

  const handleGenres = (e) => {
    const userGenres = Number(e.target.value)
    const checked = e.target.checked
    getFilterGenres(userGenres, checked)
    resetOffset()
  }

  return (
    <div className="filters">
      <div className="filters-title">Фильтры</div>
      <div className="filters-filters">
        <div className="filters-filters__clear">
          <button onClick={resetAllFilters}>Сбросить все фильтры</button>
        </div>
        <div className="filters-filters__sort">
          <form>
            <label htmlFor="sort">Сортировать по:</label>
            <select onChange={handleSort} value={sorting} name="sort" id="sort">
              <option value="popularDescending">Популярные по убыванию</option>
              <option value="popularAscending">Популярные по возрастанию</option>
              <option value="voteDescending">Рейтинг по убыванию</option>
              <option value="voteAscending">Рейтинг по возрастанию</option>
            </select>
          </form>
        </div>
        <div className="filters-filters__years">
          <form>
            <label htmlFor="year">Год релиза:</label>
            <select onChange={handleFilter} value={filterYear} name="year" id="year">
              <option value="none">Без фильтра</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
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
            <button disabled={offset <= pagination} onClick={decreaseOffset}>
              Назад
            </button>
          </div>
          <div className="filters-pagination__button-right">
            <button disabled={offset >= filteredListLength} onClick={increaseOffset}>
              Вперед
            </button>
          </div>
        </div>
        <div className="filters-pagination__info">{`${currentPage} of ${amountOfPages}`}</div>
      </div>
    </div>
  )
}

export default Filters
