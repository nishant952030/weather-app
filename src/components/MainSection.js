import React, { useEffect, useState } from 'react';
import './mainsection.css';
import cloudyImage from '../images/cloudy.png'
import partlyCloudy from '../images/partlycloudy.png'
import sunny from '../images/sunny-icon-23510.png'
import rainy from '../images/rainy.png'
import lightRain from '../images/Lovepik_com-401247557-father-and-daughter-in-the-rain.png'
import invalid from '../images/pngwing.com.png'

import thunder from '../images/pngwing.com(1).png'
function MainSection({ weatherData }) {
 

  if (!weatherData) {
    return null;
  }

  const windDirection = weatherData.current_weather.winddirection;
  const weatherCode = weatherData.current_weather.weathercode

  const date = new Date();

  // Format the date string
  const formattedDate = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });




  return (
    <div className='weather__main-section'>
      <h1>{formattedDate}</h1>
      <div className='weather__main-section__imgData'>

        {weatherCode === 0 || weatherCode === 1 ? <img className='sunny' src={sunny} alt='Weather' /> :
          (weatherCode === 2 ? <img className='partlycloudy' src={partlyCloudy} alt='Weather' /> :
            (weatherCode === 80 || weatherCode === 61 || weatherCode === 63 || weatherCode === 81 ? <img className='lightrain' src={lightRain} alt='Weather' /> :
              (weatherCode === 65 || weatherCode === 82 ? <img className='rainy' src={rainy} alt='Weather' /> :
                (weatherCode === 96 || weatherCode === 95? <img className='thunder' src={thunder} alt='Weather' /> :
                  (weatherCode === 3 ? <img className='cloudy' src={cloudyImage} alt='Weather' /> :
                    <img className='invalid' src={invalid} alt='Weather' />)))))}


        <div className='temp-min-max-feel'>
          <h1 className='weather__main-section__img&Data-heading'>{Math.floor(weatherData.current_weather.temperature)}°</h1>
          <div className='current__weather_feel'>
            <h4>Feels Like:{weatherData.hourly.apparent_temperature[0]}°</h4>
            <h3>{weatherData.daily.temperature_2m_min[0]}°-{weatherData.daily.temperature_2m_max[0]}°</h3>
          </div>
        </div>
        <div className='weather__details'>
          <p>Humidity: {weatherData.hourly.relativehumidity_2m[0]}%</p>
          <p>Pressure:{weatherData.hourly.pressure_msl[0]} mBar</p>
          <p>Visibility:{(weatherData.hourly.visibility[0]) / 1000} km</p>
          <p>Wind:{weatherData.current_weather.windspeed}</p>
          <p>Wind Direction:{
            windDirection > 0 && windDirection < 90 ? "North-East" :
              (windDirection > 90 && windDirection < 180 ? "North-West" :
                (windDirection > 180 && windDirection < 270 ? "South-West" :
                  (windDirection > 270 && windDirection < 360 ? "South-East" :
                    (windDirection === 0 ? "East" :
                      (windDirection === 90 ? "North" :
                        (windDirection === 180 ? "West" :
                          (windDirection === 270 ? "South" :
                            (windDirection === 360 ? "East" : "Invalid"))))))))}</p>
          <p>UV Index: {weatherData.hourly.uv_index[0]}</p>
          <p>Precipitation:{weatherData.hourly.precipitation_probability[0]}%</p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
