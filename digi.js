// // JS for the digital clock 

// let frame = document.getElementById("frame");
// let displayHour = document.getElementById("hours");
// let displayMinute = document.getElementById("minutes");
// const date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();

// setInterval(printHours, 1000);
// setInterval(printMinutes, 1000);
// // setInterval(reloadClock, 5000);

// function printHours() {
//     if (hours < 10) {
//         hours = "0" + hours;
//         return;
//     } else {
//         displayHour.innerHTML = hours;
//     }


// }

// function printMinutes() {
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//         return;
//     } else {
//         displayMinute.innerHTML = minutes;
//         return;
//     }

// }

// function reloadClock() {
//     window.location = window.location.href;

// }

function updateClock() {
    let date = new Date;
    let day = date.getDay(),
        month = date.getMonth(),
        dateNumber = date.getDate(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        timePeriod = "AM";

    if (hour == 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
        timePeriod = "PM";
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let htmlIDs = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    let variables = [week[day], months[month], dateNumber.pad(2), year, hour.pad(2), minutes.pad(2), seconds.pad(2), timePeriod];

    for (var i = 0; i < htmlIDs.length; i++) {
        document.getElementById(htmlIDs[i]).firstChild.nodeValue = variables[i];
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1)
}