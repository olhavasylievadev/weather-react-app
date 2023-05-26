import React from "react";

export default function FormatDate(props) {
        let currentDate = new Date(props.time);

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