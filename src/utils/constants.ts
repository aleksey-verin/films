export const sortingData = [
  { value: 'popularDescending', name: 'Популярные по убыванию' },
  { value: 'popularAscending', name: 'Популярные по возрастанию' },
  { value: 'voteDescending', name: 'Рейтинг по убыванию' },
  { value: 'voteAscending', name: 'Рейтинг по возрастанию' }
]
export const sortingValues = Object.fromEntries(sortingData.map((item) => [item.value, item.value]))

export const filterYearData = [
  { value: 'none', name: 'Без фильтра' },
  { value: '2020', name: '2020' },
  { value: '2019', name: '2019' },
  { value: '2018', name: '2018' },
  { value: '2017', name: '2017' }
]
export const filterYearValues = Object.fromEntries(
  filterYearData.map((item) => [item.value, item.value])
)
