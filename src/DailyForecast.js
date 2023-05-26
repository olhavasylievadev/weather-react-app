import React from "react";

export default function DailyForecast(props) {
      function formatDay() {
          let date = new Date(props.data.time * 1000);
          let day = date.getDay();
          let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

          return week[day];
      }

      return(
          <div>
              <div className="DailyForecast">{formatDay()}</div>
              <img
                  src={`${props.data.condition.icon_url}`}
                  alt="weather-icon"
                  width=""
              />
              <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max"><strong>{Math.round(props.data.temperature.maximum)}° / </strong></span>
                  <span className="weather-forecast-temperature-min">{Math.round(props.data.temperature.minimum)}° </span>
              </div>
          </div>
      );
}