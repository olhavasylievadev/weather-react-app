import React from "react";

export default function FormatDay(props) {
    let date = new Date(props.day);
    let day = date.getDay();
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return week[day];
}