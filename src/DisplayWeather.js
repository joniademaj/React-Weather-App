import React from 'react'
import './App.css'

function DisplayWeather( { data } ) {
    return (
        <div className="weather-content">
            <div className="card">
                <div className="time">
                    <p>{data.location.localtime}</p>
                </div>
                <div className="condition">
                    <img src={data.current.condition.icon} className="img"></img>
                </div>
                <div className="temp">
                    <p>Celcius: {data.current.temp_c}<sup>o</sup></p>
                    <p>Fahrenheit: {data.current.temp_f}<sup>o</sup></p>
                    <p>Wind: {data.current.wind_kph}Kmh <br /> {data.current.wind_mph} Mph</p>
                </div>
                <div className="place">
                    <p>{data.location.country}, {data.location.name}</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather;
