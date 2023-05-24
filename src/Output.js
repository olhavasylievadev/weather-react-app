import React from "react";
import Forecast from "./Forecast";

export default function Output(props) {
    function formatTime(timestamp) {
        let currentDate = new Date(timestamp);

        let hour = currentDate.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }

        let minute = currentDate.getMinutes();
        if (minute < 10) {
            minute = `0${minute}`;
        }

        let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let today = week[currentDate.getDay()];

        return `${today} ${hour}:${minute}`
    }

    if (props.description) {
        return (
            <div className="output">
                <div>
                    <h1>{props.city}</h1>
                    <div id="date">{formatTime(props.time * 1000)}</div>
                    <div id="weather-is">{props.description}</div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="d-flex weather-temperature">
                            <img src={props.image} alt="light-rain" id="icon" width={100} height={100}/>
                            <div className="text-weather">
                                <strong id="temperature">{Math.round(props.temperature)}</strong>
                                <span className="system">
                  <span className="units active"> °C </span>
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="conditions">
                            <ul className="mt-1">
                                <li id="humidity">
                                    Humidity: <strong>{props.humidity}%</strong>
                                </li>
                                <li id="wind-speed">
                                    Wind: <strong id="windy">{props.wind}km/h</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="weather-forecast" id="forecast">
                    <Forecast
                        city={props.city}
                    />
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="output">
                <div>
                    <h1>Berlin</h1>
                    <div id="date">Wednesday, 13:00</div>
                    <div id="weather-is">Cloudy</div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="d-flex weather-temperature">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="light-rain" id="icon" width={100} height={100}/>
                            <div className="text-weather">
                                <strong id="temperature">20</strong>
                                <span className="system">
                  <span className="units active"> °C </span>
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="conditions">
                            <ul className="mt-1">
                                <li id="humidity">
                                    Humidity: <strong>67%</strong>
                                </li>
                                <li id="wind-speed">
                                    Wind: <strong id="windy">5km/h</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="weather-forecast" id="forecast">
                    <Forecast
                        city="Berlin"
                    />
                </div>
            </div>
        );
    }
}