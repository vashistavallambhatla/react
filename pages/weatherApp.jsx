import { useState } from "react"
import getWeatherInfo from "../components/fetchWeather"
import { useQuery } from "@tanstack/react-query"

export default function WeatherApp() {
  const [city, setCity] = useState("")
  const apiKey = '40293af489b62c10135459915e8e14df'

  const { data: weather, isLoading, error, refetch } = useQuery({
    queryKey: ["weatherInfo",city],
    queryFn: () => getWeatherInfo(city, apiKey),
    enabled: false,
    retry: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city) {
      refetch()
    }
  }

  return (
    <div className="weather-block">
      <form onSubmit={handleSubmit} className="weatherApp-form">
        <label htmlFor='cities'>Which city are you looking for:</label>
        <input 
          name="cities" 
          type="text" 
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button type="submit">Fetch</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      
      {weather && (
        <>
          <div className="weather-report">
            <img 
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
              alt="Weather icon"
            />
            <span>🌡️{weather.temperature} &deg;C</span>
          </div>
          <p>{weather.description}</p>
        </>
      )}
    </div>
  )
}