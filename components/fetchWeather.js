async function getWeatherInfo(city,API_KEY){
    try{
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        const fullUrl = `${baseUrl}?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(fullUrl)

        if(!response.ok){
            throw new Error("City not found or invalid request");
        }
        const weatherData = await response.json()

        return {
            temperature : weatherData.main.temp,
            main : weatherData.weather[0].main,
            description : weatherData.weather[0].description,
            icon : weatherData.weather[0].icon
        }

    } catch(e){
        throw new Error(e);
    }
}

const API_KEY = '40293af489b62c10135459915e8e14df'
const city = 'London'

export default getWeatherInfo

