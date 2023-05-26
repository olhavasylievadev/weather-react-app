import React from "react";

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

        return (
            <div className="Output">
                <div>
                    <h1>{props.weatherData.city}</h1>
                    <div id="date">{formatTime(props.weatherData.time * 1000)}</div>
                    <div id="weather-is">{props.weatherData.description}</div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="d-flex weather-temperature">
                            <img src={props.weatherData.imageUrl} alt="light-rain" id="icon" width={100} height={100}/>
                            <div className="text-weather">
                                <strong id="temperature">{Math.round(props.weatherData.temperature)}</strong>
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