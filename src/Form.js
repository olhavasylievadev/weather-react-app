import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Output from "./Output";
import Forecast from "./Forecast";

export default function Form(props) {
    let [city, setCity] = useState(props.defaultCity);
    let [weather, setWeather] = useState({ready: false, city:props.defaultCity});
    const apiKey = "06fa5f0c173ae8o9ctd4134fb2530e34";
    const units = "metric";

    function handleSubmit(event) {
        event.preventDefault();

        getWeather();
    }

    function handleClick() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocationWeather, error);
        } else {
            alert("Geolocation not supported");
        }
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    function getLocationWeather(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`
        axios.get(apiUrl).then(updateInfo);
    }

    function getWeather() {
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(updateInfo);
    }

    function updateInfo(response) {
        setWeather({
            ready: true,
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            imageUrl: response.data.condition.icon_url,
            time: new Date(response.data.time),
            city: response.data.city
        })
    }

    if(weather.ready) {
        return (
            <div>
                <div className="Form" onSubmit={handleSubmit}>
                    <form className="mb-3">
                        <div className="row">
                            <div className="col-sm-8">
                                <input
                                    className="form-control me-1 searchbar"
                                    type="search"
                                    id="my-city"
                                    placeholder="🔎Search for your city"
                                    aria-label="Search"
                                    onChange={(event) => setCity(event.target.value)}
                                />
                            </div>
                            <div className="col-sm-2">
                                <input
                                    className="btn searchbutton"
                                    type="submit"
                                    id="search-city"
                                    value="Search"
                                />
                            </div>
                            <div className="col-sm-2">
                                <input
                                    className="btn searchbutton"
                                    type="submit"
                                    id="my-location"
                                    value="Locate"
                                    onClick={handleClick}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <Output
                    weatherData={weather}
                />
                <Forecast
                    city={weather.city}
                />
            </div>
        );
    } else {
        getWeather();

        return "Application is loading...";
    }
}
