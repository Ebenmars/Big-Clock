let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let secs = document.getElementById("secs");


let l = new Date();
console.log(l.getMonth() + 1);

setInterval(() => {

    let currentTime = new Date();

    hours.innerHTML = (currentTime.getHours() < 10 ? "0"  : "") + (currentTime.getHours());
    mins.innerHTML = (currentTime.getMinutes() < 10 ? "0"  : "") + (currentTime.getMinutes());
    secs.innerHTML = (currentTime.getSeconds() < 10 ? "0"  : "") + (currentTime.getSeconds());

    month.innerHTML = (currentTime.getMonth() + 1 < 10 ? "0"  : "") + (currentTime.getMonth() + 1);
date.innerHTML = (currentTime.getDate() < 10 ? "0"  : "") + (currentTime.getDate());
year.innerHTML = (currentTime.getFullYear() < 10 ? "0"  : "") + (currentTime.getFullYear());

},1000)

   




