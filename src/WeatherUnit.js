import React, {useState} from "react";

export default function WeatherUnit (props) {
    let [unit, setUnit] = useState("celsius");

    function showFahrenheit () {
        setUnit("fahrenheit");
    }

    function showCelsius () {
        setUnit("celsius");
    }

   if (unit === "celsius") {
   return (
    <div>
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="cel">°C | <a href="#" onClick={showFahrenheit}> °F </a></span>
    </div>   
    );
   } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
    <div>
    <span className="temperature">{Math.round(fahrenheit)}</span>
    <span className="cel"><a href="#" onClick={showCelsius}>°C </a> | °F </span>
    </div> 
    );
   }
}