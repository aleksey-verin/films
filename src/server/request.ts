export const requestFilms = async () => {
  try {
    const responseList = await fetch('/list.json')
    if (responseList.ok) {
      const dataFilms = await responseList.json()
      return dataFilms
    }
  } catch (err) {
    console.log(err)
  }
}

export const requestGenres = async () => {
  try {
    const responseList = await fetch('/genres.json')
    if (responseList.ok) {
      const dataGenres = await responseList.json()
      return dataGenres
    }
  } catch (err) {
    console.log(err)
  }
}
