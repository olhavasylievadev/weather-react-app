import React, {useState} from "react";

export default function TemperatureUnits(props) {
    const [unit, setUnit] = useState("celsius")

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("imperial")
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius") {
        return (
            <div className="TemperatureUnits">
                <span className="temperature"><strong>{Math.round(props.celsius)}</strong></span>
                <span className="unit">°C<a href="/" onClick={convertToFahrenheit}> | °F</a></span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32
        return (
            <div className="TemperatureUnits">
                <span className="temperature"><strong>{Math.round(fahrenheit)}</strong></span>
                <span className="unit" onClick={convertToCelsius}><a href="/">°C | </a>°F</span>
            </div>
        );
    }
}