import { IGenres } from '../store/actions'

export const transformGenresIntoString = (genresList: IGenres[], genresItem: number[]): string => {
  if (genresList.length && genresItem.length) {
    const genresForFilm = genresItem.map((filmGenre) => {
      return genresList.find((item) => item.id === filmGenre)
    })
    return genresForFilm.map((item) => item?.name).join(', ')
  }
  return 'Жанр неизвестен'
}
