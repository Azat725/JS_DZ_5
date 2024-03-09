const currentDate = new Date();
const nextYear = currentDate.getFullYear() + 1;
const newYearDate = new Date(`Junuary 1, ${nextYear} 00:00:00`);

const diffMilliseconds = newYearDate - currentDate;

const seconds = Math.floor((diffMilliseconds / 1000) % 60)
const minutes = Math.floor((diffMilliseconds / 1000 / 60) % 60)
const hours = Math.floor((diffMilliseconds / (1000 * 60 * 60)) % 24)  
const days = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24))

const countdownElement = document.getElementById("countdown");
countdownElement.innerHTML = `
<span class="time_value days">${days}</span>
<span class="time_unit">days</span>

<span class="time_value hours">${hours}</span>
<span class="time_unit">hours</span>

<span class="time_value minutes">${minutes}</span>
<span class="time_unit">minutes</span>

<span class="time_value seconds">${seconds}</span>
<span class="time_unit">seconds</span>
`