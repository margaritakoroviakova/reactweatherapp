import React from "react";
import WeatherUnit from "./WeatherUnit";



export default function WeatherInfo (props) {

    return (
    <div className="WeatherInfo">
        <h3>{props.data.city}</h3>
        <span className="country">{props.data.country}</span>
        <div className="container">
            <div className="row">
                <div className="col-6">
                <WeatherUnit celsius={props.data.temperature}/>
                <div className="iconic">
                    <img className="iconic" src={props.data.iconUrl} alt={props.data.description}></img>
                </div>
                </div>
                <div className="col-6">
                    <div className="parameters">
                        <div>Humidity: {props.data.humidity}%</div>
                         <div>Wind: {Math.round(props.data.wind)} km/h</div>
                          <div>Description: {props.data.description}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}