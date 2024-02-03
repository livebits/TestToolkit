export const FetchWeather = (city: string) => {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    ).then((response) => {
        return response.json();
    }).then((data) => {
        return data.main;
    }).catch((error) => {        
        throw new Error(error);
    });
};