import React from "react";



export default function WeatherInfo (props) {
    return (
    <div className="WeatherInfo">
        <h3>{props.data.city}</h3>
        <h4>{props.data.country}</h4>
        <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="temperature">{Math.round(props.data.temperature)} °C</div>
                <div className="iconic">Icon</div>
                </div>
                <div className="col-6">
                    <div className="parameters">
                        <div>Humdity: {props.data.humidity}%</div>
                         <div>Wind: {Math.round(props.data.wind)} km/h</div>
                          <div>Description: {props.data.description}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}