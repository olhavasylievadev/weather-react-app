import React from "react";
import "./App.css";
import Form from "./Form.js";

export default function Weather() {
  return (
      <div className="container">
        <br />
        <div className="frame">
          <div className="d-flex flex-column gap-4">
            <Form />
          </div>
          <br />
          <br />
          <br />
          <p className="author">
            Coded by{" "}
            <a
                href="https://github.com/olhavasylievadev/weather-app"
                target="_blank"
                rel="noreferrer noopenner"
            >
              Olha Vasylieva
            </a>
          </p>
        </div>
      </div>
  );
}
