import React from "react";

export default function WeatherForecastDay (props) {
function maxTemp() {
    let temperature = Math.round(props.forecast[0].temperature.maximum);
    return `${temperature}`;
}

function minTemp() {
    let temperature = Math.round(props.forecast[0].temperature.minimum);
    return `${temperature}`;
}

function day() {
    let date = new Date(props.forecast[0].time*1000);
    let day = date.getDay();
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturdays"]
    return days[day];
}

return (
    <div>
<div className="forecastDay">
    {day()}
 </div>
<div><img src={props.forecast[0].condition.icon_url} alt=""></img></div>
<div className="forecastTemperature">
<span className="tempMax">{maxTemp()}°</span>
<span className="tempMin ms-1">{minTemp()}°</span>
</div>
</div>
);
}