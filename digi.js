// JS for the digital clock 

let frame = document.getElementById("frame");
let displayHour = document.getElementById("hours");
let displayMinute = document.getElementById("minutes");
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();

setInterval(printHours, 1000);
setInterval(printMinutes, 1000);
// setInterval(reloadClock, 5000);

function printHours() {
    if (hours < 10) {
        hours = "0" + hours;
        return;
    } else {
        displayHour.innerHTML = hours;
    }


}

function printMinutes() {
    if (minutes < 10) {
        minutes = "0" + minutes;
        return;
    } else {
        displayMinute.innerHTML = minutes;
        return;
    }

}

function reloadClock() {
    window.location = window.location.href;

}