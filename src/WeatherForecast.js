import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay"; 

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function forecastResponse (response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }
    
    if (loaded) {
    console.log(forecast);
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <WeatherForecastDay forecast={forecast}/>
            </div>
        </div>
    </div>
    );
    } else {
    let apiKey = "0f037oa9b63a1bde26ff4t7c8b350ada";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(forecastResponse);

    return null;
    }
}