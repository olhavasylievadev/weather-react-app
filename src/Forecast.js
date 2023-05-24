import React from "react";
import axios from "axios";

export default function Forecast(props) {
    function getForecast(city) {
        let apiForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=06fa5f0c173ae8o9ctd4134fb2530e34`;
        axios.get(apiForecast).then(displayForecast);
    }

    getForecast(props.city)
    function formatDay(timestamp) {
        let date = new Date(timestamp * 1000);
        let day = date.getDay();
        let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return week[day];
    }

    function displayForecast(response) {
        let dailyForecast = response.data.daily;
        let forecast = document.querySelector("#forecast");

        let forecastHTML = `<div class="row">`;

        dailyForecast.forEach(function (forecastDay, index) {
            if (index < 5) {
                forecastHTML =
                    forecastHTML +
                    `
      <div class="col">
        <div class="weather-forecast-date">${formatDay(forecastDay.time)}</div>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
                        forecastDay.condition.icon
                    }.png"
          alt="rain-day"
          width=""
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"><strong> ${Math.round(
                        forecastDay.temperature.maximum
                    )}° / </strong></span>
          <span class="weather-forecast-temperature-min">${Math.round(
                        forecastDay.temperature.minimum
                    )}° </span>
        </div>
      </div>
  `;
            }
        });

        forecastHTML = forecastHTML + `</div>`;
        forecast.innerHTML = forecastHTML;
    }

    return (
        <div className="forecast"></div>
    );
}