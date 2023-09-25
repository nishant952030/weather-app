import React from 'react'
import './hour.css'
import cloudyImage from '../images/cloudy.png'
import partlyCloudy from '../images/partlycloudy.png'
import sunny from '../images/sunny-icon-23510.png'
import rainy from '../images/rainy.png'
import lightRain from '../images/Lovepik_com-401247557-father-and-daughter-in-the-rain.png'
import invalid from '../images/pngwing.com.png'

import thunder from '../images/pngwing.com(1).png'
function HourSection({ weatherData, time, hour }) {

  const amOrpm = hour < 12 ? "AM" : "PM"
  if (!weatherData) {
    return null;
  }
  const precipitation = weatherData.hourly.precipitation_probability[hour]
  const cloudcover = weatherData.hourly.cloudcover[hour]
  return (
    <div className='hourlysection__small'>
      <p className='time'>{time} {amOrpm}</p>
      {precipitation >= 0 && precipitation <= 10 && cloudcover >= 0 && cloudcover <= 10 ? <img className='sunny' src={sunny} alt='Weather' /> :
        (precipitation >= 11 && precipitation <= 50 && cloudcover >= 11 && cloudcover <= 75 ? <img className='partlycloudy' src={partlyCloudy} alt='Weather' /> :
          (precipitation >= 51 && precipitation <= 75 && cloudcover >= 51 && cloudcover <= 75 ? <img className='lightrain' src={lightRain} alt='Weather' /> :
            (precipitation >= 0 && precipitation <= 10 && cloudcover >= 11 && cloudcover <= 50 ? <img className='cloudyimage' src={cloudyImage} alt='Weather' /> :
              (precipitation >= 0 && precipitation <= 100 && cloudcover >= 51 && cloudcover <= 75 ? <img className='rainy' src={rainy} alt='Weather' /> :
                (precipitation >= 0 && precipitation <= 100 && cloudcover >= 76 && cloudcover <= 100 ? <img className='thunder' src={thunder} alt='Weather' /> :
                  <img className='invalid' src={invalid} alt='Weather' />)))))}
      <p className='hour-temp'>{Math.ceil(weatherData.hourly.temperature_2m[hour])}°</p>
        <p className='hour-humidity'>Humidity: {Math.ceil(weatherData.hourly.relativehumidity_2m[hour])}%</p>
        <p className='hour-preci'>Precip: {Math.ceil(weatherData.hourly.precipitation_probability[hour])}%</p>
        <p className='hour-wind'>Wind: {Math.ceil(weatherData.hourly.windspeed_10m[hour])}mph</p>

    </div>
  )
}

export default HourSection
//    Clear Sky (0% to 10% precipitation): Use a clear sky or sunny weather icon.

//  Partly Cloudy(11 % to 50 % cloud cover and up to 50 % precipitation): Use an icon with a mix of sun and clouds.

//Mostly Cloudy(51 % to 75 % cloud cover and up to 75 % precipitation): Use an icon with mostly clouds and some sun peeking through.

//Overcast(76 % to 100 % cloud cover and up to 100 % precipitation): Use an icon with complete cloud cover or even a rainy / cloudy icon.

//Rain or Precipitation(any precipitation percentage): Use an icon representing rain or precipitation.