import React, { useState } from "react"
import SearchBar from "./SearchBar"
import WeatherDetail from "./WeatherDetail"
import '../styles/Weather.css'
import useGetWeather from "../hooks/useGetWeather"

const Weather = () => {
    const [city, setCity] = useState<string>('')
    const [weather, loading, error, getWeather] = useGetWeather(city)

    return (
        <>
            <div className="weather">
                <SearchBar city={city} setCity={setCity} />
                <button onClick={() => getWeather()} disabled={loading}>
                    {loading ? 'Loading...' : 'Get Weather'}
                </button>
            </div>
            {weather && <WeatherDetail weather={weather} />}
            {error && <div className="error">{error.message}</div>}
        </>
    )

}

export default Weather;