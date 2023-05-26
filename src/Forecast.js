import React, {useState} from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    function getForecast() {
        let apiForecast = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=06fa5f0c173ae8o9ctd4134fb2530e34`;
        axios.get(apiForecast).then(displayForecast);
    }

    function displayForecast(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="Forecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <DailyForecast data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        getForecast()

        return null;
    }
}