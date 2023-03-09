export const requestFilms = async () => {
  // const serverUrlWeather = 'https://api.openweathermap.org/data/2.5/weather'
  // const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'
  // const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}&lang=ru`
  // const serverUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast'
  // const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}&lang=ru`

  try {
    const responseList = await fetch('./list.json')
    if (responseList.ok) {
      const dataFilms = await responseList.json()
      return dataFilms
    }
  } catch (err) {
    console.log(err)
  }
}

// const transformWeather = (data) => {
//   return {
//     cityName: data.name,
//     timezone: data.timezone
//   }
// }

// export default fetchRequest

export const requestGenres = async () => {
  try {
    const responseList = await fetch('./genres.json')
    if (responseList.ok) {
      const dataGenres = await responseList.json()
      return dataGenres
    }
  } catch (err) {
    console.log(err)
  }
}
