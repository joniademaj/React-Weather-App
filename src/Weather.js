import React from 'react'
import { useState } from 'react';
import DisplayWeather from './DisplayWeather';

function Weather() {
    
    const [form, setForm] = useState({
        place: "",
    });
    const [weather, setWeather] = useState([]);

    const weatherData = async (e) => {
        e.preventDefault();
        if(form.place === ""){
            alert("You must write a Country or a City");
        }else{
            const data = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=c43fc5d3f3d74d3899c114616211111&q=${form.place}`
            )

            .then(response => response.json())
            .then((data) => data)
            .catch((e) => console.log(e));

            setWeather({
                data: data
            });
        }
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value;

        if(searchValue){
            setForm({...form, place:searchValue});
        }
    }

    

    return (
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={(e) => handleSearch(e)} 
                    className="search">
                </input>

                <button 
                    className="getweather" 
                    onClick={(e) => weatherData(e)}>
                    Submit
                </button>
            </form>

            {
                weather.data &&

                <div>
                    <DisplayWeather data={weather.data}/>
                </div>
                
            }
        </div>
    )
}

export default Weather;