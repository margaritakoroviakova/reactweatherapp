import axios from "axios";
import React, { useState } from "react";

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function forecastResponse (response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }
    
    if (loaded) {
    console.log(forecast)
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="forecastDay">
                    Tue
                </div>
                <div><img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png" alt=""></img></div>
                <div className="forecastTemperature">
                    <span className="tempMax">3°</span>
                    <span className="tempMin ms-1">0°</span>
                </div>
            </div>
        </div>
    </div>
    );
    } else {
    let apiKey = "0f037oa9b63a1bde26ff4t7c8b350ada";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(forecastResponse);

    return null;
    }
}