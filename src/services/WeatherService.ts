export const FetchWeather = async (city: string) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((response) => {
        return response.json();
    }).then((data) => {
        return data.main;
    });
};