import { useState } from "react"
import getWeatherInfo from "../components/fetchWeather"

export default function WeatherApp(){
    const [city,setCity] = useState("")
    const [weather,setWeather] = useState(null)
    const apiKey = '40293af489b62c10135459915e8e14df'

    async function handleSubmit(){
        setWeather(await getWeatherInfo(city,apiKey))
    }

    return (
        <>
          <form action={handleSubmit} className="weatherApp-form">
            <label for='cities'>Which city are you looking for:</label>
            <input name="cities" type="text" onChange={e => setCity(e.target.value)}></input>
            <button>Fetch</button>
          </form>
          {
            weather && (
                <>
                  <div className="weather-report">
                    <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
                    <span>🌡️{weather.temperature} &deg;C</span>
                  </div>
                  <p>{weather.description}</p>
                </>
            )
          }
        </>
    )
}