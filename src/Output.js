import React from "react";
import FormatDate from "./FormatDate";
import "./Output.css";

export default function Output(props) {
        return (
            <div className="Output">
                <div>
                    <h1>{props.weatherData.city}</h1>
                    <div id="date"><FormatDate time={props.weatherData.time * 1000}/></div>
                    <div id="weather-is">{props.weatherData.description}</div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="d-flex weather-temperature">
                            <img src={props.weatherData.imageUrl} alt="weather-icon" id="icon" width={100} height={100}/>
                            <div className="text-weather">
                                <div>
                                    <span className="temperature"><strong>{Math.round(props.weatherData.temperature)}</strong></span>
                                    <span>°C</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="conditions">
                            <ul className="mt-1">
                                <li id="humidity">
                                    Humidity: <strong>{props.weatherData.humidity}%</strong>
                                </li>
                                <li id="wind-speed">
                                    Wind: <strong id="windy">{Math.round(props.weatherData.wind)}km/h</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
}