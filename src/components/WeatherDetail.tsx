
type WeatherDetailProps = {
    weather: any
}

const WeatherDetail = ({weather}: WeatherDetailProps) => {
    return (
        <div className="WeatherDetail">
            Temp: {weather.temp}°C
        </div>
    )
}

export default WeatherDetail;