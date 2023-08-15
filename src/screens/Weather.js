import React from 'react'
import CurrentLocation from "../currentLocation"
import  "../App.css"

const Weather = () => {
  return (
    <div className='weather-background'>
    <div className='container'>
        <CurrentLocation />
      </div>
     </div> 
  )
}

export default Weather