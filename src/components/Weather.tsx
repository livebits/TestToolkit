import React, { useState } from "react"
import SearchBar from "./SearchBar"
import WeatherDetail from "./WeatherDetail"
import { FetchWeather } from "../services/WeatherService"
import '../styles/Weather.css'

const Weather = () => {
    const [city, setCity] = useState<string>('')
    const [weather, setWeather] = useState<any>(null)

    const getWeather = () => {
        FetchWeather(city).then((response) => {
            setWeather(response)
        })
    }

    return (
        <>
            <div className="Weather">
                <SearchBar city={city} setCity={setCity} />
                <button onClick={() => getWeather()}>Get Weather</button>
            </div>
            {weather && <WeatherDetail weather={weather} />}
        </>
    )

}

export default Weather;