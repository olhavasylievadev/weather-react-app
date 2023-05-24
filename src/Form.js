import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Output from "./Output";

export default function Form() {
    let [city, setCity] = useState(null);
    let [temperature, setTemperature] = useState(null);
    let [description, setDescription] = useState(null);
    let [wind, setWind] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [image, setImage] = useState(null);
    let [currentTime, setCurrentTime] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        let apiKey = "06fa5f0c173ae8o9ctd4134fb2530e34";
        let units = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(updateInfo);
    }

    function updateInfo(response) {
        setTemperature(response.data.temperature.current);
        setDescription(response.data.condition.description);
        setWind(response.data.wind.speed);
        setHumidity(response.data.temperature.humidity);
        setImage(response.data.condition.icon_url);
        setCurrentTime(response.data.time)
    }

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
                                className="btn btn-primary searchbutton"
                                type="submit"
                                id="search-city"
                                value="Search"
                            />
                        </div>
                        <div className="col-sm-2">
                            <input
                                className="btn btn-primary searchbutton"
                                type="submit"
                                id="my-location"
                                value="Locate"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <Output
                city={city}
                temperature={temperature}
                description={description}
                wind={wind}
                humidity={humidity}
                image={image}
                time={currentTime}
            />
        </div>
    );
}
