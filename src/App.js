import logo from './logo.svg';
import './App.css';
import MainSection from './components/MainSection';
import Search from './components/Search';
import { useState,useEffect } from 'react';
import HourlyMainSection from './components/HourlyMainSection';
import './components/hour.css'

function App() {

  const [name, setName] = useState('')
  const getCityName = (data) => {
    setName(data);
  }
  // code for the  data fetch using api from here all the data will be sent to different components using props 
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=3&appid=16c3f2080c52d8b4abd59a79745842b2`;
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          const { lat, lon } = data[0];
          console.log('Latitude:', lat);
          console.log('Longitude:', lon);

          const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,pressure_msl,surface_pressure,cloudcover,visibility,windspeed_10m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`
          const weatherResponse = await fetch(weatherUrl);

          if (weatherResponse.ok) {
            const weatherData = await weatherResponse.json();
          /*   response(weatherData); */
            console.log(weatherData);
            setWeatherData(weatherData);
            console.log(weatherData.current_weather.windspeed)

          } else {
            console.error('Failed to fetch weather data');
          }
        } else {
          console.error('Failed to fetch location data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchWeatherData();
  }, [name]);


  return (
    <div className='App'>
      <div className='search-section'>
        <Search cityToCoordinates={getCityName} />
      </div>
      <div className='container'>
        <MainSection  weatherData={weatherData} />
        <div className='hourly__section'>
          <HourlyMainSection information={weatherData} />
        </div>
      </div>

    </div>
  );
}

export default App;
