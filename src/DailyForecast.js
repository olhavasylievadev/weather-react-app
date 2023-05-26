import React from "react";
import FormatDay from "./FormatDay";

export default function DailyForecast(props) {

      return(
          <div>
              <div className="DailyForecast"><FormatDay day={props.data.time * 1000} /></div>
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