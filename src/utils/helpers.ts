import { IGenres } from '../types/types'

export const transformGenresIntoString = (genresList: IGenres[], genresItem: number[]): string => {
  if (genresList.length && genresItem.length) {
    const genresForFilm = genresItem.map((filmGenre) => {
      return genresList.find((item) => item.id === filmGenre)
    })
    return genresForFilm.map((item) => item?.name).join(', ')
  }
  return 'Жанр неизвестен'
}

// решил не использовать
// const getActualGenres = (initialList: IFilms[], genres: IGenres[]): IGenres[] => {
//   const genresFromInitialList = [...new Set(initialList.map((item) => item.genre_ids).flat())]
//   const genresForFilm = genresFromInitialList.map((filmGenre) => {
//     return genres.find((item) => item.id === filmGenre)
//   })
//   return genresForFilm.filter((genre) => genre !== undefined) as IGenres[]
// }
