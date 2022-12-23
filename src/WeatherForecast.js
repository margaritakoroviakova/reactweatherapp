import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay"; 

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.city]);

    function forecastResponse (response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }
    
    if (loaded) {
    return (
    <div className="WeatherForecast">
        <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className="col" key={index}><WeatherForecastDay data={dailyForecast}/> </div>
                        ); 
                    } else {
                        return null;
                    }
                })}
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