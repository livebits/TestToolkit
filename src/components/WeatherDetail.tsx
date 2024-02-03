
type WeatherDetailProps = {
    weather: any
}

const WeatherDetail = ({weather}: WeatherDetailProps) => {
    return (
        <div>Temp: {weather.temp}°C</div>
    )
}

export default WeatherDetail;