import React from "react";

export default function WeatherForecastDay (props) {
function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
}

function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
}

function day() {
    let date = new Date(props.data.time*1000);
    let day = date.getDay();
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[day];
}

return (
<div className="forecastDay">
<div>{day()}</div>
<div><img src={props.data.condition.icon_url} alt=""></img></div>
<div className="forecastTemperature">
<span className="tempMax">{maxTemp()}°</span>
<span className="tempMin ms-1">{minTemp()}°</span>
</div>
</div>
);
}