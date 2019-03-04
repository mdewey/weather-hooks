import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function WeatherSearch(props) {
  const _zip = props.zip || '33716'
  const [search, setSearch] = useState(_zip)
  const [weather, setWeather] = useState({})

  const fetchWeather = e => {
    const key = '5c418bd61b262dfeab5ee02852a70c07'
    const _url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`
    if (search.length > 4) {
      axios.get(_url).then(resp => {
        console.log({ resp })
        setWeather(resp.data)
      })
    }
  }
  useEffect(() => {
    fetchWeather()
  }, [search])
  return (
    <section>
      searching for {search}
      <br />
      <form>
        <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      {weather.weather ? weather.weather[0].main : ''}
    </section>
  )
}
