import React from 'react'
import { IGenres } from '../../redux/actions'

const Filters = ({ genres }) => {
  return (
    <div className="filters">
      <div className="filters-title">Фильтры</div>
      <div className="filters-filters">
        <div className="filters-filters__clear">
          <button>Сбросить все фильтры</button>
        </div>
        <div className="filters-filters__sort">
          <form>
            <label htmlFor="sort">Сортировать по:</label>
            <select name="sort" id="sort">
              <option value="descending">Популярные по убыванию</option>
              <option value="ascending">Популярные по возрастанию</option>
            </select>
          </form>
        </div>
        <div className="filters-filters__years">
          <form>
            <label htmlFor="year">Год релиза:</label>
            <select name="year" id="year">
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </form>
        </div>
        <div className="filters-filters__genres">
          {genres.map(({ id, name }: IGenres) => {
            return (
              <div key={id}>
                <input type="checkbox" name="" id={String(id)} />
                <label htmlFor={String(id)}>{name}</label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="filters-pagination">
        <div className="filters-pagination__buttons">
          <button>Назад</button>
          <button>Вперед</button>
        </div>
        <div className="filters-pagination__info">1 of 1455</div>
      </div>
    </div>
  )
}

export default Filters
