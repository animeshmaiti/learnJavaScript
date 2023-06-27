let time = document.querySelector('#time');
let date = document.querySelector('#date');
let a;
document.addEventListener('DOMContentLoaded', () => {
    a=setInterval(showTime, 1000);
});
const stopTime = () => {
    clearInterval(a);
}
const showTime = () => {
    let a = new Date();
    let hours = a.getHours();
    let period = hours >= 12 ? 'pm' : 'am';
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    let dd = a.getDate();
    let yy = a.getFullYear();
    // Get the month name
    let monthName = a.toLocaleString('default', { month: 'short' });
    console.log(monthName);
    // Get the day name
    let dayName = a.toLocaleString('default', { weekday: 'short' });

    hours=hours<10?`0${hours}`:hours;
    minutes=minutes<10?`0${minutes}`:minutes;
    seconds=seconds<10?`0${seconds}`:seconds;

    time.innerHTML = `${hours}:${minutes}:
    <span class="seconds">${seconds}</span>
    <div class="time-of-day">${period}</div>`;

    date.innerHTML = `${dayName}, ${dd} ${monthName} ${yy}`;
}


