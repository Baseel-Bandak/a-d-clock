/*Analoge Time*/
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

/*Digital Time*/
const secondDigital = document.querySelector('.dig-sec');
const minuteDigital = document.querySelector('.dig-mnt');
const hourDigital = document.querySelector('.dig-hur');

/*Date*/
const dayDigital = document.querySelector('.dig-day');
const monthDigital = document.querySelector('.dig-mth');
const yearDigital = document.querySelector('.dig-yer');



function setTime() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    /*Digital Time*/secondDigital.innerHTML = `${second < 10 ? '0' : ''}${second}`;
    /*Digital Time*/minuteDigital.innerHTML = `${minute < 10 ? '0' : ''}${minute}`;
    /*Digital Time*/hourDigital.innerHTML = `${hour < 10 ? '0' : ''}${hour}`;

    /*Date*/ dayDigital.innerHTML = now.getDate();
    /*Date*/ monthDigital.innerHTML = now.getMonth() + 1;
    /*Date*/ yearDigital.innerHTML = now.getYear() - 100;
}
setInterval(setTime, 1000);

/*Change background color*/
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));