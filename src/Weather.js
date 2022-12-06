import './App.css';
import axios from "axios";
import { useState } from 'react';
import WeatherInfo from "./WeatherInfo";
import DateToday from "./DateToday";

export default function Weather(props) {
let [weather, setWeather] = useState({ready:false});
let [city, setCity] = useState(props.defaultCity);


function weatherResponse (response) {
  setWeather({
  ready: true,
  date: new Date(response.data.time*1000),
  city: response.data.city,
  country: response.data.country,
  temperature: response.data.temperature.current,
  humidity: response.data.temperature.humidity,
  wind: response.data.wind.speed,
  description: response.data.condition.description,
  });
} 

function showCity (event) {
  setCity(event.target.value);
}

function handleSubmit (event) {
  event.preventDefault();
  searching();
}

function searching () {
  let apiKey = "0f037oa9b63a1bde26ff4t7c8b350ada";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(weatherResponse);
} 

if (weather.ready) {
  return (
    <div className="App">
      <h2><DateToday date={weather.date}/></h2>
          <form className="form" id="searching-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7 input">
                <input
                  type="text"
                  className="formControl"
                  id="city"
                  placeholder="Enter a city"
                  autoComplete="off"
                  onChange={showCity}
                />
              </div>
              <div className="col-4">
                <input type="submit" className="btn btn-primary primary" value='Search'/>
              </div>
            </div>
          </form>
          <WeatherInfo data={weather}/>
    </div>
  );
} else {
  searching();
  return "Wait a second, please..."
}
}



